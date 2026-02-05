import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";
import AppBar from "../components/Appbar/Appbar";
import SideBar from "../components/Sidebar/Sidebar";
import { useState } from "react";

export default function MainLayout() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <Box
        sx={{
          flexGrow: 1,
          ml: sideBarOpen ? "250px" : "50px",
          transition: "margin-left 0.5s ease",
        }}
      >
        <AppBar />
        <Box>{<Outlet />}</Box>
      </Box>
    </Box>
  );
}
