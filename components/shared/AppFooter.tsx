"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";

export const AppFooter = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 1, // Minimal høyde for å gi plass til innholdet over
        px: 3,
        mt: 'auto',
        bgcolor: 'background.paper',
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth={false}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Venstre side: Versjon og Copyright */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'var(--font-roboto-mono)',
                fontWeight: 600,
                color: 'text.secondary',
              }}
            >
              Vaktbok View v.2.0.0
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              &copy; {currentYear}
            </Typography>
          </Box>

          {/* Høyre side: Den nye inline-logoen */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'var(--font-roboto-mono)',
                color: 'text.disabled',
                fontSize: '0.75rem',
              }}
            >
              powered by:
            </Typography>

            {/* Katten med oransje øyne og ekstra luft */}
            <Typography
              sx={{
                fontFamily: 'var(--font-roboto-mono)',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'text.primary',
                mx: 1.5, // Ekstra luft rundt katten
              }}
            >
              =^<span style={{ color: theme.palette.secondary.main }}>..</span>^=
            </Typography>

            {/* Merkevarenavnet */}
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'var(--font-roboto-mono)',
                color: 'text.secondary',
                fontSize: '0.75rem',
                letterSpacing: 0.5,
              }}
            >
              the <span style={{ fontWeight: 700, color: theme.palette.secondary.main }}>API</span> cat
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};