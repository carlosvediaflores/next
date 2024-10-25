import { Box, Container, Typography, Link} from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Calle Principal, Ciudad
              <br />
              Email: info@mitienda.com
              <br />
              Tel: (123) 456-7890
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <Link href="#" color="inherit" display="block">Inicio</Link>
            <Link href="#" color="inherit" display="block">Productos</Link>
            <Link href="#" color="inherit" display="block">Sobre Nosotros</Link>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
          {'Copyright © '}
          <Link color="inherit" href="https://mitienda.com/">
            MiTienda
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}