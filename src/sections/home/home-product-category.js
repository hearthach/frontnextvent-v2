import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { m } from 'framer-motion'; // Asegúrate de importar m de framer-motion
import { paths } from 'src/routes/paths';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button'; // Agrega la importación del componente Button



// components
import { varFade } from 'src/components/animate';

// Agrega imágenes para cada categoría (reemplaza con tus propias imágenes)
const categoryImages = {
  'Polos': '/assets/images/home/categorias/polo-blanco.webp',
  'Poleras': '/assets/images/home/categorias/polera.webp',
  'Shorts': '/assets/images/home/categorias/shorts.webp',
  'Jogger': '/assets/images/home/categorias/jogger.webp',
  'Otros': '/assets/images/home/categorias/otros.webp',
  'Otros2': '/assets/images/home/categorias/otros2.webp',
};

const categories = [
  'Polos',
  'Poleras',
  'Shorts',
  'Jogger',
  'Otros',
  'Otros2',
];

const categoryPaths = {
  'Polos': paths.product.category.polos.root,
  'Poleras': paths.product.category.poleras.root,
  'Shorts': paths.product.category.shorts.root,
  'Jogger': paths.product.category.jogger.root,
  // Agrega las otras rutas aquí según tus necesidades
};

const renderDescription = (
  <Stack spacing={1} sx={{ mb: 8, textAlign: 'center' }}>
    <m.div variants={varFade().inUp}>
      <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
        {/* comentado */}
      </Typography>
    </m.div>
    <m.div variants={varFade().inUp}>
      <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
        CATEGORÍAS
      </Typography>
    </m.div>

    <m.div variants={varFade().inDown}>
      <Typography variant="h3">
        ¡Explora la esencia de la moda! 🌟 <br /> Descubre nuestro exclusivo catálogo de categorías
      </Typography>
    </m.div>

    <m.div variants={varFade().inDown}>
      <Typography sx={{ color: 'text.secondary' }}>
        Déjate llevar por una gama diversa de prendas que reflejan tu personalidad. ¡Renueva tu estilo con nuestra colección única! 🚀👗
      </Typography>
    </m.div>
  </Stack>
);

const HomeProductCategorias = () => {
  const isMobileOrTablet = useMediaQuery((theme) => theme.breakpoints.down('sm')); // Cambio a 'sm' para dispositivos móviles y tabletas

  return (
    <Box
      sx={{
        py: { xs: 10, md: 5 },
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
      }}
    >
      <Container>
        <Grid container spacing={2} justifyContent="center">
          {categories.map((category) => (
            <Grid item xs={6} md={4} key={category}>
              <CategoryCard categoryName={category} imageUrl={categoryImages[category]} isMobileOrTablet={isMobileOrTablet} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
  
};

function CategoryCard({ categoryName, imageUrl, isMobileOrTablet }) {
  const [hovered, setHovered] = useState(false);
  // const isMobileOrTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const redirectToCategory = (event) => {
    if (event.button === 0) {
      if (categoryPaths[categoryName]) {
        window.location.href = categoryPaths[categoryName];
      }
    } else if (event.button === 2) {
      window.open(categoryPaths[categoryName], '_blank');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        aspectRatio: '3/4',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={redirectToCategory}
      onContextMenu={redirectToCategory}
    >
      <Box
        component="div"
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 1,
          cursor: 'pointer',
        }}
      />
      {(hovered || isMobileOrTablet) && (
        <Button
          variant="contained"
          size="small"
          sx={{
            position: 'absolute',
            top: isMobileOrTablet ? '80%' : '50%', // Ajusta la posición en dispositivos móviles/tabletas
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            backgroundColor: '#00A76F',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            textAlign: 'center',
            cursor: 'pointer',
            display: 'block', // Mostrar siempre en móviles y tabletas
          }}
        >
          {categoryName}
        </Button>
      )}
    </Box>
  );
}

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isMobileOrTablet: PropTypes.bool.isRequired,
};

export default function HomeProductCategoriasWithDescription() {
  return (
    <Box>
      {renderDescription}
      <HomeProductCategorias />
    </Box>
  );
}
