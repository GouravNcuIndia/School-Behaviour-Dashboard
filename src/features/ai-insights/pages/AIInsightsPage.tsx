import React from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";

const AIInsightsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        AI Insights
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Student Behaviour Summary
        </Typography>

        <Typography variant="body2" paragraph>
          This module will generate:
        </Typography>

        <Box component="ul" sx={{ pl: 3 }}>
          <li>Incident history summary</li>
          <li>Trigger prediction</li>
          <li>Risk categorisation</li>
        </Box>

        <Button variant="contained" sx={{ mt: 2 }}>
          Generate Insights
        </Button>
      </Paper>
    </Container>
  );
};

export default AIInsightsPage;
