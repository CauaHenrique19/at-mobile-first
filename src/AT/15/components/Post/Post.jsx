import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";

function Post({ post }) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={post.author.avatar} />}
        title={post.author.nome}
        subheader={post.date}
      />
      <CardMedia
        component="img"
        height="140"
        image={post.image}
        alt={post.title}
      />
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography>{post.content}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="curtidas">
          <ThumbUpIcon /> {post.likes}
        </IconButton>
        <IconButton aria-label="compartilhar">
          <ShareIcon /> {post.shares}
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="subtitle1">Comentários</Typography>
        {post.comments.map((comment) => (
          <Typography key={comment.id} variant="body2">
            <strong>{comment.author}:</strong> {comment.text}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default Post;
