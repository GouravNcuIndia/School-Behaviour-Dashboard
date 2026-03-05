import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Paper,
  Alert,
  Chip,
  Stack,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { supabase } from "../../../lib/supabase";

// ----------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// Avalaible Analytics
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
