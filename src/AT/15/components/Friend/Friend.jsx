import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

function Friend({ friend }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={friend.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={friend.name}
        secondary={`${friend.commonFriends} amigos em comum`}
      />
    </ListItem>
  );
}

export default Friend;
