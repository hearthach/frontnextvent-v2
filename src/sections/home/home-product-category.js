import React, { useState } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { m } from 'framer-motion'; // Asegúrate de importar m de framer-motion

import Link from '@mui/material/Link';

import { paths } from 'src/routes/paths';

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
  return (
    <Box
      sx={{
        py: { xs: 10, md: 5 },
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
      }}
    >
      <Container>
        <Grid container spacing={5}>
          {categories.map((category) => (
            <Grid item xs={12} md={4} key={category}>
              <CategoryCard categoryName={category} imageUrl={categoryImages[category]} />
            </Grid>
          ))}
        </Grid>
      </Container>      
    </Box>
  );
};

function CategoryCard({ categoryName, imageUrl }) {
  const [hovered, setHovered] = useState(false);

  const redirectToCategory = (event) => {
    if (event.button === 0) { // Clic izquierdo
      if (categoryPaths[categoryName]) {
        window.location.href = categoryPaths[categoryName]; // Redirige a la ruta correspondiente
      }
    } else if (event.button === 2) { // Clic derecho
      // Agregar la lógica para abrir en nueva pestaña
      // Por ejemplo, podrías abrir la URL en una nueva pestaña
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
        width: '110%',
        height: '100%',
        aspectRatio: '3/4', // Mantenemos una relación de aspecto cuadrado
        cursor: 'pointer',
        transition: 'transform 0.3s ease', // Agregamos transición para suavizar el efecto
        transform: hovered ? 'scale(1.05)' : 'scale(1)', // Zoom al hacer hover
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={redirectToCategory}
      onContextMenu={redirectToCategory} // Maneja el evento de clic derecho
    >
      
      <Box
        component="div"
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 1, // Eliminamos el borde redondeado para tener un rectángulo completo
          cursor: 'pointer',
        }}
      />
      {hovered && (
        <Typography
        variant="h6"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          color: hovered ? '#00A76F' : 'white', // Cambia el color de letra al hacer hover
          color: 'white',
          fontWeight: 'bold',
          fontSize: '3rem', // Cambia este valor según tus preferencias
          textAlign: 'center',
          textShadow: '1px 1px 1px black', // Agrega sombra al texto para crear un efecto de borde negro
          cursor: 'pointer',
        }}
      >
        {categoryName}
      </Typography>
      
      )}
      
    </Box>
  );
}

export default function HomeProductCategoriasWithDescription() {
  return (
    <Box>
      {renderDescription}
      <HomeProductCategorias />
    </Box>
  );
}
