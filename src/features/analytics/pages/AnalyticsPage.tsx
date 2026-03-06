import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------
const Analytics_Avalaible_Analytics = [
  "Global Incident Report",
  "Intervention Report",
  "Involvement Report",
  "Injuries Report",
  "Log Report",
  "Clicker Report",
  "Discriminatory and prejudiced behaviour. Suspensions and exclusions",
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
// Component
// ----------------------------------------------------------------------
const AnalyticsPage: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleAnalytics = (type: string) => {
    console.log("Running analytics:", type, "Query:", query);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Behaviour Analytics
        </Typography>

        <Paper sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Analytics Dashboard
          </Typography>

          {/* Buttons Grid */}
          <Grid container spacing={2}>
            {Analytics_Avalaible_Analytics.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={() => handleAnalytics(item)}
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
      </Container>
    </ThemeProvider>
  );
};

export default AnalyticsPage;
