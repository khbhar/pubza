"use client";

import { useEffect, useRef } from "react";

type ErrorPayload = {
  type: "error" | "unhandledrejection";
  message: string;
  stack?: string;
  source?: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  url: string;
  userAgent: string;
  timestamp: string;
};

function sendError(payload: ErrorPayload) {
  const body = JSON.stringify(payload);
  if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon("/api/client-error", blob);
    return;
  }

  fetch("/api/client-error", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // Avoid throwing during error reporting.
  });
}

export default function ClientErrorReporter() {
  const sentCountRef = useRef(0);
  const lastSentAtRef = useRef(0);

  useEffect(() => {
    function shouldSend() {
      const now = Date.now();
      if (sentCountRef.current >= 5) {
        return false;
      }
      if (now - lastSentAtRef.current < 2000) {
        return false;
      }
      lastSentAtRef.current = now;
      sentCountRef.current += 1;
      return true;
    }

    function handleError(event: ErrorEvent) {
      if (!shouldSend()) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const source =
        target &&
        typeof (target as { src?: string }).src === "string" &&
        (target as { src?: string }).src
          ? (target as { src?: string }).src
          : target &&
              typeof (target as { href?: string }).href === "string" &&
              (target as { href?: string }).href
            ? (target as { href?: string }).href
            : undefined;

      sendError({
        type: "error",
        message: event.message || "Resource load error",
        stack: event.error?.stack,
        source,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      });
    }

    function handleRejection(event: PromiseRejectionEvent) {
      if (!shouldSend()) {
        return;
      }

      const reason =
        event.reason instanceof Error
          ? { message: event.reason.message, stack: event.reason.stack }
          : { message: String(event.reason) };

      sendError({
        type: "unhandledrejection",
        message: reason.message || "Unhandled rejection",
        stack: reason.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      });
    }

    window.addEventListener("error", handleError, true);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError, true);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}
