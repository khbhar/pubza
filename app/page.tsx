"use client";
export const dynamic = "force-static";
import {
  AccessTimeRounded,
  BrushRounded,
  DesignServicesRounded,
  DirectionsCarFilledRounded,
  EmailRounded,
  FormatColorTextRounded,
  LanguageRounded,
  LocalShippingRounded,
  PhoneInTalkRounded,
  PrintRounded,
  StorefrontRounded,
  VerifiedRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import Image from "next/image";
import Link from "next/link";
import { brandPalette } from "./theme";

const serviceTags = [
  "Publicité",
  "Graphisme",
  "Lettrage",
  "Enseigne",
  "Signalétique",
  "Masquage",
  "Site web",
];

const services = [
  {
    title: "Lettrage & covering véhicule",
    description:
      "Habillage intégral ou partiel, micro-perf, flottes complètes avec pose mobile.",
    icon: DirectionsCarFilledRounded,
    accent: brandPalette.blue,
    features: ["Pose sur site", "Vinyle longue durée", "Design sur mesure"],
    anchor: "vehicules",
  },
  {
    title: "Enseignes, totems & vitrines",
    description:
      "Caissons lumineux, drapeaux, vitrophanies, lettres découpées et totems retail.",
    icon: StorefrontRounded,
    accent: brandPalette.yellow,
    features: ["LED & rétro-éclairage", "Gestion des permis", "Installation"],
    anchor: "enseignes",
  },
  {
    title: "Signalétique & panneaux",
    description:
      "Panneaux directionnels, plats alu, bâches tendues, kakemonos et stands d’appoint.",
    icon: PrintRounded,
    accent: brandPalette.magenta,
    features: ["Intérieur / extérieur", "Formats XL", "Finition pro"],
    anchor: "signaletique",
  },
  {
    title: "Flyers, brochures & menus",
    description:
      "Impression HD, vernis sélectif, finitions premium et délais rapides pour vos supports.",
    icon: FormatColorTextRounded,
    accent: brandPalette.blue,
    features: ["Papier premium", "Quantités flexibles", "Livraison locale"],
    anchor: "print",
  },
  {
    title: "Graphisme & identité",
    description:
      "Logotypes, chartes, maquettes publicitaires et déclinaisons prêtes à imprimer.",
    icon: BrushRounded,
    accent: brandPalette.yellow,
    features: ["Branding complet", "PAO prête à imprimer", "Conseil créatif"],
    anchor: "graphisme",
  },
  {
    title: "Sites web & supports digitaux",
    description:
      "Landing pages, mini-sites événementiels, bannières animées et visuels réseaux.",
    icon: LanguageRounded,
    accent: brandPalette.magenta,
    features: ["Responsive", "SEO local", "Animations"],
    anchor: "digital",
  },
];

const process = [
  {
    title: "Brief express",
    description: "On fixe l’objectif, le budget et le délai pour un devis clair.",
    icon: VerifiedRounded,
  },
  {
    title: "Création graphique",
    description: "Maquettes et variantes qui respectent votre image.",
    icon: DesignServicesRounded,
  },
  {
    title: "Validation & proof",
    description: "Bon à tirer, choix des matières et finitions avant production.",
    icon: FormatColorTextRounded,
  },
  {
    title: "Production & pose",
    description: "Impression HD, découpe, pose mobile ou retrait atelier.",
    icon: LocalShippingRounded,
  },
];

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Box className="relative overflow-hidden">
        <Box className="absolute inset-0 bg-gradient-to-br from-[rgba(8,176,229,0.09)] via-transparent to-[rgba(229,18,104,0.12)]" />
        <Container
          maxWidth="lg"
          className="relative z-10 px-4 py-14 sm:py-16 lg:py-20"
        >
          <Box className="relative min-h-[240px] lg:min-h-[220px] group">
            <Box className="pointer-events-none absolute inset-y-0 right-[-8%] flex items-center justify-end h-[350px] sm:h-[650px] md:h-[550px] lg:h-[700px]">
              <Image
                src="/imgs/car-pubza-model.png"
                alt="Covering véhicule PUBZA"
                width={1280}
                height={500}
                className="w-[70%] max-w-[880px] sm:w-[60%] md:w-[70%] lg:w-[80%] object-contain drop-shadow-2xl transition duration-500 ease-out group-hover:scale-[1.03]"
                priority
              />
            </Box>

            <Stack spacing={3} className="relative z-10 w-full lg:w-[60%]">
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Chip
                  label="PUBZA — Signs & Printing"
                  color="secondary"
                  className="text-[var(--text-contrast)]"
                />
                <Chip
                  label="Design + Pose"
                  variant="outlined"
                  className="border-[var(--border-strong)] text-[var(--text-primary)]"
                />
              </Stack>

              <Stack spacing={2}>
                <Typography
                  variant="h2"
                  className="!text-4xl sm:text-5xl! md:text-7xl! lg:text-8xl! leading-tight w-[60%] max-w-[880px] sm:w-[75%] lg:w-[100%]"
                >
                  Votre identité visible partout : véhicules, enseignes, web &
                  print.
                </Typography>
                <Typography
                  variant="body1"
                  className="max-w-2xl text-lg text-[var(--text-secondary)] sm:text-xl"
                >
                  Impression, lettrage, signalétique, création graphique et
                  sites vitrines. On conçoit, imprime et pose vos supports à la
                  vitesse dont vous avez besoin.
                </Typography>
              </Stack>

              <Stack
                spacing={2.4}
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Button
                  component="a"
                  href="tel:+32466307208"
                  aria-label="Appeler Pubza"
                  variant="contained"
                  color="primary"
                  size="large"
                  className="w-full sm:w-auto"
                  startIcon={<PhoneInTalkRounded />}
                >
                  Devis & appel rapide
                </Button>
                <Button
                  component="a"
                  href="mailto:CONTACT@PUBZA.BE"
                  aria-label="Envoyer un email à Pubza"
                  variant="outlined"
                  color="secondary"
                  size="large"
                  className="w-full border-[var(--border-strong)] text-[var(--text-primary)] sm:w-auto"
                  startIcon={<EmailRounded />}
                >
                  CONTACT@PUBZA.BE
                </Button>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 4 }}
                className="text-sm text-[var(--text-secondary)]"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeRounded fontSize="small" className="text-[var(--brand-yellow)]" />
                  <span>Devis sous 24h</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalShippingRounded fontSize="small" className="text-[var(--brand-blue)]" />
                  <span>Pose mobile & atelier</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <VerifiedRounded fontSize="small" className="text-[var(--brand-magenta)]" />
                  <span>Finitions premium</span>
                </Stack>
              </Stack>
            </Stack>

           
          </Box>
        </Container>
      </Box>

     <Box className="relative overflow-hidden">
        <Box className="absolute inset-0 bg-gradient-to-bl to-[rgba(8,176,229,0.09)] via-transparent from-[rgba(229,18,104,0.12)] " />
      
      <Container maxWidth="lg" className="px-4 pb-12 sm:pb-16">
        <Stack spacing={4}>
          <Box>
            <Typography variant="h4" className="text-[var(--text-primary)]">
              Services PUBZA
            </Typography>
            <Typography className="text-[var(--text-secondary)]">
              Trouvez immédiatement ce qu’il vous faut.
            </Typography>
          </Box>
          <Box className="flex flex-wrap gap-2">
            {serviceTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                className="bg-[var(--chip-surface)] text-[var(--text-primary)]"
                size="medium"
              />
            ))}
          </Box>
           
          <Grid container spacing={0} sx={{ overflowX: "clip" }}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Grid item xs={12} md={6} key={service.title} padding={0} margin={0} className="p-2! ">
                  <Card className="bg-gradient-to-br from-[var(--surface)] to-[var(--surface-muted)] h-full border border-[var(--border-soft)]">
                    <CardContent className="space-y-4">
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          className="flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{
                            background: `linear-gradient(135deg, ${service.accent}, rgba(255,255,255,0.08))`,
                          }}
                        >
                          <Icon className="text-[26px] text-black" />
                        </Box>
                        <Typography variant="h6" className="text-[var(--text-primary)]">
                          {service.title}
                        </Typography>
                      </Stack>
                      <Typography className="text-[var(--text-secondary)]">
                        {service.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {service.features.map((feature) => (
                          <Chip
                            key={feature}
                            label={feature}
                            size="small"
                            className="bg-[var(--chip-surface)] text-[var(--text-primary)] text-[10px]! sm:text-xs! my-1!"
                          />
                        ))}
                      </Stack>
                      <Divider className="border-[var(--border-soft)]" />
                      <Stack direction="row" spacing={2} alignItems="end" className="items-end! flex! justify-between!">
                        <Button
                          component={Link}
                          href={`/contact-us?topic=${service.anchor ?? ""}`}
                          variant="contained"
                          color="primary"
                          size="small"
                          className="text-xs! sm:text-sm! px-1! sm:px-2!"
                        >
                          Demander un devis
                        </Button>
                        <Button
                          component={Link}
                          href={`/products#${service.anchor ?? ""}`}
                          variant="text"
                          color="secondary"
                          size="small"
                          className="text-sm text-[var(--text-secondary)]"
                        >
                          En savoir plus
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
      </Box>
<Box className="relative overflow-hidden">
        <Box className="absolute inset-0 bg-gradient-to-br from-[rgba(8,176,229,0.09)] via-transparent to-[rgba(229,18,104,0.12)] " />
      <Container maxWidth="lg" className="px-4 pb-12 sm:pb-16">
        <Card className="bg-[var(--surface-contrast)] text-[var(--text-contrast)] border border-[var(--border-strong)]">
          <CardContent className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <Stack spacing={2}>
              <Chip
                label="Méthode PUBZA"
                className="w-fit bg-[var(--brand-blue)] text-[var(--text-contrast)]"
              />
              <Typography variant="h4" className="text-[var(--text-primary)]">
                De l’idée à la pose, sans friction.
              </Typography>
              <Typography className="text-[var(--text-muted)]">
                On garde le look fort de votre carte de visite : bleu, jaune,
                magenta, noir. Même énergie, même niveau de service.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Chip
                  icon={<AccessTimeRounded />}
                  label="Délais courts"
                  className="bg-[var(--chip-surface)] text-[var(--text-primary)]"
                />
                <Chip
                  icon={<LocalShippingRounded />}
                  label="Pose mobile"
                  className="bg-[var(--chip-surface)] text-[var(--text-primary)]"
                />
                <Chip
                  icon={<VerifiedRounded />}
                  label="Finition premium"
                  className="bg-[var(--chip-surface)] text-[var(--text-primary)]"
                />
              </Stack>
            </Stack>

            <Grid container spacing={2} sx={{ overflowX: "clip" }}>
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <Grid item xs={12} sm={6} key={step.title}>
                    <Card className="h-full bg-[var(--surface-muted)] border border-[var(--border-soft)] shadow-sm">
                      <CardContent className="space-y-3">
                        <Box className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--text-primary)]">
                          <Icon />
                        </Box>
                        <Typography variant="subtitle1" className="font-semibold">
                          {step.title}
                        </Typography>
                        <Typography className="text-[var(--text-secondary)]">
                          {step.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </CardContent>
        </Card>
      </Container>
 </Box>
 <Box className="relative overflow-hidden">
        <Box className="absolute inset-0 bg-gradient-to-bl to-[rgba(8,176,229,0.09)] via-transparent from-[rgba(229,18,104,0.12)] " />
      <Container maxWidth="lg" className="px-4 pb-16">
        <Card className="bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-yellow)] to-[var(--brand-magenta)] text-[var(--text-contrast)] border border-[var(--border-soft)]">
          <CardContent className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <Stack spacing={1.5}>
              <Typography variant="h4" className="text-[var(--text-primary)]">
                Prêt pour votre prochain support ?
              </Typography>
              <Typography className="text-[var(--text-secondary)]">
                Flyers pour demain, covering pour votre flotte ou un site vitrine
                pour votre campagne : on s’en occupe.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  component="a"
                  href="tel:+32466307208"
                  aria-label="Appeler Pubza"
                  variant="contained"
                  color="inherit"
                  startIcon={<PhoneInTalkRounded />}
                  className="bg-[var(--surface-contrast)] text-[var(--text-contrast)] hover:bg-[var(--surface-contrast)]/90"
                >
                  04 66 30 72 08
                </Button>
                <Button
                  component="a"
                  href="mailto:CONTACT@PUBZA.BE"
                  aria-label="Envoyer un email à Pubza"
                  variant="outlined"
                  color="inherit"
                  startIcon={<EmailRounded />}
                  className="border-[var(--border-strong)] text-[var(--text-contrast)] hover:border-[var(--border-strong)]"
                >
                  CONTACT@PUBZA.BE
                </Button>
              </Stack>
            </Stack>
            <Card className="bg-[var(--surface)]/90 text-[var(--text-primary)] shadow-2xl border border-[var(--border-soft)]">
              <CardContent className="space-y-3">
                <Typography variant="h6">Atelier & zone de service</Typography>
                <Typography className="text-[var(--text-secondary)]">
                  Basés en Belgique. Pose mobile sur vos sites, retrait atelier
                  possible. Livraison locale et nationale.
                </Typography>
                <Divider className="border-[var(--border-soft)]" />
                <Stack direction="row" spacing={2} alignItems="center">
                  <LocalShippingRounded className="text-[var(--brand-yellow)]" />
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Délais express</p>
                    <p className="text-lg font-semibold">Rush & urgence 48h</p>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Box className="relative z-10 mt-6 w-full max-w-xl lg:w-[40%]">
              <Card className="bg-[var(--surface)] border border-[var(--border-soft)] shadow-xl">
                <CardContent className="space-y-4">
                  <Typography variant="h5" className="text-[var(--text-primary)]">
                    La carte PUBZA
                  </Typography>
                  <Typography className="text-[var(--text-secondary)]">
                    Un seul partenaire pour couvrir vos véhicules, vos enseignes,
                    vos campagnes print et vos visuels digitaux.
                  </Typography>
                  <Divider className="border-[var(--border-soft)]" />
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <PhoneInTalkRounded className="text-[var(--brand-yellow)]" />
                      <div className="text-sm">
                        <p className="text-[var(--text-secondary)]">Téléphone</p>
                        <p className="text-[var(--text-primary)] text-lg font-semibold">
                          04 66 30 72 08
                        </p>
                      </div>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <EmailRounded className="text-[var(--brand-blue)]" />
                      <div className="text-sm">
                        <p className="text-[var(--text-secondary)]">Email</p>
                        <p className="text-[var(--text-primary)] text-lg font-semibold">
                          CONTACT@PUBZA.BE
                        </p>
                      </div>
                    </Stack>
                  </Stack>
                  <Divider className="border-[var(--border-soft)]" />
                  <Stack direction="row" spacing={1.5} flexWrap="wrap">
                    <Chip label="Facebook" variant="outlined" className="border-[var(--border-soft)] text-[var(--text-primary)]" />
                    <Chip label="Instagram" variant="outlined" className="border-[var(--border-soft)] text-[var(--text-primary)]" />
                    <Chip label="TikTok" variant="outlined" className="border-[var(--border-soft)] text-[var(--text-primary)]" />
                  </Stack>
                </CardContent>
              </Card>
            </Box>
      </Container>
       </Box>
    </main>
  );
}
