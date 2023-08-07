'use client';

// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// routes
import { RouterLink } from 'src/routes/components';
// assets
import { MaintenanceIllustration } from 'src/assets/illustrations';

// ----------------------------------------------------------------------

export default function MaintenanceView() {
  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Sitio web actualmente en mantenimiento.
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        ¡Estamos trabajando arduamente en esta página en este momento!
      </Typography>

      <MaintenanceIllustration sx={{ my: 10, height: 240 }} />

      <Button component={RouterLink} href="/" size="large" variant="contained">
        Ir a Inicio
      </Button>
    </Stack>
  );
}
