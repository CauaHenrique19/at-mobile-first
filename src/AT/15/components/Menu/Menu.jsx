import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Menu() {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "Perfil", "Mensagens", "Notificações"];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Toolbar>
        <IconButton color="inherit" onClick={toggleDrawer} edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Minha Rede Social
        </Typography>
      </Toolbar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Menu;
