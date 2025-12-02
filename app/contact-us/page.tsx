"use client";
export const dynamic = "force-static";
import Grid from "@mui/material/GridLegacy";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { EmailRounded, PhoneInTalkRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const topics = [
    { value: "vehicules", label: "Véhicules" },
    { value: "enseignes", label: "Enseignes & vitrines" },
    { value: "signaletique", label: "Signalétique" },
    { value: "print", label: "Print rapide" },
    { value: "graphisme", label: "Graphisme & identité" },
    { value: "digital", label: "Sites web & digitaux" },
    { value: "textile", label: "Objets & textiles" },
    { value: "autre", label: "Autre" },
  ];

  const topicParam = searchParams.get("topic");
  const topicValues = topics.map((t) => t.value);
  const initialTopic =
    topicParam && topicValues.includes(topicParam) ? topicParam : topics[0].value;

  const makeInitialForm = (topicValue: string) => ({
    name: "",
    email: "",
    phone: "",
    project: "",
    topic: topicValue,
  });

  const [form, setForm] = useState(() => makeInitialForm(initialTopic));
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  // Keep topic in sync when navigating with a new ?topic=.
  useEffect(() => {
    setForm((prev) => ({ ...prev, topic: initialTopic }));
  }, [initialTopic]);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async () => {
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Erreur lors de l’envoi");
      }
      setStatus("sent");
      setForm(makeInitialForm(initialTopic));
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Erreur lors de l’envoi");
    }
  };

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
                <TextField
                  fullWidth
                  label="Nom / Entreprise"
                  variant="filled"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="filled"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
                <TextField
                  fullWidth
                  label="Téléphone"
                  variant="filled"
                  value={form.phone}
                  onChange={handleChange("phone")}
                />
                <TextField
                  fullWidth
                  label="Projet"
                  variant="filled"
                  multiline
                  minRows={3}
                  value={form.project}
                  onChange={handleChange("project")}
                  required
                />
                <TextField
                  select
                  fullWidth
                  label="Sujet"
                  variant="filled"
                  value={form.topic}
                  onChange={handleChange("topic")}
                >
                  {topics.map((topic) => (
                    <MenuItem key={topic.value} value={topic.value}>
                      {topic.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={status === "sending"}
                  onClick={handleSubmit}
                >
                  {status === "sending" ? "Envoi..." : status === "sent" ? "Envoyé" : "Envoyer"}
                </Button>
                {error && (
                  <Typography variant="body2" className="text-red-500">
                    {error}
                  </Typography>
                )}
                {status === "sent" && !error && (
                  <Typography variant="body2" className="text-[var(--text-secondary)]">
                    Message envoyé. Nous revenons vers vous rapidement.
                  </Typography>
                )}
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
