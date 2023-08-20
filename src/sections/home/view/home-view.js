'use client';

import { useScroll } from 'framer-motion';
// @mui
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// layouts
import MainLayout from 'src/layouts/main';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeHero from '../home-hero';
import HomeLookingFor from '../home-looking-for';
import HomeProductCategorias from '../home-product-category';
import HomeNewProductsCarousel from '../home-new-products';
import HomeProductsSaleCarousel from '../home-sale-products';

// ----------------------------------------------------------------------

// const StyledPolygon = styled('div')(({ anchor = 'top', theme }) => ({
//   left: 0,
//   zIndex: 9,
//   height: 80,
//   width: '100%',
//   position: 'absolute',
//   clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
//   backgroundColor: theme.palette.background.default,
//   display: 'block',
//   lineHeight: 0,
//   ...(anchor === 'top' && {
//     top: -1,
//     transform: 'scale(-1, -1)',
//   }),
//   ...(anchor === 'bottom' && {
//     bottom: -1,
//     backgroundColor: theme.palette.grey[900],
//   }),
// }));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      {/* 1-HomeHero */}
      <HomeHero />      

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        {/* 2-Para productos nuevos */}
        <HomeNewProductsCarousel />

        {/* 3-Categorias de Productos */}
        <HomeProductCategorias />

        {/* 4-Productos mas Vendidos */}
        <HomeProductsSaleCarousel />

        {/* 5-Banner final */}
        <HomeLookingFor />
      </Box>
    </MainLayout>
  );
}
