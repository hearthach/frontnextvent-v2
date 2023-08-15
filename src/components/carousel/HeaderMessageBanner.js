import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const messages = [
  // '🚚 Envíos a nivel nacional | 🛍️ Nuestras Tiendas | 📴 Síguenos en nuestras Redes Sociales',
  '🚚 Envíos a nivel nacional',
  '🛍️ Nuestras Tiendas',
  '📴 Síguenos en nuestras Redes Sociales',
];

const HeaderMessageBanner = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1500); // Cambiar cada 1.5 segundos

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: 60,
        overflow: 'hidden', // Ocultar el contenido que se desborda
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center', // Centrar horizontalmente
        alignItems: 'center', // Centrar verticalmente
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'start', // Alinear al principio para que los mensajes se desplacen
          alignItems: 'center',
          width: '100%', // Ocupar todo el ancho
          animation: 'marquee 25s linear infinite', // Animación de desplazamiento
          '@keyframes marquee': {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        }}
      >
        {messages.map((message, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              whiteSpace: 'nowrap', // Evitar saltos de línea
              padding: '0 16px', // Espacio entre mensajes
            }}
          >
            {message}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default HeaderMessageBanner;
