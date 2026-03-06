import React from "react";
import { Container, Typography, Button, Paper, Stack } from "@mui/material";
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
// Component 1
// ----------------------------------------------------------------------

type Props = {
  setSelectedView: (view: string) => void;
};

const AIInsightsPage1: React.FC<Props> = ({ setSelectedView }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Select From Below
      </Typography>

      <Paper
        sx={{
          p: 4,
          mb: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" spacing={3}>
          <Button
            variant="contained"
            size="large"
            sx={{
              minWidth: 200,
              height: 100,
              fontWeight: 800,
              borderRadius: 5,
            }}
            onClick={() => setSelectedView("incident")}
          >
            Incident
          </Button>

          <Button
            variant="contained"
            size="large"
            sx={{
              minWidth: 200,
              height: 100,
              fontWeight: 800,
              borderRadius: 5,
            }}
            onClick={() => setSelectedView("student")}
          >
            Student
          </Button>

          <Button
            variant="contained"
            size="large"
            sx={{
              minWidth: 200,
              height: 100,
              fontWeight: 800,
              borderRadius: 5,
            }}
            onClick={() => setSelectedView("service")}
          >
            Service
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export { AIInsightsPage1 };
