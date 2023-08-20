import React, { useEffect, useState } from 'react';
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
  // eslint-disable-next-line no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0); // Agrega la declaración de currentIndex aquí

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []); // Vacío para asegurarte de que se ejecute solo una vez al montar el componente

  return (
    <Box
      sx={{
        position: 'relative',
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: 60,
        overflow: 'hidden',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          width: '100%',
          animation: 'marquee 25s linear infinite',
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
              whiteSpace: 'nowrap',
              padding: '0 16px',
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
