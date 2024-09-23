import { Container, Typography, Box } from "@mui/material";
import { useState } from "react";

import ItemCompra from "./ItemCompra";

const ListaCompra = () => {
  const [itens] = useState([
    { nome: "Coca Cola", valorUnitario: 10, quantidade: 2 },
    { nome: "Panettone", valorUnitario: 15, quantidade: 1 },
    { nome: "Batata Frita", valorUnitario: 7.5, quantidade: 3 },
  ]);

  const totalCompra = itens.reduce(
    (total, item) => total + item.valorUnitario * item.quantidade,
    0
  );

  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={2}>
        <Typography variant="h5" gutterBottom>
          Lista de Compras
        </Typography>
      </Box>
      {itens.map((item, index) => (
        <ItemCompra key={index} item={item} />
      ))}
      <Box mt={4}>
        <Typography variant="h6" textAlign="right">
          Total da Compra: R${totalCompra.toFixed(2)}
        </Typography>
      </Box>
    </Container>
  );
};

export default ListaCompra;
