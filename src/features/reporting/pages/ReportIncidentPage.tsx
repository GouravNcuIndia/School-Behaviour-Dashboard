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
import { useCreateIncident } from "../hooks/useCreateIncident";

const { submitIncident, loading, error } = useCreateIncident();
// ----------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------
const INCIDENT_TYPES = [
  "Physical",
  "Verbal",
  "Disruption",
  "Bullying",
  "Damage",
  "Cheating",
  "Disrespect",
  "Absenteeism",
  "Theft",
  "Cyberbullying",
];

const INCIDENT_CLICKER = [
  "Hitting",
  "Kicking",
  "Pinching",
  "Screaming",
  "Shouting",
  "Spitting",
  "Nipping",
];

const LOCATIONS = [
  "Playground",
  "Science Lab",
  "Hallway",
  "Cafeteria",
  "Administration",
  "Library",
  "Exam Hall",
  "Gym",
  "Music Room",
  "Locker Area",
  "Computer Lab",
  "Art Room",
  "Classroom",
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
const ReportIncidentPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<any>({
    incident_student: "",
    incident_type: "",
    incident_clicker: "",
    incident_record: "REC_AUTO",
    incident_date: "",
    incident_time: "",
    incident_location: "",
    incident_witnesses: "",
    students_involved: "",
    staff_involved: "",
    report_completer: "",
    injury_status: false,
    your_action: false,
    reason_action: "",
    incident_description: "",
    c1: "Level1",
    c2: "Term1",
    c3: "Open",
  });

  // Handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSwitch =
    (name: keyof any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev: any) => ({ ...prev, [name]: e.target.checked }));
    };

  const handleTypeClick = (type: string) => {
    setFormData((prev: any) => ({ ...prev, incident_type: type }));
  };

  const handleClickerClick = (type: string) => {
    setFormData((prev: any) => ({ ...prev, incident_clicker: type }));
  };

  const handleLocationClick = (location: string) => {
    setFormData((prev: any) => ({ ...prev, incident_location: location }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const handleSubmit = async () => {
      try {
        await submitIncident(formData);
        setSuccess(true);
      } catch (err) {
        console.error(err);
      }
    };

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setFormData({
        ...formData,
        incident_student: "",
        incident_type: "",
        incident_clicker: "",
        incident_date: "",
        incident_time: "",
        incident_location: "",
        incident_witnesses: "",
        students_involved: "",
        staff_involved: "",
        report_completer: "",
        incident_description: "",
      });
    }

    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Report Incident
        </Typography>

        <Paper sx={{ p: 4 }}>
          <Box display="flex" flexDirection="column" gap={3}>
            {/* Student Name */}
            <TextField
              label="Student Name"
              name="incident_student"
              value={formData.incident_student}
              onChange={handleChange}
              fullWidth
            />

            {/* Staff Name */}
            <TextField
              label="Reporting Staff"
              name="report_completer"
              value={formData.report_completer}
              onChange={handleChange}
              fullWidth
            />

            {/* Incident Type - Chips */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Incident Type
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {INCIDENT_TYPES.map((type) => (
                  <Chip
                    key={type}
                    label={type}
                    onClick={() => handleTypeClick(type)}
                    color={
                      formData.incident_type === type ? "primary" : "default"
                    }
                    variant={
                      formData.incident_type === type ? "filled" : "outlined"
                    }
                    clickable
                  />
                ))}
              </Stack>
              {!formData.incident_type && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 0.5, display: "block" }}
                >
                  Please select an incident type
                </Typography>
              )}
            </Box>

            {/* Incident Clicker - Chips */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Incident Clicker
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {INCIDENT_CLICKER.map((type) => (
                  <Chip
                    key={type}
                    label={type}
                    onClick={() => handleClickerClick(type)}
                    color={
                      formData.incident_clicker === type ? "primary" : "default"
                    }
                    variant={
                      formData.incident_clicker === type ? "filled" : "outlined"
                    }
                    clickable
                  />
                ))}
              </Stack>
              {!formData.incident_clicker && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 0.5, display: "block" }}
                >
                  Please select an incident clicker
                </Typography>
              )}
            </Box>

            {/* Date and Time */}
            <Box display="flex" gap={2} flexWrap="wrap">
              <TextField
                label="Incident Date"
                name="incident_date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.incident_date}
                onChange={handleChange}
                sx={{ flex: 1 }}
              />
              <TextField
                label="Incident Time"
                name="incident_time"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={formData.incident_time}
                onChange={handleChange}
                sx={{ flex: 1 }}
              />
            </Box>

            {/* Location - Chips */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Location
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {LOCATIONS.map((location) => (
                  <Chip
                    key={location}
                    label={location}
                    onClick={() => handleLocationClick(location)}
                    color={
                      formData.incident_location === location
                        ? "primary"
                        : "default"
                    }
                    variant={
                      formData.incident_location === location
                        ? "filled"
                        : "outlined"
                    }
                    clickable
                  />
                ))}
              </Stack>
              {!formData.incident_location && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 0.5, display: "block" }}
                >
                  Please select a location
                </Typography>
              )}
            </Box>

            {/* Description */}
            <TextField
              label="Description"
              name="incident_description"
              multiline
              rows={4}
              value={formData.incident_description}
              onChange={handleChange}
              fullWidth
            />

            {/* Switches - now visible with dark theme */}
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.05)", // subtle contrast
                p: 2,
                borderRadius: 1,
              }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.injury_status}
                      onChange={handleSwitch("injury_status")}
                    />
                  }
                  label="Does the incident involve an injury?"
                  sx={{ flex: 1 }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.your_action}
                      onChange={handleSwitch("your_action")}
                    />
                  }
                  label="Did you take action?"
                  sx={{ flex: 1 }}
                />
              </Stack>
            </Box>

            {/* Action Reason - conditional */}
            {formData.your_action && (
              <TextField
                label="Explain Action"
                name="reason_action"
                value={formData.reason_action}
                onChange={handleChange}
                fullWidth
              />
            )}

            {/* Feedback */}
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">Incident Submitted</Alert>}

            {/* Submit Button */}
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={loading}
              size="large"
            >
              {loading ? "Submitting..." : "Submit Incident"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default ReportIncidentPage;
