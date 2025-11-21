"use client";
export const dynamic = "force-static";

import { Box, Card, CardContent, Container, Stack, Typography, Chip } from "@mui/material";
import Link from "next/link";

const sampleProjects = [
  {
    title: "Flotte utilitaire",
    detail: "Covering partiel sur 12 véhicules + micro-perf arrière, pose mobile.",
  },
  {
    title: "Totem retail",
    detail: "Totem 4m double face + caisson lumineux vitrine, permis compris.",
  },
  {
    title: "Signalétique bureaux",
    detail: "Panneaux directionnels, marquage vitrines, plaques plexi, numbering.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Box className="bg-[var(--surface-muted)]/90 border-b border-[var(--border-soft)]">
        <Container maxWidth="lg" className="px-4 py-10">
          <Stack spacing={2}>
            <Chip label="Projets" className="w-fit bg-[var(--chip-surface)] text-[var(--text-primary)]" />
            <Typography variant="h3" className="text-[var(--text-primary)]">
              Quelques réalisations récentes.
            </Typography>
            <Typography className="text-[var(--text-secondary)] max-w-3xl">
              De la flotte aux enseignes lumineuses, on gère le design, l&apos;impression et la pose.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" className="px-4 py-10">
        <Stack spacing={3}>
          {sampleProjects.map((proj) => (
            <Card key={proj.title} className="bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-soft)]">
              <CardContent className="space-y-2">
                <Typography variant="h6">{proj.title}</Typography>
                <Typography className="text-[var(--text-secondary)]">{proj.detail}</Typography>
              </CardContent>
            </Card>
          ))}
          <Typography component={Link} href="/contact-us" className="text-[var(--brand-blue)] font-semibold">
            Parlez-nous de votre prochain projet →
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}
