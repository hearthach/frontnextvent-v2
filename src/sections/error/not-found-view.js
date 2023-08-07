'use client';

import { m } from 'framer-motion';
// @mui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// layouts
import CompactLayout from 'src/layouts/compact';
// routes
import { RouterLink } from 'src/routes/components';
// components
import { MotionContainer, varBounce } from 'src/components/animate';
// assets
import { PageNotFoundIllustration } from 'src/assets/illustrations';

// ----------------------------------------------------------------------

export default function NotFoundView() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ mb: 2 }}>
          ¡Lo sentimos, pagina no econtrada!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
          Lo siento, no pudimos encontrar la página que estás buscando.
          ¿Quizás has ingresado incorrectamente la URL? Asegúrate de revisar la ortografía.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <PageNotFoundIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </m.div>

        <Button component={RouterLink} href="/" size="large" variant="contained">
          Ir a Inicio
        </Button>
      </MotionContainer>
    </CompactLayout>
  );
}
