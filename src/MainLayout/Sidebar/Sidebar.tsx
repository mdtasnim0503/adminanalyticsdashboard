import { KeyboardArrowRight } from "@mui/icons-material";
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
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
export default function SideBar() {
  const sideBarLinks = [
    {
      icon: <DashboardIcon />,
      label: "Dashboard",
      href: "/admin",
    },
    { icon: <GroupIcon />, label: "Users" },
    { icon: <ShowChartIcon />, label: "Analytics" },
    { icon: <FormatListNumberedIcon />, label: "Orders" },
    { icon: <NotificationsIcon />, label: "Notifications" },
    { icon: <SettingsIcon />, label: "Settings" },
    { icon: <LogoutIcon />, label: "Logout" },
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
            <ListItemButton
              key={item.label}
              sx={{
                backgroundColor: item.href === "/admin" ? "#547792" : undefined,
                color: item.href === "/admin" ? "#fff" : "inherit",
                "&:hover": {
                  backgroundColor:
                    item.href === "/admin" ? "#3e5a70 !important" : undefined,
                  color: item.href === "/admin" ? "#fff !important" : "inherit",
                },
              }}
            >
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
