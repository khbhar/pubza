"use client";
export const dynamic = "force-static";

import { Box, Card, CardContent, Container, Stack, Typography, Chip } from "@mui/material";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Box className="bg-[var(--surface-muted)]/90 border-b border-[var(--border-soft)]">
        <Container maxWidth="lg" className="px-4 py-10">
          <Stack spacing={2}>
            <Chip label="À propos" className="w-fit bg-[var(--chip-surface)] text-[var(--text-primary)]" />
            <Typography variant="h3" className="text-[var(--text-primary)]">
              PUBZA, atelier de visibilité.
            </Typography>
            <Typography className="text-[var(--text-secondary)] max-w-3xl">
              Nous accompagnons les pros avec des supports qui tiennent dans le temps et un conseil
              direct. Design, impression, pose : tout est géré en un seul flux.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" className="px-4 py-10">
        <Card className="bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-soft)]">
          <CardContent className="space-y-3">
            <Typography variant="h6">Ce qui nous drive</Typography>
            <Typography className="text-[var(--text-secondary)]">
              Réactivité, précision, finitions propres. Nous travaillons avec des matières durables et
              des process rapides pour vos flottes, enseignes, signalétique, print et web.
            </Typography>
            <Typography variant="h6">Zone</Typography>
            <Typography className="text-[var(--text-secondary)]">
              Basés en Belgique, pose mobile sur site ou retrait atelier. Livraison nationale selon vos
              délais.
            </Typography>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-soft)]">
          <CardContent className="space-y-3">
            <Typography variant="h6">Nous trouver</Typography>
            <Typography className="text-[var(--text-secondary)]">
              123 Placeholder Street, Brussels — remplacez par l’adresse finale avant mise en ligne.
            </Typography>
            <Box className="rounded-lg overflow-hidden border border-[var(--border-soft)] shadow-sm">
              <Box className="relative" sx={{ paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  title="PUBZA placeholder map"
                  src="https://www.google.com/maps?q=123+Placeholder+Street,+Brussels&output=embed"
                  style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
}
