"use client";
export const dynamic = "force-static";

import { Box, Container, Stack, Typography, Card, CardContent, Chip } from "@mui/material";
import Link from "next/link";

const productCategories = [
  { title: "Véhicules", detail: "Covering, marquage flottes, micro-perf, lettrage." },
  { title: "Enseignes & vitrines", detail: "Caissons lumineux, lettres découpées, vitrophanie." },
  { title: "Signalétique", detail: "Panneaux, totems, directionnel, PLV et stands." },
  { title: "Print rapide", detail: "Flyers, brochures, cartes, menus, affiches." },
  { title: "Objets & textiles", detail: "Textiles pro, goodies, personnalisation série courte." },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Box className="bg-[var(--surface-muted)]/90 border-b border-[var(--border-soft)]">
        <Container maxWidth="lg" className="px-4 py-10">
          <Stack spacing={2}>
            <Chip label="Produits" className="w-fit bg-[var(--chip-surface)] text-[var(--text-primary)]" />
            <Typography variant="h3" className="text-[var(--text-primary)]">
              Tous vos supports pour être vu.
            </Typography>
            <Typography className="text-[var(--text-secondary)] max-w-3xl">
              PUBZA conçoit, imprime et pose vos supports : véhicules, enseignes, signalétique, print et textiles.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" className="px-4 py-10">
        <Stack spacing={3}>
          {productCategories.map((item) => (
            <Card key={item.title} className="bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-soft)]">
              <CardContent className="space-y-2">
                <Typography variant="h6">{item.title}</Typography>
                <Typography className="text-[var(--text-secondary)]">{item.detail}</Typography>
              </CardContent>
            </Card>
          ))}
          <Typography component={Link} href="/contact-us" className="text-[var(--brand-blue)] font-semibold">
            Besoin d&apos;un devis produit ? Contactez-nous →
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}
