import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function ContactForm() {
  return (
    <Stack component={MotionViewport} spacing={5}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h3">
          No dudes en buscarnos. <br />
          Estaremos encantados de saber de ti.
        </Typography>
      </m.div>

      <Stack spacing={3}>
        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Nombres" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Correo" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Asunto" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Ingresa tu mensaje aquí." multiline rows={4} />
        </m.div>
      </Stack>

      <m.div variants={varFade().inUp}>
        <Button size="large" variant="contained">
          Enviar ahora
        </Button>
      </m.div>
    </Stack>
  );
}
