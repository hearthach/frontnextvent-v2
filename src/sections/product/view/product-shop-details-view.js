'use client';

import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
// @mui
// import { alpha } from '@mui/material/styles';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useGetProduct } from 'src/api/product';
// components
import Iconify from 'src/components/iconify';
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import CartIcon from '../common/cart-icon';
// import ProductDetailsReview from '../product-details-review';
import { ProductDetailsSkeleton } from '../product-skeleton';
import ProductDetailsSummary from '../product-details-summary';
import ProductDetailsCarousel from '../product-details-carousel';
// import ProductDetailsDescription from '../product-details-description';
import { useCheckoutContext } from '../../checkout/context';

import ProductListOutFitSale from '../product-list-outfit-sale';

// ----------------------------------------------------------------------

// const SUMMARY = [
//   {
//     title: '100% Original',
//     description: 'Hecho en Perú, telas y algodon.',
//     icon: 'solar:verified-check-bold',
//   },
//   {
//     title: 'Cambios y Devoluciones',
//     description: 'Si el producto está dañado, el cliente debe proporcionar pruebas. Se hará el cambio gratis en 15 días desde la recepción.',
//     icon: 'solar:clock-circle-bold',
//   },
//   {
//     title: 'Envíos',
//     description: 'Envíos a Lima: Lunes a Sábado, 1 día previo. A provincias: Lunes, Miércoles y Viernes por Courier previamente coordinado. Llega en 2-4 días, a domicilio o agencia cercana, mismo costo.',
//     icon: 'solar:shield-check-bold',
//   },
// ];

// ----------------------------------------------------------------------

export default function ProductShopDetailsView({ id }) {
  const settings = useSettingsContext();

  const checkout = useCheckoutContext();

  // Ignore the no-unused-vars warning
  const [currentTab, setCurrentTab] = useState('description');

  const { product, productLoading, productError } = useGetProduct(id);

  // Obtiene productDescriptions de alguna manera (por ejemplo, desde el objeto product)
  const productDescriptions = product?.descriptions || {}; // Asegúrate de ajustar el camino correcto para obtener las descripciones

  // Ignore the no-unused-vars warning
  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const renderSkeleton = <ProductDetailsSkeleton />;

  const renderError = (
    <EmptyContent
      filled
      title={`${productError?.message}`}
      action={
        <Button
          component={RouterLink}
          href={paths.product.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          Regresar a la Lista
        </Button>
      }
      sx={{ py: 10 }}
    />
  );

  const renderProduct = product && (
    <>
      <CustomBreadcrumbs
        links={[
          { name: 'Inicio', href: '/' },
          {
            name: 'Tienda',
            href: paths.product.root,
          },
          { name: product?.name },
        ]}
        sx={{ mb: 5 }}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          <ProductDetailsCarousel product={product} />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <ProductDetailsSummary
            product={product}
            items={checkout.items}
            onAddCart={checkout.onAddToCart}
            onGotoStep={checkout.onGotoStep}
            description={productDescriptions[id]} // Pasa la descripción como prop
          />
        </Grid>
      </Grid>
    </>
  );

  return (
    <Container
      maxWidth={settings.themeStretch ? false : 'lg'}
      sx={{
        mt: 5,
        mb: 15,
      }}
    >
      <CartIcon totalItems={checkout.totalItems} />

      {productLoading && renderSkeleton}

      {productError && renderError}

      {product && renderProduct}

      {/* 4-Productos mas Vendidos */}
      <ProductListOutFitSale />
    </Container>
  );
}

ProductShopDetailsView.propTypes = {
  id: PropTypes.string,
};
