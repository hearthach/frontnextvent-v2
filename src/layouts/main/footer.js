// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
// _mock
import { _socials } from 'src/_mock';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Zilex',
    children: [
      { name: 'Acerca de', href: paths.about },
      { name: 'Contáctanos', href: paths.contact },
      // { name: 'FAQs', href: paths.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
    ],
  },
  {
    headline: 'Contacto',
    children: [{ name: 'contac@zilex.pe', href: '#' }],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const pathname = usePathname();

  const isHome = pathname === '/';

  // const simpleFooter = (
  //   <Box
  //     component="footer"
  //     sx={{
  //       py: 5,
  //       textAlign: 'center',
  //       position: 'relative',
  //       // bgcolor: 'background.default',
  //       bgcolor: '#f5f5f5',
  //     }}
  //   >
  //     <Container>
  //       <Logo sx={{ mb: 1, mx: 'auto' }} />

  //       <Typography variant="caption" component="div">
  //         © Todos los derechos reservados
  //         <br /> Hecho en Perú
  //         <Link href="https://zilex.com.pe/"> zilex.pe </Link>
  //       </Typography>
  //     </Container>
  //   </Box>
  // );

  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
        // bgcolor: '#fdfdfd',
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Logo sx={{ mb: 3 }} />

        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
        >
          <Grid xs={8} md={3}>
            <Typography
              variant="body2"
              sx={{
                maxWidth: 270,
                mx: { xs: 'auto', md: 'unset' },
              }}
            >
              Zilex | Tienda Online: v.1.0
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  sx={{
                    '&:hover': {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                >
                  <Iconify color={social.color} icon={social.icon} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  sx={{ width: 1 }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © 2023. Todos los derechos reservados
          <br /> Hecho en Perú
          <Link href="https://zilex.com.pe/"> zilex.pe </Link>
        </Typography>
      </Container>
    </Box>
  );

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
        // bgcolor: '#fdfdfd',
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Logo sx={{ mb: 3 }} />

        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
        >
          <Grid xs={8} md={3}>
            <Typography
              variant="body2"
              sx={{
                maxWidth: 270,
                mx: { xs: 'auto', md: 'unset' },
              }}
            >
              Zilex | Tienda Online: v.1.0
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  sx={{
                    '&:hover': {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                >
                  <Iconify color={social.color} icon={social.icon} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  sx={{ width: 1 }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © 2023. Todos los derechos reservados
          <br /> Hecho en Perú
          <Link href="https://zilex.com.pe/"> zilex.pe </Link>
        </Typography>
      </Container>
    </Box>
  );

  return isHome ? simpleFooter : mainFooter;
}
