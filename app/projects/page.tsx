"use client";
export const dynamic = "force-static";

import { Box, Card, CardContent, Container, Stack, Typography, Chip, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const sampleProjects = [
  {
    title: "Véhicules",
    detail: "Covering, marquage flottes, micro-perf, lettrage.",
    images: ["/imgs/projects/voiture/car1.jpg", "/imgs/projects/voiture/car2.jpg", "/imgs/projects/voiture/car3.jpg", 
      "/imgs/projects/voiture/car4.jpg", "/imgs/projects/voiture/car5.jpg", "/imgs/projects/voiture/car6.jpg", "/imgs/projects/voiture/car7.jpg"],
  },
  {
    title: "Enseignes & vitrines",
    detail: "Caissons lumineux, lettres découpées, vitrophanie.",
    images: ["/imgs/projects/enseigne/sign1.jpg", "/imgs/projects/enseigne/sign2.jpg", "/imgs/projects/enseigne/sign3.jpg",  
      "/imgs/projects/enseigne/sign4.jpg", "/imgs/projects/enseigne/sign5.jpg", "/imgs/projects/enseigne/sign6.jpg",  "/imgs/projects/enseigne/sign7.jpg"
    , "/imgs/projects/enseigne/sign8.jpg", "/imgs/projects/enseigne/sign9.jpg",  "/imgs/projects/enseigne/sign10.jpg"],
  },
  {
    title: "autres réalisations",
    detail: "",
    images: ["/imgs/projects/autres/autres1.jpg", "/imgs/projects/autres/autres2.jpg", "/imgs/projects/autres/autres3.jpg", 
      "/imgs/projects/autres/autres4.jpg", "/imgs/projects/autres/autres5.jpg", "/imgs/projects/autres/autres6.jpg", ],
  },
];

type Project = (typeof sampleProjects)[number];

function ProjectCard({ project }: { project: Project }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <Card className="bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-soft)] overflow-hidden">
      <CardContent className="space-y-3">
        <Box className="flex items-start justify-between gap-3">
          <Box>
            <Typography variant="h6">{project.title}</Typography>
            <Typography className="text-[var(--text-secondary)]">{project.detail}</Typography>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center" className="shrink-0">
            <IconButton aria-label="Précédent" size="small" onClick={scrollPrev} className="border border-[var(--border-soft)]">
              {"<"}
            </IconButton>
            <IconButton aria-label="Suivant" size="small" onClick={scrollNext} className="border border-[var(--border-soft)]">
              {">"}
            </IconButton>
          </Stack>
        </Box>

        <Box className="relative rounded-lg overflow-hidden border border-[var(--border-soft)]">
          <Box className="embla overflow-hidden" ref={emblaRef}>
            <Box className="embla__container flex">
              {project.images.map((src, idx) => (
                <Box key={src + idx} className="embla__slide basis-full shrink-0 relative h-56 sm:h-72 bg-[var(--surface-muted)]">
                  <Image
                    src={src}
                    alt={`${project.title} visuel ${idx + 1}`}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={idx === 0}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

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
            <ProjectCard key={proj.title} project={proj} />
          ))}
          <Typography component={Link} href="/contact-us" className="text-[var(--brand-blue)] font-semibold">
            Parlez-nous de votre prochain projet →
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}
