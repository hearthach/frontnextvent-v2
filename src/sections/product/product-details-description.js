import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'; // Agrega useState
import Box from '@mui/material/Box';
import ProductDescriptionExpansionPanel from './product-details-description-expasion-panel'; // Importa el nuevo componente

export default function ProductDetailsDescription({ description }) {
  const [descriptionBlocks, setDescriptionBlocks] = useState([]);

  // Divide la descripción en bloques separados por <h6>
  useEffect(() => {
    const blocks = description.split('<h6>');
    setDescriptionBlocks(blocks.filter(block => block.trim() !== ''));
  }, [description]);

  return (
    <Box sx={{ p: 3 }}>
      <ProductDescriptionExpansionPanel descriptionBlocks={descriptionBlocks} />
    </Box>
  );
}

ProductDetailsDescription.propTypes = {
  description: PropTypes.string,
};
