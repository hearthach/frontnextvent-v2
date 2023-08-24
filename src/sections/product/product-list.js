import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import ProductItem from './product-item';
import { ProductItemSkeleton } from './product-skeleton';

export default function ProductList({ products, loading, ...other }) {
  const renderSkeleton = (
    <>
      {[...Array(16)].map((_, index) => (
        <ProductItemSkeleton key={index} />
      ))}
    </>
  );

  // Filtrar los productos para excluir los que están agotados
  const filteredProducts = products.filter(product => product.available);

  const renderList = (
    <>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(2, 1fr)', // Cambia a dos columnas en modo celular
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        {...other}
      >
        {loading ? renderSkeleton : renderList}
      </Box>

      {products.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )}
    </>
  );
}

ProductList.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.array,
};
