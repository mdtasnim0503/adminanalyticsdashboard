import { Avatar, Box, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
export default function AppBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  const appBarName = [{ href: "/admin" }];
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
      {/* <Typography
        level="title-lg"
        sx={{ fontSize: "1.7rem", fontWeight: "bold", color: "#565757" }}
      > */}
      {appBarName.map((link) => (
        <Typography
          key={link.href}
          sx={{
            fontSize: "1.7rem",
            fontWeight: "bold",
            color: "var(--textHeader)",
          }}
        >
          {link.href === "/admin" ? "Dashboard" : "App Bar"}
        </Typography>
      ))}
      {/* </Typography> */}
      <Box sx={{ cursor: "pointer" }}>
        <Avatar variant="solid" />
      </Box>
    </Box>
  );
}
