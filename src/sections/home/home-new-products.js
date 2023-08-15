import React, { useState } from 'react'; // Asegúrate de importar useState
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MotionViewport, varFade } from 'src/components/animate';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';
import { RouterLink } from 'src/routes/components';
import { useGetProducts } from 'src/api/product'; // Assuming you have a function to get products
import ProductItem from '../product/product-item';
import { paths } from 'src/routes/paths'; // Make sure paths is imported or defined

// ----------------------------------------------------------------------

export default function HomeNewProductsCarousel() {
    const [selectedSize, setSelectedSize] = useState(null); // Puedes cambiar `null` a la talla por defecto
    const carousel = useCarousel({
        infinite: true, // Set to true for an infinite carousel loop
        slidesToShow: 3, // Show 3 products at a time
        responsive: [
            {
                breakpoint: 1279,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 },
            },
        ],
    });

    const { products } = useGetProducts(); // Get the list of products (assuming you have this function)

    const newProducts = products.filter((product) => product.newLabel?.enabled);

    return (
        <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 8, md: 10 } }}>
            <m.div variants={varFade().inDown}>
                <Typography variant="h2" sx={{ color: 'primary.main' }}>
                    ¡Descubre lo último en Zilex!
                </Typography>
            </m.div>

            <Box sx={{ position: 'relative', mt: 2 }}>
                <CarouselArrows
                    filled
                    shape="rounded"
                    onNext={carousel.onNext}
                    onPrev={carousel.onPrev}
                    leftButtonProps={{
                        sx: {
                            left: 24,
                        },
                    }}
                    rightButtonProps={{
                        sx: {
                            right: 24,
                        },
                    }}
                >
                    <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                        {newProducts.map((product) => (
                            <Box
                                key={product.id}
                                component={m.div}
                                variants={varFade().in}
                                sx={{
                                    px: 1.5,
                                    py: { xs: 8, md: 10 },
                                }}
                            >
                                <m.div
                                    whileHover={{ scale: 1.05, rotate: 3 }} // Apply zoom and slight rotation on hover
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <ProductItem
                                        product={product}
                                        selectedSize={selectedSize}
                                        setSelectedSize={setSelectedSize} // Cambia 'onSizeSelect' a 'setSelectedSize'
                                    />
                                </m.div>
                            </Box>
                        ))}
                    </Carousel>
                </CarouselArrows>
            </Box>
        </Container>
    );
}
