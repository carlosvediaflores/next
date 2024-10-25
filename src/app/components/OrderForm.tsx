import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function OrderForm() {
  const [order, setOrder] = useState({ name: '', email: '', product: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para procesar el pedido
    console.log('Pedido enviado:', order);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mx:'auto', maxWidth:500 }}>
      <Typography variant="h4" gutterBottom>Hacer un Pedido</Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Nombre"
        name="name"
        autoComplete="name"
        value={order.name}
        onChange={(e) => setOrder({...order, name: e.target.value})}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Correo Electrónico"
        name="email"
        autoComplete="email"
        value={order.email}
        onChange={(e) => setOrder({...order, email: e.target.value})}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="product"
        label="Producto"
        name="product"
        value={order.product}
        onChange={(e) => setOrder({...order, product: e.target.value})}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Enviar Pedido
      </Button>
    </Box>
  );
}