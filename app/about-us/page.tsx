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
      </Container>
    </main>
  );
}
