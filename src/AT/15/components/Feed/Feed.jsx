import { Box } from "@mui/material";
import Post from "../Post/Post";

const posts = [
  {
    id: 1,
    author: {
      nome: "João Silva",
      avatar: "https://example.com/avatar-joao.jpg",
    },
    date: "22 de Setembro de 2024",
    title: "Passeio no parque",
    content:
      "Hoje fiz um passeio incrível no parque com minha família. O clima estava ótimo e tiramos muitas fotos!",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/8b/e3/1e/a-typical-jungle-gym.jpg?w=1200&h=-1&s=1",
    likes: 120,
    shares: 30,
    comments: [
      {
        id: 1,
        author: "Carlos Souza",
        text: "Que legal, João! Parece ter sido um ótimo dia!",
      },
      {
        id: 2,
        author: "Ana Costa",
        text: "Que fotos lindas! O parque parece maravilhoso.",
      },
    ],
  },
  {
    id: 2,
    author: {
      nome: "Maria Oliveira",
      avatar: "https://example.com/avatar-maria.jpg",
    },
    date: "20 de Setembro de 2024",
    title: "Novos estudos sobre IA",
    content:
      "Acabei de ler um artigo incrível sobre inteligência artificial e suas aplicações no futuro. Recomendo muito!",
    image:
      "https://www.dnkinfotelecom.com.br/wp-content/uploads/uso-de-IA-1170x620.jpg",
    likes: 250,
    shares: 50,
    comments: [
      {
        id: 1,
        author: "Bruna Santos",
        text: "Parece muito interessante, vou dar uma olhada!",
      },
      {
        id: 2,
        author: "João Silva",
        text: "Essa área de estudo está avançando muito rápido, impressionante.",
      },
    ],
  },
  {
    id: 3,
    author: {
      nome: "Carlos Souza",
      avatar: "https://example.com/avatar-carlos.jpg",
    },
    date: "19 de Setembro de 2024",
    title: "Treinamento de corrida",
    content:
      "Hoje foi dia de treino pesado. Meus tempos estão melhorando e estou muito motivado para a próxima corrida!",
    image:
      "https://www.sesc-rs.com.br/wp-content/uploads/2024/03/corrida-do-choque.jpg",
    likes: 90,
    shares: 20,
    comments: [
      {
        id: 1,
        author: "João Silva",
        text: "Boa, Carlos! Continua firme que você vai longe.",
      },
    ],
  },
];

function Feed() {
  return (
    <Box>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Box>
  );
}

export default Feed;
