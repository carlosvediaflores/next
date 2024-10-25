import { Container, Typography, Card, CardContent, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid2';

const testimonials = [
  { id: 1, name: 'Cliente 1', comment: 'Excelentes productos y servicio rápido.' },
  { id: 2, name: 'Cliente 2', comment: 'Muy satisfecho con mi compra. Recomendado.' },
  // Más testimonios...
];

export default function Testimonials() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>Lo que dicen nuestros clientes</Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={testimonial.id}>
            <Card>
              <CardContent>
                <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>{testimonial.name[0]}</Avatar>
                <Typography gutterBottom variant="h6">{testimonial.name}</Typography>
                <Typography variant="body2" color="text.secondary">{testimonial.comment}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}