import React, { useState } from "react";
import { Container, Typography, Paper } from "@mui/material";

import { AIInsightsPage1 } from "./AIInsightsPage1";
import { AIInsightsIncidentPage } from "./AIInsightsIncidentPage";
import { AIInsightsPage2 } from "./AIInsightsPage2";
import { AIInsightsPage3 } from "./AIInsightsPage3";

// ----------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// Main component
// ----------------------------------------------------------------------

const AIInsightsPage: React.FC = () => {
  const [selectedView, setSelectedView] = useState<string | null>(null);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        AI Insights - Student
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h4">Student Behaviour Summary</Typography>
      </Paper>

      {/* Button Section */}
      <AIInsightsPage1 setSelectedView={setSelectedView} />

      {/* Conditional Rendering */}
      {selectedView === "incident" && <AIInsightsIncidentPage />}
      {selectedView === "student" && <AIInsightsPage2 />}
      {selectedView === "service" && <AIInsightsPage3 />}
    </Container>
  );
};

export default AIInsightsPage;
