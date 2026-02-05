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
  Tooltip,
  Typography,
} from "@mui/joy";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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

export default function SideBar({
  sideBarOpen,
  setSideBarOpen,
}: {
  sideBarOpen: boolean;
  setSideBarOpen: any;
}) {
  const isSmall = useMediaQuery("(max-width:700px");
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
        variant="plain"
        anchor="left"
        slotProps={{
          backdrop: {
            sx: { display: "none", zIndex: 1000 },
          },
          content: {
            sx: {
              width: sideBarOpen ? "250px" : "50px",
              transition: "width 0.5s ease",
              position: "fixed",
              zIndex: 1000,
              border: "1px solid #00000033",
            },
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
              padding: 0.4,
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50px 1fr",
                alignItems: "center",
                position: "relative",
              }}
            >
              {sideBarOpen ? (
                <Avatar variant="solid" />
              ) : (
                <IconButton
                  onClick={() => setSideBarOpen(!sideBarOpen)}
                  sx={{ position: "absolute", right: "1.5rem" }}
                >
                  <ChevronRightIcon />
                </IconButton>
              )}
              <Typography
                sx={{
                  color: "#171a1cb8",
                  display: sideBarOpen ? "block" : "none",
                }}
                level="title-lg"
              >
                Md Tasnim
              </Typography>
            </Box>
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
                  {sideBarOpen ? (
                    <ListItemDecorator>{item.icon}</ListItemDecorator>
                  ) : (
                    <Tooltip
                      className="MuiTooltip-root"
                      // sx={{
                      //   "& .css-zio3dq-JoyTooltip-arrow::before": {
                      //     borderLeftColor: "#547792",
                      //     borderRightColor: "#547792",
                      //     borderTopColor: "#547792",
                      //     borderBottomColor: "#547792",
                      //   },
                      //   "& .MuiTooltip-root": {
                      //     backgroundColor: "red",
                      //   },
                      // }}
                      title={item.label}
                      arrow
                      // open
                      color="primary"
                      variant="soft"
                      placement="right"
                    >
                      <ListItemDecorator>{item.icon}</ListItemDecorator>
                    </Tooltip>
                  )}
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
