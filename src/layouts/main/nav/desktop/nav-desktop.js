import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
//
import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavDesktop({ offsetTop, data }) {
  return (
    <Stack component="nav" direction="row" spacing={5} sx={{
      justifyContent: 'center', // Centrar horizontalmente
      alignItems: 'center', // Centrar verticalmente
      height: 1,
      marginRight: '650px', // Mover el menú hacia la derecha
    }}>
      {data.map((link) => (
        <NavList key={link.title} item={link} offsetTop={offsetTop} />
      ))}
    </Stack>
  );
}

NavDesktop.propTypes = {
  data: PropTypes.array,
  offsetTop: PropTypes.bool,
};
