import { Box } from "@mui/joy";
import { BarChart } from "@mui/x-charts/BarChart";

export default function AdminBarChart() {
  const dataset = [
    { month: "Jan", Users: 30, Orders: 10, Revenue: 50 },
    { month: "Feb", Users: 15, Orders: 33, Revenue: 15 },
    { month: "Mar", Users: 25, Orders: 14, Revenue: 35 },
    { month: "Apr", Users: 5, Orders: 22, Revenue: 45 },
    { month: "May", Users: 8, Orders: 20, Revenue: 25 },
    { month: "June", Users: 12, Orders: 28, Revenue: 7 },
    { month: "July", Users: 25, Orders: 7, Revenue: 19 },
    { month: "Aug", Users: 20, Orders: 9, Revenue: 33 },
    { month: "Sept", Users: 2, Orders: 12, Revenue: 45 },
    { month: "Oct", Users: 1, Orders: 30, Revenue: 17 },
    { month: "Nov", Users: 9, Orders: 34, Revenue: 26 },
    { month: "Dec", Users: 19, Orders: 31, Revenue: 25 },
  ];

  const valueFormatter = (value: any) => `${value}`;
  return (
    <Box
      sx={{
        width: { sm: "100%", md: "90%" },
        height: "400px",
        margin: "0px auto",
      }}
    >
      <BarChart
        dataset={dataset}
        xAxis={[{ dataKey: "month" }]}
        series={[
          { dataKey: "Users", label: "Users", valueFormatter },
          { dataKey: "Orders", label: "Orders", valueFormatter },
          { dataKey: "Revenue", label: "Revenue", valueFormatter },
        ]}
      />
    </Box>
  );
}
