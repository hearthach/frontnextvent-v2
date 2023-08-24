import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Importa useTheme desde @mui/material
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { fCurrency } from 'src/utils/format-number';
import Label from 'src/components/label';
import Image from 'src/components/image';
import { ColorPreview } from 'src/components/color-utils';

export default function ProductItem({ product }) {
  const theme = useTheme(); // Accede al tema actual utilizando useTheme
  const [selectedSize, setSelectedSize] = useState(null);

  const { id, name, coverUrl, price, colors, available, sizes, priceSale, newLabel, saleLabel } =
    product;

  const linkTo = paths.product.details(id);

  const handleSizeSelect = (size) => {
    setSelectedSize(selectedSize === size ? null : size); // Simplifica la lógica de selección
  };

  const renderSizeButtons = sizes.map((size) => (
    <Button
      key={size}
      variant="outlined"
      size="small"
      sx={{
        borderRadius: '50%',
        width: '20px', // Tamaño más pequeño
        height: '26px', // Tamaño más pequeño
        fontSize: '9px', // Tamaño de la fuente más pequeño
        color: selectedSize === size ? theme.palette.primary.main : 'inherit', // Usa el color primario del tema
        borderColor: selectedSize === size ? theme.palette.primary.main : 'inherit', // Usa el color primario del tema
        minWidth: '30px',
        '&:hover': {
          backgroundColor: '#1890FF', // Color de fondo al pasar el mouse
          color: 'white', // Color de fuente al pasar el mouse
          borderColor: '#1890FF',
        },
      }}
      onClick={() => handleSizeSelect(size)}
    >
      {size}
    </Button>
  ));

  const renderLabels = (newLabel?.enabled || saleLabel?.enabled) && (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ position: 'absolute', zIndex: 9, top: 16, right: 16 }}
    >
      {newLabel.enabled && <Label variant="filled" color="info">{newLabel.content}</Label>}
      {saleLabel.enabled && <Label variant="filled" color="error">{saleLabel.content}</Label>}
    </Stack>
  );

  const renderImg = (
    <Box sx={{ position: 'relative', p: 1 }}>
      <Tooltip title={!available && 'Out of stock'} placement="bottom-end">
        <Image
          alt={name}
          src={coverUrl}
          ratio="1/1"
          sx={{
            borderRadius: 1.5,
            ...(!available && {
              opacity: 0.48,
              filter: 'grayscale(1)',
            }),
          }}
        />
      </Tooltip>
    </Box>
  );

  const renderBuyButton = (
    <Button
      className="add-cart-btn"
      variant="contained"
      color="primary"
      size="small"
      component={RouterLink}
      href={linkTo} // Enlace a los detalles del producto
    >
      Comprar
    </Button>
  );

  const renderContent = (
    <Stack spacing={2.5} sx={{ p: 3, pt: 2 }}>
      <Link component={RouterLink} href={linkTo} color="inherit" variant="subtitle2" noWrap>
        {name}
      </Link>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <ColorPreview colors={colors} />

        <Stack direction="row" spacing={0.5} sx={{ typography: 'subtitle1' }}>
          {priceSale && (
            <Box component="span" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
              {fCurrency(priceSale)}
            </Box>
          )}

          <Box component="span">{fCurrency(price)}</Box>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="center">
        {sizes && renderSizeButtons}
      </Stack>

      {/** Agrega el botón de Comprar debajo de las tallas */}
      {renderBuyButton}
    </Stack>
  );

  return (
    <Card
      sx={{
        '&:hover .add-cart-btn': {
          opacity: 1,
        },
      }}
    >
      {renderLabels}
      {renderImg}
      {renderContent}
    </Card>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object,
};
