"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { EmailRounded, PhoneInTalkRounded } from "@mui/icons-material";
import { useThemeMode } from "../ThemeRegistry";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
];

export default function SiteHeader() {
  const { mode, setMode } = useThemeMode();
  const pathname = usePathname();
  const isDark = mode === "dark";

  return (
    <header className="bg-[var(--surface)]/90 backdrop-blur-md text-[var(--text-primary)] border-b border-[var(--border-soft)]">
      <Container
        maxWidth="lg"
        className="grid gap-2 sm:gap-4 px-2 sm:px-4 py-1 grid-cols-[1fr_auto_1fr] items-center"
      >
        <Stack direction="row" spacing={1} padding={0} alignItems="center">
          <Button
            component="a"
            href="tel:0466307208"
            aria-label="Appeler"
            variant="outlined"
            color="secondary"
            size="small"
            className="min-w-11 px-1 sm:px-2  flex justify-center items-center"
            sx={{ minWidth: 44, px: 1.5, justifyContent: "center" }}
          >
            <PhoneInTalkRounded className="text-sm! sm:text-lg!"/>
          </Button>
          <Button
            component="a"
            href="mailto:CONTACT@PUBZA.BE"
            aria-label="Envoyer un mail"
            variant="outlined"
            color="primary"
            size="small"
            className="min-w-11 px-1 sm:px-2 flex justify-center items-center"
            sx={{ minWidth: 44, px: 1.5, justifyContent: "center" }}
          >
            <EmailRounded className="text-sm! sm:text-lg!"/>
          </Button>
        </Stack>

        <Box className="flex items-center justify-center sm:justify-self-center">
          <Typography
            variant="h5"
            className="rounded-full bg-[var(--surface-contrast)] px-5 py-2 font-black tracking-tight text-[var(--text-contrast)] shadow-lg"
          >
            PUBZA
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="flex-end"
          className="sm:justify-self-end"
        >
          <Typography variant="body2" className="text-[var(--text-secondary)]">
            Dark theme
          </Typography>
          <Switch
            checked={isDark}
            onChange={() => setMode(isDark ? "light" : "dark")}
            color="primary"
            inputProps={{ "aria-label": "Toggle dark theme" }}
          />
        </Stack>
      </Container>

      <Container maxWidth="lg" className="px-4 py-1">
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" gap={1}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              variant={
                link.href === "/"
                  ? pathname === "/" ? "contained" : "text"
                  : pathname.startsWith(link.href)
                    ? "contained"
                    : "text"
              }
              color={
                link.href === "/"
                  ? pathname === "/" ? "primary" : "inherit"
                  : pathname.startsWith(link.href)
                    ? "primary"
                    : "inherit"
              }
              className="text-sm font-semibold"
              aria-current={
                link.href === "/"
                  ? pathname === "/" ? "page" : undefined
                  : pathname.startsWith(link.href)
                    ? "page"
                    : undefined
              }
            >
              {link.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </header>
  );
}
