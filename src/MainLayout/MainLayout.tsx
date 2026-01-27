import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";
import AppBar from "./Appbar/Appbar";
import SideBar from "./Sidebar/Sidebar";

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <SideBar />
      <Box sx={{ width: "100%" }}>
        <AppBar />
        <Box>{<Outlet />}</Box>
      </Box>
    </Box>
  );
}
