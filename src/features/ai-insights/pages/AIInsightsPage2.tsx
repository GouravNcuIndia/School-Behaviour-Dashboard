import React from "react";
import { Container, Typography, Button, Paper, Grid } from "@mui/material";
import { createTheme } from "@mui/material/styles";

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
// Student Module
// ----------------------------------------------------------------------
const Student_Pre_Incident_Support = [
  "Produce a draft barriers to learning plan",
  "Create a draft Risk Assessment for this individual",
  "What are this individual's most common triggers",
  "Set goals",
  "How can we reduce behaviour incidents",
  "Causation of Behaviour",
];

const Student_Incident_Support = [
  "Suggest strategies for the individual",
  "What low level behaviours does this individual exhibit",
  "What medium level behaviour does this individual exhibit",
  "What high level behaviour does this individual exhibit",
  "How can we best support these individual low-level behaviours",
  "How can we best support these individual medium-level behaviours",
  "How can we best support these individual high-level behaviours",
  "Is this individual behaviour improving",
];

const Student_Post_Incident_Support = [
  "Draft an informal letter based on incidents in the last week",
  "Draft an informal letter based on incidents in the last month",
  "Draft an informal letter based on incidents in the last 3 month",
  "Draft an informal letter based on incidents in the last 6 month",
  "Draft an formal letter based on incidents in the last week",
  "Draft an formal letter based on incidents in the last month",
  "Draft an formal letter based on incidents in the last 3 month",
  "Draft an formal letter based on incidents in the last 6 month",
  "What does this individual do well",
  "Summary of reports",
  "How can we support this individual with Post Incident Learning",
  "Behaviour Patterns",
];

const Student_Improve_AI_Insights = [
  "Report inaccurate information",
  "Make a suggestion",
];
// ----------------------------------------------------------------------
// Component 2
// ----------------------------------------------------------------------

const AIInsightsPage2: React.FC = () => {
  const handleStudentClick = (option: string) => {
    console.log("Student Insight Selected:", option);

    // Later connect to backend
    // supabase.functions.invoke("student-ai", { body: { option } })
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
                onClick={() => handleStudentClick(item)}
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
    </>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {renderSection("Pre Incident Support", Student_Pre_Incident_Support)}

      {renderSection("Incident Support", Student_Incident_Support)}

      {renderSection("Post Incident Support", Student_Post_Incident_Support)}

      {renderSection("Improve AI Insights", Student_Improve_AI_Insights)}
    </Container>
  );
};

export { AIInsightsPage2 };
