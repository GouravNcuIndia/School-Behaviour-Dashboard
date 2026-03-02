import { Box, Paper, Typography } from "@mui/material";

interface StatsCardsProps {
  students: number;
  users: number;
  smartPlans: number;
}

export const StatsCards = ({
  students,
  users,
  smartPlans,
}: StatsCardsProps) => (
  <Box display="flex" gap={3} flexWrap="wrap">
    <Paper
      sx={{
        p: 3,
        flex: 1,
        minWidth: 200,
        bgcolor: "background.paper",
        border: "1px solid rgba(255, 152, 0, 0.2)",
        borderRadius: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "secondary.main",
          boxShadow: "0 8px 16px rgba(255, 152, 0, 0.1)",
        },
      }}
    >
      <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
        Total Students
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{ color: "secondary.main", fontWeight: 700 }}
      >
        {students}
      </Typography>
    </Paper>
    <Paper
      sx={{
        p: 3,
        flex: 1,
        minWidth: 200,
        bgcolor: "background.paper",
        border: "1px solid rgba(255, 152, 0, 0.2)",
        borderRadius: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "secondary.main",
          boxShadow: "0 8px 16px rgba(255, 152, 0, 0.1)",
        },
      }}
    >
      <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
        Total Users
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{ color: "secondary.main", fontWeight: 700 }}
      >
        {users}
      </Typography>
    </Paper>
    <Paper
      sx={{
        p: 3,
        flex: 1,
        minWidth: 200,
        bgcolor: "background.paper",
        border: "1px solid rgba(255, 152, 0, 0.2)",
        borderRadius: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "secondary.main",
          boxShadow: "0 8px 16px rgba(255, 152, 0, 0.1)",
        },
      }}
    >
      <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
        Smart Plans
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{ color: "secondary.main", fontWeight: 700 }}
      >
        {smartPlans}
      </Typography>
    </Paper>
  </Box>
);
