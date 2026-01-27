import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";
import AppBar from "./Appbar/Appbar";
import SideBar from "./Sidebar/Sidebar";

export default function MainLayout() {
  return (
    <Box>
      <AppBar />
      <SideBar />
      <Outlet />
    </Box>
  );
}
