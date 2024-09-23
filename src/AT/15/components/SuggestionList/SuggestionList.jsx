import { Box, Typography } from "@mui/material";
import Friend from "../Friend/Friend";

const suggestions = [
  {
    id: 1,
    name: "Pedro Lima",
    avatar: "https://example.com/avatar-pedro.jpg",
    commonFriends: "João Silva",
  },
  {
    id: 2,
    name: "Juliana Alves",
    avatar: "https://example.com/avatar-juliana.jpg",
    commonFriends: "Maria Oliveira",
  },
  {
    id: 3,
    name: "Rafael Gonçalves",
    avatar: "https://example.com/avatar-rafael.jpg",
    commonFriends: "Carlos Souza",
  },
  {
    id: 4,
    name: "Fernanda Souza",
    avatar: "https://example.com/avatar-fernanda.jpg",
    commonFriends: "Ana Costa",
  },
  {
    id: 5,
    name: "Lucas Pereira",
    avatar: "https://example.com/avatar-lucas.jpg",
    commonFriends: "Bruna Santos",
  },
];

function SuggestionsList() {
  return (
    <Box>
      <Typography variant="h6">Sugestões de Amizade</Typography>
      {suggestions.map((suggestion, index) => (
        <Friend key={index} friend={suggestion} />
      ))}
    </Box>
  );
}

export default SuggestionsList;
