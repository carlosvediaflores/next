import { Box, Typography, Button, Container } from '@mui/material';

export default function Hero() {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Productos de Calidad
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Descubre nuestra selección de productos premium y haz tu pedido hoy.
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" size="large" href="#productos">
            Ver Productos
          </Button>
        </Box>
      </Container>
    </Box>
  );
}