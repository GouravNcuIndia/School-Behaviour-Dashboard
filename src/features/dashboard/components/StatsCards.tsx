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
  <Box display="flex" gap={3}>
    <Paper sx={{ p: 3, flex: 1 }}>
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        Total Students
      </Typography>
      <Typography variant="h4" component="div">
        {students}
      </Typography>
    </Paper>
    <Paper sx={{ p: 3, flex: 1 }}>
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        Total Users
      </Typography>
      <Typography variant="h4" component="div">
        {users}
      </Typography>
    </Paper>
    <Paper sx={{ p: 3, flex: 1 }}>
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        Smart Plans
      </Typography>
      <Typography variant="h4" component="div">
        {smartPlans}
      </Typography>
    </Paper>
  </Box>
);
