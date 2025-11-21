"use client";
export const dynamic = "force-static";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import { EmailRounded, PhoneInTalkRounded } from "@mui/icons-material";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Box className="bg-[var(--surface-muted)]/90 border-b border-[var(--border-soft)]">
        <Container maxWidth="lg" className="px-4 py-10">
          <Stack spacing={2}>
            <Chip label="Contact" className="w-fit bg-[var(--chip-surface)] text-[var(--text-primary)]" />
            <Typography variant="h3" className="text-[var(--text-primary)]">
              Un devis rapide ou une question ?
            </Typography>
            <Typography className="text-[var(--text-secondary)] max-w-3xl">
              Dites-nous ce dont vous avez besoin : véhicule, enseigne, signalétique, print ou web.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" className="px-4 py-10" sx={{ overflowX: "clip" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card className="bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-soft)]">
              <CardContent className="space-y-3">
                <TextField fullWidth label="Nom / Entreprise" variant="filled" />
                <TextField fullWidth label="Email" variant="filled" />
                <TextField fullWidth label="Téléphone" variant="filled" />
                <TextField fullWidth label="Projet" variant="filled" multiline minRows={3} />
                <Button variant="contained" color="primary">
                  Envoyer
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="bg-[var(--surface)] text-[var(--text-primary)] h-full border border-[var(--border-soft)]">
              <CardContent className="space-y-4">
                <Typography variant="h6">Contact direct</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneInTalkRounded className="text-[var(--brand-yellow)]" />
                  <Typography className="text-lg font-semibold">04 66 30 72 08</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailRounded className="text-[var(--brand-blue)]" />
                  <Typography className="text-lg font-semibold">CONTACT@PUBZA.BE</Typography>
                </Stack>
                <Typography className="text-[var(--text-secondary)]">
                  Pose mobile, atelier, livraison locale/nationale. Délais express possibles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
