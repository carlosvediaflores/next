import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

const products = [
  { id: 1, name: 'Plátanos', price: 19.99, image: 'https://media.istockphoto.com/id/173242750/es/foto/racimo-de-plátanos.jpg?s=1024x1024&w=is&k=20&c=NN0PRsuFsvZP7nu2B2qGhyxGvWNQdIUbTXk6rToGEaI=' },
  { id: 2, name: 'Manzana Roja', price: 29.99, image: 'https://media.istockphoto.com/id/184276818/es/foto/manzana-red.jpg?s=1024x1024&w=is&k=20&c=RtmTsXNtkwTt5MIAkMJgfZgXXV3LYnLgq3kR0vvvVk4=' },
];

export default function ProductCatalog() {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              width='300'
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
              <Button size="small" color="primary">Añadir al Carrito</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}