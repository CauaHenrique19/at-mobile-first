import { Box, Card, CardContent, Typography } from "@mui/material";

const ItemCompra = ({ item }) => {
  const valorTotal = item.valorUnitario * item.quantidade;

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="body1">Nome: {item.nome}</Typography>
          <Typography variant="body2" color="text.secondary">
            Quantidade: {item.quantidade}
          </Typography>
        </Box>
        <Box textAlign="right">
          <Typography variant="body1">
            Valor Unitário: R$ {item.valorUnitario.toLocaleString("pt-BR")}
          </Typography>
          <Typography variant="body1">
            Valor Total: R$ {valorTotal.toLocaleString("pt-BR")}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemCompra;
