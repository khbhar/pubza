"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import {
  EmailRounded,
  PhoneInTalkRounded,
  PlaceRounded,
  PointOfSale,
} from "@mui/icons-material";

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Produits", href: "/products" },
  { label: "Projets", href: "/projects" },
  { label: "À propos", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] text-[var(--text-primary)] border-t border-[var(--border-soft)] mt-10">
      <Container maxWidth="lg" className="px-4 py-8">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
        >
          <Stack spacing={1.5} className="max-w-md">
            <Typography variant="h6" className="font-bold tracking-tight">
              PUBZA
            </Typography>
            <Typography className="text-[var(--text-secondary)]">
              Enseignes, lettrage, impression et pose. On rend vos supports
              visibles avec des finitions propres et des délais maîtrisés.
            </Typography>
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="subtitle1" className="font-semibold">
              Contact
            </Typography>
            <Stack spacing={1} className="text-[var(--text-secondary)]">
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneInTalkRounded fontSize="small" />
                <MuiLink
                  href="tel:+320466307208"
                  className="text-[var(--text-primary)] no-underline hover:text-[var(--brand-blue)]"
                >
                  +32 0466 30 72 08
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailRounded fontSize="small" />
                <MuiLink
                  href="mailto:CONTACT@PUBZA.BE"
                  className="text-[var(--text-primary)] no-underline hover:text-[var(--brand-blue)]"
                >
                  CONTACT@PUBZA.BE
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <PointOfSale fontSize="small" className="mt-0.5" />
                <Typography className="text-[var(--text-secondary)]">
                  TVA : BE 0740.963.006
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="subtitle1" className="font-semibold">
              Liens
            </Typography>
            <Stack spacing={0.75}>
              {footerLinks.map((link) => (
                <MuiLink
                  key={link.href}
                  component={Link}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--brand-blue)] no-underline font-semibold"
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Divider className="my-6 border-[var(--border-soft)]" />
        <Box className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <Typography variant="caption" className="text-[var(--text-secondary)]">
            © 2025 PUBZA. Tous droits réservés.
          </Typography>
          <Typography variant="caption" className="text-[var(--text-secondary)]">
            Signs & Printing — design, impression, pose.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
