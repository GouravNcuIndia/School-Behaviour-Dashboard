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
// Main component – default export
// ----------------------------------------------------------------------
const AIInsightsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        AI Insights - Student
      </Typography>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Student Behaviour Summary
        </Typography>

        <Typography variant="body1" paragraph>
          BehaviourSmart/ai/insights/serviceuser
        </Typography>
      </Paper>
      <AIInsightsPage1 />
      <AIInsightsPage2 />
    </Container>
  );
};
export default AIInsightsPage;
// ----------------------------------------------------------------------
// Component 1
// ----------------------------------------------------------------------

const AIInsightsPage1: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Select From Below
      </Typography>
      <Paper
        sx={{
          p: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              minWidth: 160,
              height: 50,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Incident
          </Button>

          <Button
            variant="contained"
            size="large"
            sx={{
              minWidth: 160,
              height: 50,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Student
          </Button>

          <Button
            variant="contained"
            size="large"
            sx={{
              minWidth: 160,
              height: 50,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Service
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export { AIInsightsPage1 };
// ----------------------------------------------------------------------
// Component 2
// ----------------------------------------------------------------------

const AIInsightsPage2: React.FC = () => {
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

    const { error } = await supabase.from("incident_table").insert([formData]);

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
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Select Student
          </Typography>
          <Box display="flex" flexDirection="column" gap={3}>
            {/* Student Name */}
            <TextField
              label="Student Name"
              name="incident_student"
              value={formData.incident_student}
              onChange={handleChange}
              fullWidth
            />
            <Paper />
            <Paper sx={{ p: 4 }}></Paper>
            {/* Pre Inicident Support*/}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Pre Inicident Support
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {Student_Pre_Incident_Support.map((type) => (
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
                  Please select an Pre Inicident Support
                </Typography>
              )}
            </Box>

            {/* Incident Clicker - Chips */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Inicident Support
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {Student_Incident_Support.map((type) => (
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
                  Please select an Inicident Support
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
                Post Incident Support
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {Student_Post_Incident_Support.map((location) => (
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
export { AIInsightsPage2 };
