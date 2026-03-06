import React from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  Stack,
  Grid,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------
// Service Module
// ----------------------------------------------------------------------
const Service_Insights = [
  "Create a 6 hour training course based on our needs",
  "Create a 3 hour training course based on our needs",
  "Create a 1 hour training course based on our needs",
  "Summary of Incidents",
  "Supporting Post Incident Learning",
  "Summary of Low Level Incidents",
  "Summary of Medium Level Incidents",
  "Summary of High Level Incidents",
  "What can we learn from our incidents?",
  "What do we do well?",
  "Information for (SEF)",
  "Most Common Triggers",
  "What are our areas for development?",
  "Is behaviour in our service improving?",
  "How can we overall improve behaviour?",
  "Causation of Behaviour",
];

const Service_Improve_AI_Insights = [
  "Report inaccurate information",
  "Make a suggestion",
];

// ----------------------------------------------------------------------
// Custom Theme (matches your index.css)
// ----------------------------------------------------------------------
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff9800", // --secondary-orange
    },
    secondary: {
      main: "#ffb74d", // hover orange
    },
    background: {
      default: "#0d1117", // --background-dark
      paper: "#16213e", // --card-background
    },
    text: {
      primary: "#ffffff", // --text-primary
      secondary: "#b0b0b0", // --text-secondary
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#b0b0b0", // thumb when off
        },
        track: {
          backgroundColor: "#333333", // track when off
          ".Mui-checked.Mui-checked + &": {
            backgroundColor: "#ff9800", // track when on
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#ff9800",
          color: "#000",
          "&:hover": {
            backgroundColor: "#ffb74d",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#333333",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff9800",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff9800",
          },
        },
        input: {
          color: "#ffffff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#b0b0b0",
          "&.Mui-focused": {
            color: "#ff9800",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-outlined": {
            borderColor: "#333333",
            color: "#ffffff",
          },
          "&.MuiChip-filled.MuiChip-colorPrimary": {
            backgroundColor: "#ff9800",
            color: "#000",
          },
        },
      },
    },
  },
});
// ----------------------------------------------------------------------
// Component 3
// ----------------------------------------------------------------------

const AIInsightsPage3: React.FC = () => {
  const handleServiceClick = (option: string) => {
    console.log("Selected Service Insight:", option);

    // Later you can trigger backend here
    // Example:
    // supabase.functions.invoke("service-ai", { body: { option } })
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* SERVICE INSIGHTS */}
      <Typography variant="h4" gutterBottom>
        Service Insights
      </Typography>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={2}>
          {Service_Insights.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleServiceClick(item)}
                sx={{
                  height: 70,
                  fontWeight: 600,
                  borderRadius: 3,
                }}
              >
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* IMPROVE AI SECTION */}

      <Typography variant="h4" gutterBottom>
        Improve AI Insights
      </Typography>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Stack spacing={2}>
          {Service_Improve_AI_Insights.map((item, index) => (
            <Button
              key={index}
              variant="contained"
              onClick={() => handleServiceClick(item)}
              sx={{
                height: 60,
                fontWeight: 600,
                borderRadius: 3,
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
};

export { AIInsightsPage3 };
