import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const messages = [
  '🚚 Envíos a nivel nacional | 🛍️ Nuestras Tiendas | 📴 Síguenos en nuestras Redes Sociales',
  '🚚 Envíos a nivel nacional | 🛍️ Nuestras Tiendas | 📴 Síguenos en nuestras Redes Sociales',
  '🚚 Envíos a nivel nacional | 🛍️ Nuestras Tiendas | 📴 Síguenos en nuestras Redes Sociales',
//   '🛍️ Nuestras Tiendas',
//   '📴 Síguenos en nuestras Redes Sociales',
];

const HeaderMessageBanner = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1500); // Cambiar cada 5 segundos

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
        sx={{
        position: 'relative', // Cambia a "relative" en lugar de "absolute"
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, // Ajusta la altura según tus necesidades
        zIndex: 2000, // Asegura que esté encima de todo
        // marginBottom: '-8px', // Espacio para separar de la Toolbar
      }}

    >
      <Typography variant="body1">{messages[currentIndex]}</Typography>
    </Box>
  );
};

export default HeaderMessageBanner;
