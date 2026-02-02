import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Avatar,
  Box,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
export default function SideBar() {
  const isSmall = useMediaQuery("(max-width:700px");
  const [sideBarOpen, setSideBarOpen] = useState(true);
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
  const handlePage = (page: string) => {
    navigate(page);
  };

  return (
    <Box>
      <Drawer
        open={true}
        sx={{
          "& .css-16k4q1o-JoyDrawer-content": {
            width: sideBarOpen ? "300px" : "50px",
            transition: "width 0.5s ease",
            overflowX: "hidden",
          },
        }}
      >
        <DialogTitle>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 26px",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              sx={{ color: "#171a1cb8" }}
              level="title-lg"
              startDecorator={<Avatar variant="solid" />}
            >
              Md Tasnim
            </Typography>
            <IconButton onClick={() => setSideBarOpen(!sideBarOpen)}>
              <KeyboardArrowLeftIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Divider />
          <List>
            <ListItem sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
              {sideBarLinks.map((item) => (
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
