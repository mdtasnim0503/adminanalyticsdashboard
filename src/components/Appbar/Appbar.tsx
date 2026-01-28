import { Avatar, Box, Typography } from "@mui/joy";
import { useLocation } from "react-router-dom";
export default function AppBar() {
  // const navigate = useNavigate();
  const { pathname } = useLocation();
  // const logout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/", { replace: true });
  // };
  const sideBarLinks = [
    { label: "Dashboard", href: "/admin" },
    { label: "Users", href: "/users" },
    { label: "Analytics", href: "/analytics" },
    { label: "Orders", href: "/orders" },
    { label: "Notifications", href: "/notifications" },
    { label: "Settings", href: "/settings" },
  ];
  const activePage = sideBarLinks.find((item) => item.href === pathname);
  const title = activePage?.label || "App Bar";
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 50px",
        border: "1px solid #00000033",
        padding: 1.4,
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.7rem",
          fontWeight: "bold",
          color: "var(--textHeader)",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ cursor: "pointer" }}>
        <Avatar variant="solid" />
      </Box>
    </Box>
  );
}
