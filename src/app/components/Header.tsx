import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        🌟 Mi Tienda de Productos
        </Typography>
        <Button color="inherit">Productos</Button>
        <Button color="inherit">Pedidos</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}