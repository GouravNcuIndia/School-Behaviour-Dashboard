import React from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
} from "@mui/material";

// ----------------------------------------------------------------------
// Incident Modules
// ----------------------------------------------------------------------

const Incident_Analysis = [
  "Summarise this incident",
  "Identify key triggers in this incident",
  "Identify escalation points",
  "Identify staff responses",
  "What could have been done differently",
  "Extract key behaviour patterns",
];

const Behaviour_Patterns = [
  "Identify repeated behaviour patterns",
  "Compare with previous incidents",
  "Identify most common triggers",
  "Identify environmental triggers",
  "Analyse behaviour severity",
];

const Prevention_Strategy = [
  "Suggest preventative strategies",
  "Suggest de-escalation strategies",
  "Suggest support plan improvements",
  "How can we prevent similar incidents",
  "What proactive strategies should be used",
];

const Reporting_Communication = [
  "Create a short summary for parents",
  "Create a detailed incident report",
  "Create safeguarding summary",
  "Create staff reflection summary",
  "Create learning points from this incident",
];

const Improve_AI_Insights = [
  "Report inaccurate information",
  "Make a suggestion",
];

// ----------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------

const AIInsightsIncidentPage: React.FC = () => {

  const handleIncidentClick = (option: string) => {
    console.log("Incident Insight Selected:", option);

    // Future backend call
    // supabase.functions.invoke("incident-ai", { body: { option } });
  };

  const renderSection = (title: string, options: string[]) => (
    <>
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        {title}
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          {options.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleIncidentClick(item)}
                sx={{
                  height: 80,
                  fontWeight: 600,
                  borderRadius: 3,
                  textAlign: "left",
                  px: 2,
                }}
              >
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

      {renderSection("Incident Analysis", Incident_Analysis)}

      {renderSection("Behaviour Patterns", Behaviour_Patterns)}

      {renderSection("Prevention & Strategy", Prevention_Strategy)}

      {renderSection("Reporting & Communication", Reporting_Communication)}

      {renderSection("Improve AI Insights", Improve_AI_Insights)}

    </Container>
  );
};

export { AIInsightsIncidentPage };