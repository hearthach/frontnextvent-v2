import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// ----------------------------------------------------------------------

export default function SearchNotFound({ query, sx, ...other }) {
  return query ? (
    <Paper
      sx={{
        bgcolor: 'unset',
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6" gutterBottom>
        No encontrado
      </Typography>

      <Typography variant="body2">
        No se encontraron resultados para &nbsp;
        <strong>&quot;{query}&quot;</strong>.
        <br /> Intenta verificar si hay errores de escritura o usar palabras completas.
      </Typography>
    </Paper>
  ) : (
    <Typography variant="body2" sx={sx}>
      Por favor, ingresa una palabra clave.
    </Typography>
  );
}

SearchNotFound.propTypes = {
  query: PropTypes.string,
  sx: PropTypes.object,
};
