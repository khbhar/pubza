"use client";
export const dynamic = "force-static";

import { Box, Card, CardContent, Container, Stack, Typography, Chip, IconButton, Modal } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { ChevronLeftRounded, ChevronRightRounded, CloseRounded } from "@mui/icons-material";

const sampleProjects = [
  {
    title: "Véhicules",
    detail: "Covering, marquage flottes, micro-perf, lettrage.",
    images: [
      "/imgs/projects/voiture/2.jpg", 
      "/imgs/projects/voiture/4.jpg", "/imgs/projects/voiture/5.jpg", 
      "/imgs/projects/voiture/8.jpg", "/imgs/projects/voiture/9.jpg",
      "/imgs/projects/voiture/14.jpg", "/imgs/projects/voiture/15.jpg",
      "/imgs/projects/voiture/18.jpg",
      "/imgs/projects/voiture/19.jpg", "/imgs/projects/voiture/20.jpg", "/imgs/projects/voiture/21.jpg",
      "/imgs/projects/voiture/23.jpg", "/imgs/projects/voiture/24.jpg",
      "/imgs/projects/voiture/25.jpg", "/imgs/projects/voiture/26.jpg", "/imgs/projects/voiture/27.jpg",
      "/imgs/projects/voiture/28.jpg", "/imgs/projects/voiture/29.jpg", "/imgs/projects/voiture/30.jpg",
      "/imgs/projects/voiture/31.jpg", "/imgs/projects/voiture/32.jpg", "/imgs/projects/voiture/33.jpg",
      "/imgs/projects/voiture/34.jpg", "/imgs/projects/voiture/35.jpg", "/imgs/projects/voiture/36.jpg",
      "/imgs/projects/voiture/37.jpg", "/imgs/projects/voiture/38.jpg", "/imgs/projects/voiture/39.jpg",
      "/imgs/projects/voiture/40.jpg", "/imgs/projects/voiture/41.jpg", "/imgs/projects/voiture/42.jpg",
      "/imgs/projects/voiture/43.jpg",
    ],
  },
  {
    title: "Enseignes & vitrines",
    detail: "Caissons lumineux, lettres découpées, vitrophanie.",
    images: ["/imgs/projects/enseigne/1.jpg", "/imgs/projects/enseigne/2.jpg", "/imgs/projects/enseigne/3.jpg",  
      "/imgs/projects/enseigne/4.jpg", "/imgs/projects/enseigne/5.jpg", "/imgs/projects/enseigne/6.jpg",  "/imgs/projects/enseigne/7.jpg",
      "/imgs/projects/enseigne/8.jpg", "/imgs/projects/enseigne/9.jpg",  "/imgs/projects/enseigne/10.jpg", "/imgs/projects/enseigne/11.jpg",
      "/imgs/projects/enseigne/12.jpg" , "/imgs/projects/enseigne/13.jpg",  "/imgs/projects/enseigne/14.jpg",  "/imgs/projects/enseigne/15.jpg", 
      "/imgs/projects/enseigne/16.jpg", "/imgs/projects/enseigne/17.jpg", "/imgs/projects/enseigne/18.jpg", "/imgs/projects/enseigne/19.jpg",
      "/imgs/projects/enseigne/20.jpg", "/imgs/projects/enseigne/21.jpg", "/imgs/projects/enseigne/22.jpg", "/imgs/projects/enseigne/23.jpg",
      "/imgs/projects/enseigne/24.jpg", "/imgs/projects/enseigne/25.jpg", "/imgs/projects/enseigne/26.jpg"]},
   {
    title: "Enseigne drapeau",
    detail: "",
    images: ["/imgs/projects/enseigne-drapeaux/1.jpg", "/imgs/projects/enseigne-drapeaux/2.jpg", "/imgs/projects/enseigne-drapeaux/3.jpg",  
      "/imgs/enseigne-drapeaux/enseigne/4.jpg", "/imgs/projects/enseigne-drapeaux/5.jpg", "/imgs/projects/enseigne-drapeaux/6.jpg", ]},
      {
    title: "Impression petit format",
    detail: "",
    images: ["/imgs/projects/impression/1.jpg", "/imgs/projects/impression/2.jpg", "/imgs/projects/impression/3.jpg",  
      "/imgs/projects/impression/4.jpg", "/imgs/projects/impression/5.jpg", "/imgs/projects/impression/6.jpg",  "/imgs/projects/impression/7.jpg",
      "/imgs/projects/impression/8.jpg", "/imgs/projects/impression/9.jpg",  "/imgs/projects/impression/10.jpg", "/imgs/projects/impression/11.jpg",
      "/imgs/projects/impression/12.jpg" , "/imgs/projects/impression/13.jpg",  "/imgs/projects/impression/14.jpg",  "/imgs/projects/impression/15.jpg", 
      "/imgs/projects/impression/16.jpg", "/imgs/projects/impression/17.jpg", "/imgs/projects/impression/18.jpg"]},
      {
    title: "Lettre en forex",
    detail: "",
    images: ["/imgs/projects/forex/1.jpg", "/imgs/projects/forex/2.jpg", "/imgs/projects/forex/3.jpg",  
      "/imgs/projects/forex/4.jpg", "/imgs/projects/forex/5.jpg", "/imgs/projects/forex/6.jpg",  "/imgs/projects/forex/7.jpg",
      "/imgs/projects/forex/8.jpg", "/imgs/projects/forex/9.jpg",  "/imgs/projects/forex/10.jpg", "/imgs/projects/forex/11.jpg",
      "/imgs/projects/forex/12.jpg" , "/imgs/projects/forex/13.jpg",  "/imgs/projects/forex/14.jpg",  "/imgs/projects/forex/15.jpg", 
      "/imgs/projects/forex/16.jpg", "/imgs/projects/forex/17.jpg", "/imgs/projects/forex/18.jpg", "/imgs/projects/forex/19.jpg",
      "/imgs/projects/forex/20.jpg", "/imgs/projects/forex/21.jpg", "/imgs/projects/forex/22.jpg", "/imgs/projects/forex/23.jpg",
      "/imgs/projects/forex/24.jpg", "/imgs/projects/forex/25.jpg", "/imgs/projects/forex/26.jpg", "/imgs/projects/forex/27.jpg", "/imgs/projects/forex/28.jpg"]},
       {
    title: "Neon Led",
    detail: "",
    images: ["/imgs/projects/neon/1.png", "/imgs/projects/neon/2.png", "/imgs/projects/neon/3.jpg",  
      ]},
 
      {
    title: "Panneaux",
    detail: "",
    images: ["/imgs/projects/panneau/1.jpg", "/imgs/projects/panneau/2.jpg", "/imgs/projects/panneau/3.jpg",  
      "/imgs/projects/panneau/4.jpg", "/imgs/projects/panneau/5.jpg", "/imgs/projects/panneau/6.jpg",  "/imgs/projects/panneau/7.jpg",
      "/imgs/projects/panneau/8.jpg", "/imgs/projects/panneau/9.jpg",  "/imgs/projects/panneau/10.jpg", "/imgs/projects/panneau/11.jpg",
      "/imgs/projects/panneau/12.jpg" , "/imgs/projects/panneau/13.jpg",  "/imgs/projects/panneau/14.jpg",  "/imgs/projects/panneau/15.jpg", 
      "/imgs/projects/panneau/16.jpg", "/imgs/projects/panneau/17.jpg", "/imgs/projects/panneau/18.jpg", "/imgs/projects/panneau/19.jpg",
      "/imgs/projects/panneau/20.jpg", "/imgs/projects/panneau/21.jpg", "/imgs/projects/panneau/22.jpg", "/imgs/projects/panneau/23.jpg",]},

      {
    title: "Vitre",
    detail: "",
    images: ["/imgs/projects/vitre/1.jpg", "/imgs/projects/vitre/2.jpg", "/imgs/projects/vitre/3.jpg",  
      "/imgs/projects/vitre/4.jpg", "/imgs/projects/vitre/5.jpg", "/imgs/projects/vitre/6.jpg",  "/imgs/projects/vitre/7.jpg",
      "/imgs/projects/vitre/8.jpg", "/imgs/projects/vitre/9.jpg",  "/imgs/projects/vitre/10.jpg", "/imgs/projects/vitre/11.jpg",
      "/imgs/projects/vitre/12.jpg" , "/imgs/projects/vitre/13.jpg",  "/imgs/projects/vitre/14.jpg",  "/imgs/projects/vitre/15.jpg", 
      "/imgs/projects/vitre/16.jpg", "/imgs/projects/vitre/17.jpg", "/imgs/projects/vitre/18.jpg", "/imgs/projects/vitre/19.jpg",
      "/imgs/projects/vitre/20.jpg", "/imgs/projects/vitre/21.jpg", "/imgs/projects/vitre/22.jpg", "/imgs/projects/vitre/23.jpg",
     "/imgs/projects/vitre/24.jpg", "/imgs/projects/vitre/25.jpg", "/imgs/projects/vitre/26.jpg", "/imgs/projects/vitre/27.jpg",
     "/imgs/projects/vitre/28.jpg", "/imgs/projects/vitre/29.jpg", "/imgs/projects/vitre/30.jpg", "/imgs/projects/vitre/31.jpg",]},
];

type Project = (typeof sampleProjects)[number];

function ProjectCard({ project }: { project: Project }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <Card className="bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-soft)] overflow-hidden">
      <CardContent className="space-y-3">
        <Box className="flex items-start justify-between gap-3">
          <Box>
            <Typography variant="h6">{project.title}</Typography>
            <Typography className="text-[var(--text-secondary)]">{project.detail}</Typography>
          </Box>
        </Box>

        <Box className="relative rounded-lg overflow-hidden border border-[var(--border-soft)]">
          <IconButton
            aria-label="Précédent"
            size="small"
            onClick={scrollPrev}
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "var(--surface)",
              border: "1px solid var(--border-soft)",
              boxShadow: 1,
            }}
          >
            <ChevronLeftRounded />
          </IconButton>
          <IconButton
            aria-label="Suivant"
            size="small"
            onClick={scrollNext}
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "var(--surface)",
              border: "1px solid var(--border-soft)",
              boxShadow: 1,
            }}
          >
            <ChevronRightRounded />
          </IconButton>

          <Box className="embla overflow-hidden" ref={emblaRef}>
            <Box className="embla__container flex gap-3 px-1">
              {project.images.map((src, idx) => {
                return (
                  <Box
                    key={src + idx}
                    className="embla__slide shrink-0 relative bg-[var(--surface-muted)] rounded-lg overflow-hidden !max-h-96"
                    style={{ flex: "0 0 auto", width: "auto", maxWidth: "860px" }}
                    onClick={() => setLightboxIndex(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setLightboxIndex(idx);
                      }
                    }}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} visuel ${idx + 1}`}
                      width={1600}
                      height={1000}
                      className="w-auto h-auto object-contain !max-h-96"
                      sizes="(max-width: 768px) 100vw, 860px"
                      priority={idx === 0}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        <Modal
          open={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          aria-label={`${project.title} - aperçu plein écran`}
        >
          <Box className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <IconButton
              aria-label="Fermer"
              onClick={() => setLightboxIndex(null)}
              sx={{ position: "fixed", top: 16, right: 16, bgcolor: "var(--surface)" }}
            >
              <CloseRounded />
            </IconButton>
            {lightboxIndex !== null && (
              <Box className="relative w-full max-w-6xl h-[60vh] sm:h-[75vh]">
                <Image
                  src={project.images[lightboxIndex]}
                  alt={`${project.title} visuel plein écran ${lightboxIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                <IconButton
                  aria-label="Précédent"
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev === null ? null : (prev - 1 + project.images.length) % project.images.length
                    )
                  }
                  sx={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "var(--surface)",
                    border: "1px solid var(--border-soft)",
                  }}
                >
                  <ChevronLeftRounded />
                </IconButton>
                <IconButton
                  aria-label="Suivant"
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev === null ? null : (prev + 1) % project.images.length
                    )
                  }
                  sx={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "var(--surface)",
                    border: "1px solid var(--border-soft)",
                  }}
                >
                  <ChevronRightRounded />
                </IconButton>
              </Box>
            )}
          </Box>
        </Modal>
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
