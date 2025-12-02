"use server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  project?: string;
  topic?: string;
};

function validate(body: ContactPayload) {
  if (!body.name || !body.email || !body.project) {
    return "Veuillez renseigner au minimum votre nom, email et le détail du projet.";
  }
  return null;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const error = validate(body);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { error: "Configuration SMTP manquante. Contactez l’administrateur." },
      { status: 500 }
    );
  }

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const text = [
    `Nom/Entreprise: ${body.name}`,
    `Email: ${body.email}`,
    `Téléphone: ${body.phone || "—"}`,
    `Sujet: ${body.topic || "Non précisé"}`,
    "",
    "Projet:",
    body.project,
  ].join("\n");

  try {
    await transport.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: SMTP_TO || SMTP_FROM || SMTP_USER,
      subject: `Nouveau message site PUBZA - ${body.name}`,
      replyTo: body.email,
      text,
    });
  } catch (err) {
    console.error("SMTP error", err);
    return NextResponse.json(
      { error: "Impossible d’envoyer le message pour le moment." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
