import React from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';
import { RouterLink } from 'src/routes/components';
// api
import { useGetProducts, useSearchProducts } from 'src/api/product';
// routes
import { paths } from 'src/routes/paths';
//
import ProductItem from '../product/product-item';

// ----------------------------------------------------------------------

export default function ProductsCarousel() {
  const carousel = useCarousel({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  const { products, productsLoading } = useGetProducts(); // Get the list of products

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Zilex Perú
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Lo mas vendido en Zilex
        </Typography>
      </m.div>

      <Box sx={{ position: 'relative' }}>
        <CarouselArrows
          filled
          shape="rounded"
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            sx: {
              left: 24,
              ...(products.length < 5 && { display: 'none' }),
            },
          }}
          rightButtonProps={{
            sx: {
              right: 24,
              ...(products.length < 5 && { display: 'none' }),
            },
          }}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {products.map((product) => (
              <Box
                key={product.id}
                component={m.div}
                variants={varFade().in}
                sx={{
                  px: 1.5,
                  py: { xs: 8, md: 10 },
                }}
              >
                <ProductItem product={product} />
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>

      <Button
        component={RouterLink}
        href={paths.product.root}
        size="large"
        color="inherit"
        variant="outlined"
        // Add your button props here
      >
        Ver Tienda
      </Button>
    </Container>
  );
}

ProductsCarousel.propTypes = {
  products: PropTypes.array,
};

// The ProductItem component remains the same
