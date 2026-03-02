import React from "react";
import { Container, Box, Typography, Button, Paper } from "@mui/material";
import { StatsCards } from "../components/StatsCards";

const DashboardPage: React.FC = () => {
  // Static data for now (will come from API later)
  const stats = {
    students: 18,
    users: 15,
    smartPlans: 206,
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Box mb={4}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="500">
          Student Behaviour Smart
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Student Behaviour Analysis
        </Typography>
        <Typography variant="body2" color="text.secondary">
          gourav.singhal@codestoresolutions.com
        </Typography>
      </Box>

      {/* Dashboard heading */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 2 }}>
        Dashboard
      </Typography>

      {/* Stats Cards */}
      <Box mb={6}>
        <StatsCards
          students={stats.students}
          users={stats.users}
          smartPlans={stats.smartPlans}
        />
      </Box>

      {/* Welcome Section */}
      <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: "grey.50" }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Welcome to Behaviour Smart
        </Typography>
        <Typography variant="body1" paragraph>
          Behaviour Smart is a simple and effective way of recording and
          analysing behaviour in your service.
        </Typography>
        <Typography variant="body2" paragraph>
          Learn how to record an incident, create effective Behaviour Plans
          (Smart Plans), add users or individuals, get the most from the
          Behaviour Smart Analytics system and much more. Our Help Centre is
          designed to help you get the best out of Behaviour Smart. In it, you
          will find useful video tutorials and PDF User Guides.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Help Centre
        </Button>
      </Paper>

      {/* Need Help Section */}
      <Paper elevation={0} sx={{ p: 4, bgcolor: "grey.50" }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Need Help?
        </Typography>
        <Typography variant="body1" paragraph>
          Have a question about the system or need technical support?
        </Typography>
        <Button variant="outlined" color="primary">
          Contact Support
        </Button>
      </Paper>
    </Container>
  );
};

export default DashboardPage;
