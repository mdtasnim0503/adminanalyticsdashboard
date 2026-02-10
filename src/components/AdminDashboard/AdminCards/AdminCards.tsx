import { Box, Typography } from "@mui/joy";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useEffect, useState } from "react";

interface UserCard {
  totalUsers: number;
  totalOrders: string;
  totalRevenue: string;
}
export default function AdminCards() {
  const [cardData, setCardData] = useState<UserCard | null>(null);
  const labels: any = {
    totalUsers: "Total Users",
    totalOrders: "Total Orders",
    totalRevenue: "Total Revenue",
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("http://localhost:5000/stats");
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.log("error to fetch users data", error);
      }
    }
    fetchUserData();
  }, []);
  const cardStyle = (key: string) => {
    switch (key) {
      case "totalUsers":
        return {
          border: "1px solid #A03A13",
          borderBottom: "3px solid #A03A13",
          backgroundColor: "#ede4c26e",
          color: "#893211",
          textColor: "#823011",
          valueColor: "#823011",
        };
      case "totalOrders":
        return {
          border: "1px solid #1A3263",
          borderBottom: "3px solid #1A3263",
          backgroundColor: "#d8e2f73b",
          color: "#1A3263",
          textColor: "#1A3263",
          valueColor: "#1A3263",
        };
      case "totalRevenue":
        return {
          border: "1px solid #728332",
          borderBottom: "3px solid #728332",
          backgroundColor: "#eff7cf5e",
          color: "#728332",
          textColor: "#728332",
          valueColor: "#728332",
        };
      default:
        return {
          border: "1px solid gray",
        };
    }
  };
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(3,1fr)" },
        gap: 1,
        mt: 2,
      }}
    >
      {cardData &&
        Object.entries(cardData).map(([key, value]) => (
          <Box
            sx={{ ...cardStyle(key), padding: ".5rem", borderRadius: "7px" }}
            key={key}
          >
            <Typography sx={{ color: cardStyle(key).textColor }}>
              {labels[key]}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <GroupIcon />
              <Typography sx={{ color: cardStyle(key).color }}>
                {value} {key === "totalRevenue" ? "/-" : ""}
              </Typography>
            </Box>
          </Box>
        ))}
    </Box>
  );
}
