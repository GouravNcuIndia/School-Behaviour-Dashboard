import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const AnalyticsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Behaviour Analytics
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Analytics Overview
        </Typography>

        <Box component="ul" sx={{ pl: 3 }}>
          <li>Incident trends over time</li>
          <li>High-risk students</li>
          <li>Location-based heatmaps</li>
          <li>Injury frequency</li>
        </Box>
      </Paper>
    </Container>
  );
};

export default AnalyticsPage;
