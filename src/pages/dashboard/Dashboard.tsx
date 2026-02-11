import { Box } from "@mui/joy";
import AdminCards from "../../components/AdminDashboard/AdminCards/AdminCards";
import AdminBarChart from "../../components/AdminDashboard/AdminBarChart/AdminBarChart";

export default function Dashboard() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          height: "100%",
          overflow: "auto",
        }}
      >
        <AdminCards />
        <AdminBarChart />
      </Box>
    </Box>
  );
}
