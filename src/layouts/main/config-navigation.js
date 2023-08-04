// routes
import { paths } from 'src/routes/paths';

// components
import Iconify from 'src/components/iconify';

// Estilos para el subheader "POLOS"
const subheaderStyle = {
  cursor: 'pointer',
  textDecoration: 'underline', // Mantener el subrayado
  color: 'black', // Color de texto negro
  fontWeight: 'bold', // Texto en negrita
};

export const navConfig = [
  {
    title: 'Inicio',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'Tienda',
    path: '/pages',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: (
          <a
            href={paths.product.category.polos.root}
            style={subheaderStyle}
            onMouseEnter={(e) => e.target.style.color = '#00A76F'} // Cambia a verde cuando se pase el mouse
            onMouseLeave={(e) => e.target.style.color = 'black'} // Vuelve al color negro cuando se deje de pasar el mouse
          >
            POLOS
          </a>
        ),
        items: [
          { title: 'Polos', path: paths.product.category.polos.root },
          { title: 'Jersey 30/1', path: paths.product.category.polos.jersey301 },
          { title: 'Jersey 20/1', path: paths.product.category.polos.jersey201 },
          { title: 'Pima', path: paths.product.category.polos.pima },
        ],
      },
      {
        subheader: (
          <a
            href={paths.product.category.poleras.root}
            style={subheaderStyle}
            onMouseEnter={(e) => e.target.style.color = '#00A76F'} // Cambia a verde cuando se pase el mouse
            onMouseLeave={(e) => e.target.style.color = 'black'} // Vuelve al color negro cuando se deje de pasar el mouse
          >
            POLERAS
          </a>
        ),
        items: [
          { title: 'Poleras', path: paths.product.category.poleras.root },
        ],
      },
      {
        subheader: (
          <a
            href={paths.product.category.shorts.root}
            style={subheaderStyle}
            onMouseEnter={(e) => e.target.style.color = '#00A76F'} // Cambia a verde cuando se pase el mouse
            onMouseLeave={(e) => e.target.style.color = 'black'} // Vuelve al color negro cuando se deje de pasar el mouse
          >
            SHORTS
          </a>
        ),
        items: [
          { title: 'Shorts', path: paths.product.category.shorts.root },
        ],
      },
      {
        subheader: (
          <a
            href={paths.product.category.pantalones.root}
            style={subheaderStyle}
            onMouseEnter={(e) => e.target.style.color = '#00A76F'} // Cambia a verde cuando se pase el mouse
            onMouseLeave={(e) => e.target.style.color = 'black'} // Vuelve al color negro cuando se deje de pasar el mouse
          >
            PANTALONES
          </a>
        ),
        items: [
          { title: 'Pantalones', path: paths.product.category.pantalones.root },
        ],
      },
    ],
  },
];
