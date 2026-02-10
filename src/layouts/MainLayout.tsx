import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";
import AppBar from "../components/Appbar/Appbar";
import SideBar from "../components/Sidebar/Sidebar";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function MainLayout() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const isSmall = useMediaQuery("(max-width:700px)");
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <SideBar
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
        isSmall={isSmall}
      />
      <Box
        sx={{
          flexGrow: 1,
          ml: sideBarOpen ? "250px" : isSmall ? "0px" : "50px",
          transition: "margin-left 0.5s ease",
        }}
      >
        <AppBar isSmall={isSmall} />
        <Box>{<Outlet />}</Box>
      </Box>
    </Box>
  );
}
