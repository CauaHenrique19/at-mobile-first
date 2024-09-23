import { Box, Typography } from "@mui/material";
import Friend from "../Friend/Friend";

const friends = [
  {
    id: 1,
    name: "João Silva",
    avatar: "https://example.com/avatar-joao.jpg",
    commonFriends: 5,
  },
  {
    id: 2,
    name: "Maria Oliveira",
    avatar: "https://example.com/avatar-maria.jpg",
    commonFriends: 3,
  },
  {
    id: 3,
    name: "Carlos Souza",
    avatar: "https://example.com/avatar-carlos.jpg",
    commonFriends: 2,
  },
  {
    id: 4,
    name: "Ana Costa",
    avatar: "https://example.com/avatar-ana.jpg",
    commonFriends: 8,
  },
  {
    id: 5,
    name: "Bruna Santos",
    avatar: "https://example.com/avatar-bruna.jpg",
    commonFriends: 6,
  },
];

function FriendsList() {
  return (
    <Box>
      <Typography variant="h6">Amigos</Typography>
      {friends.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))}
    </Box>
  );
}

export default FriendsList;
