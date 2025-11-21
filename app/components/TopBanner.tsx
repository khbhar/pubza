"use client";

import { FacebookRounded, Instagram, MusicNoteRounded } from "@mui/icons-material";
import { Container, IconButton, Stack, Typography } from "@mui/material";
import { brandPalette } from "../theme";

export default function TopBanner() {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow via-brand-dark to-brand-blue" />
      <div className="absolute inset-0 opacity-50">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_30%)]" />
      </div>
      <Container
        maxWidth="lg"
        className="relative z-10 flex gap-3 px-4 py-1 flex-row items-center justify-between"
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton size="small" aria-label="TikTok" className="text-brand-blue bg-amber-300" component="a" href="#">
            <MusicNoteRounded fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            aria-label="Facebook"
            className="text-white"
            component="a"
            href="#"
          >
            <FacebookRounded fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            aria-label="Instagram"
            className="text-white"
            component="a"
            href="#"
          >
            <Instagram fontSize="small" />
          </IconButton>
        </Stack>
        <Typography
          className="text-center text-[10px]! font-semibold uppercase sm:text-sm drop-shadow"
          style={{ color: brandPalette.offWhite }}
        >
          We Bring colors to your business
        </Typography>
      </Container>
    </div>
  );
}
