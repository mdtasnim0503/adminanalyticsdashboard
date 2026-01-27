import { Home, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";

export default function SideBar() {
  const sideBarLinks = [
    { icon: <Home />, label: "Home" },
    { icon: <Home />, label: "About" },
    { icon: <Home />, label: "Services" },
    { icon: <Home />, label: "Contact" },
  ];
  return (
    <Box>
      <List
        sx={{ width: "260px", height: "100vh", border: "1px solid #00000033" }}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 35px", py: 2 }}>
          <Typography sx={{ pl: 2, color: "#171a1cb8" }} level="title-lg">
            Md Tasnim
          </Typography>
          <KeyboardArrowRight />
        </Box>
        <Divider />

        <ListItem sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
          {sideBarLinks.map((item) => (
            <ListItemButton key={item.label}>
              <ListItemDecorator>{item.icon}</ListItemDecorator>
              <ListItemContent>{item.label}</ListItemContent>
              <KeyboardArrowRight sx={{ fontSize: "1.2rem" }} />
            </ListItemButton>
          ))}
        </ListItem>
      </List>
    </Box>
  );
}
