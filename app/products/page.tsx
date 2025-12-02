"use client";
export const dynamic = "force-static";

import { Box, Container, Stack, Typography, Card, CardContent, Chip, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const productCategories = [
  {
    id: "vehicules",
    title: "Véhicules",
    detail:
      "Covering intégral ou partiel pour utilitaires, camions ou flottes complètes. Préparation des surfaces, micro-perf arrière, vinyles longue durée et pose mobile sur votre site.",
    features: ["Flottes multi-sites", "Covering longue durée", "Micro-perf"],
    image: "/imgs/car-pubza-exp.png",
  },
  {
    id: "enseignes",
    title: "Enseignes & vitrines",
    detail:
      "Conception, fabrication et pose d’enseignes lumineuses, lettres découpées, caissons et vitrophanie. Gestion des permis, choix des matériaux, câblage LED et installation sécurisée.",
    features: ["LED / rétro-éclairage", "Lettres découpées", "Vitrophanie"],
    image: "/imgs/shop-sign.png",
  },
  // {
  //   id: "signaletique",
  //   title: "Signalétique",
  //   detail:
  //     "Panneaux directionnels, totems, PLV et marquage sécurité. Formats XL, matières résistantes (alu, dibond, PVC) et fixations adaptées pour intérieur ou extérieur.",
  //   features: ["Formats XL", "Extérieur / intérieur", "Installation sur site"],
  //   image: "/imgs/car-pubza.png",
  // },
  {
    id: "print",
    title: "Print rapide",
    detail:
      "Flyers, brochures, menus, affiches et cartes avec finitions premium. Grammages variés, vernis sélectif ou soft touch, pliage et livraison rapide pour vos campagnes.",
    features: ["Express", "Finitions premium", "Quantités flexibles"],
    image: "/imgs/flyer.png",
  },
  {
    id: "graphisme",
    title: "Graphisme & identité",
    detail:
      "Logos, chartes graphiques et maquettes prêtes à imprimer. Déclinaisons multi-supports, préparation fichiers de coupe et accompagnement pour garder une identité cohérente.",
    features: ["Branding complet", "PAO prête à imprimer", "Déclinaisons print"],
    image: "/imgs/identity.png",
  },
  {
    id: "digital",
    title: "Sites web & supports digitaux",
    detail:
      "Landing pages, mini-sites et visuels réseaux alignés sur vos campagnes print. Intégration des visuels, animations légères, copywriting et mise en place du tracking.",
    features: ["Responsive", "Animations légères", "Tracking prêt"],
    image: "/imgs/website.png",
  },
  {
    id: "textile",
    title: "Objets & textiles",
    detail:
      "Textiles pro, goodies et personnalisation série courte. Sélection des supports, marquage durable et livraison coordonnée avec vos autres supports de communication.",
    features: ["Séries courtes", "Textiles pro", "Marquage durable"],
    image: "/imgs/tshirt.png",
  },
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
            <Card
              key={item.title}
              id={item.id}
              className="bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-soft)] scroll-mt-28"
            >
              <CardContent className="space-y-3">
                <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="center">
                  <Box className="relative h-52! min-w-xs rounded-lg overflow-hidden flex! justify-center! items-center! mx-auto!">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover! p-4 w-auto! mx-auto"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  </Box>
                    <Stack spacing={1.5} className="flex-1 !py-1">
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography className="text-[var(--text-secondary)]">{item.detail}</Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {item.features.map((feature) => (
                        <Chip
                          key={feature}
                          label={feature}
                          size="small"
                          className="bg-[var(--chip-surface)] text-[var(--text-primary)]"
                          />
                        ))}
                      </Stack>
                    </Stack>
                    <Button
                      component={Link}
                      href={`/contact-us?topic=${item.id}`}
                      variant="contained"
                      color="primary"
                      size="small"
                      className="text-sm h-10"
                    >
                      Demander un devis
                    </Button>
                </Stack>
                
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
