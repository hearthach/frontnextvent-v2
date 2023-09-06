import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import StraightenIcon from '@mui/icons-material/Straighten';

function ProductSizeGuide() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        variant="h6"
        onClick={handleOpen}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          color: 'elColorPorDefectoDelTema !important', // Agregamos !important aquí
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#919eab';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#212b36';
        }}        
      >
        <StraightenIcon
          style={{ marginRight: '8px', transform: 'rotate(45deg)' }}
        />{' '}
        Guía de Tallas
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tabla de Tallas</DialogTitle>
        <DialogContent>
            {/* Contenido de tu Guía de Tallas */}
          <DialogContentText>
            Elige la talla que mejor se adapte a ti. Ten en cuenta que nuestras medidas pueden variar ligeramente de 1 cm en cada una de las tallas.
          </DialogContentText>
          {/* Contenido de tu Guía de Tallas */}
          <img src="/assets/images/m_product/guia_tallas/talla_polo.webp" alt="Guía de Tallas" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProductSizeGuide;
