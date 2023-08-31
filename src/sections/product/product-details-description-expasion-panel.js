import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ProductDescriptionExpansionPanel({ descriptionBlocks }) {
  return (
    <div>
      {descriptionBlocks.map((block, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <Typography variant="subtitle1" dangerouslySetInnerHTML={{ __html: block.split('</h6>')[0] }} />
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" dangerouslySetInnerHTML={{ __html: block.split('</h6>')[1] }} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

ProductDescriptionExpansionPanel.propTypes = {
  descriptionBlocks: PropTypes.array,
};

export default ProductDescriptionExpansionPanel;
