import {
  Avatar,
  Box,
  DialogContent,
  DialogTitle,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  ModalClose,
  Typography,
} from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { KeyboardArrowRight } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
export default function MobileSidebar() {
  const sideBarLinks = [
    {
      icon: <DashboardIcon />,
      label: "Dashboard",
      href: "/admin",
    },
    { icon: <GroupIcon />, label: "Users", href: "/users" },
    { icon: <ShowChartIcon />, label: "Analytics", href: "/analytics" },
    { icon: <FormatListNumberedIcon />, label: "Orders", href: "/orders" },
    {
      icon: <NotificationsIcon />,
      label: "Notifications",
      href: "/notifications",
    },
    { icon: <SettingsIcon />, label: "Settings", href: "/settings" },
    { icon: <LogoutIcon />, label: "Logout", href: "/" },
  ];
  const navigate = useNavigate();
  const [mobileSideBar, setMobileSideBar] = useState(false);
  const handlePage = (page: string) => {
    navigate(page);
  };
  return (
    <Box>
      <IconButton variant="outlined" onClick={() => setMobileSideBar(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={mobileSideBar} onClose={() => setMobileSideBar(false)}>
        <ModalClose />
        <DialogTitle sx={{ alignItems: "center" }}>
          <Avatar variant="solid" />
          <Typography sx={{ color: "#171a1cb8" }} level="title-lg">
            Md Tasnim
          </Typography>
        </DialogTitle>
        <DialogContent>
          <List>
            <ListItem sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
              {sideBarLinks.map((item: any) => (
                <ListItemButton
                  component={NavLink}
                  to={item.href}
                  onClick={() => handlePage(item.href)}
                  key={item.label}
                  sx={{
                    "&.active": {
                      backgroundColor: "#547792",
                      color: "#fff",
                    },
                    "&.active:hover": {
                      backgroundColor: "#3e5a70",
                      color: "#fff",
                    },
                    padding: ".7rem",
                  }}
                >
                  <ListItemDecorator>{item.icon}</ListItemDecorator>
                  <ListItemContent>{item.label}</ListItemContent>
                  <KeyboardArrowRight sx={{ fontSize: "1.2rem" }} />
                </ListItemButton>
              ))}
            </ListItem>
          </List>
        </DialogContent>
      </Drawer>
    </Box>
  );
}
