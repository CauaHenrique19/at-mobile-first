import { Grid2, CssBaseline, Box } from "@mui/material";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Feed from "./components/Feed/Feed";
import FriendsList from "./components/FriendList/FriendList";
import SuggestionsList from "./components/SuggestionList/SuggestionList";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Box container>
        <Grid2 item xs={12} sm={3}>
          <Menu />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <Feed />
        </Grid2>
        <Grid2 item xs={12} sm={3}>
          <FriendsList />
          <SuggestionsList />
        </Grid2>
      </Box>
    </div>
  );
}

export default App;
