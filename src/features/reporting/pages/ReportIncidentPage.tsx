import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Switch,
  FormControlLabel,
  Paper,
  Alert,
} from "@mui/material";
import { supabase } from "../../../lib/supabase";
import { IncidentInsert } from "../types/incident.types.ts";

const ReportIncidentPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<IncidentInsert>({
    incident_student: "",
    incident_type: "",
    incident_clicker: "Manual",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitch =
    (name: keyof IncidentInsert) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [name]: e.target.checked }));
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
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Report Incident
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Student ID"
            name="incident_student"
            value={formData.incident_student}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Incident Type"
            name="incident_type"
            value={formData.incident_type}
            onChange={handleChange}
            select
            fullWidth
          >
            <MenuItem value="Disruption">Disruption</MenuItem>
            <MenuItem value="Physical">Physical</MenuItem>
            <MenuItem value="Bullying">Bullying</MenuItem>
          </TextField>

          <TextField
            label="Incident Date"
            name="incident_date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.incident_date}
            onChange={handleChange}
          />

          <TextField
            label="Incident Time"
            name="incident_time"
            type="time"
            InputLabelProps={{ shrink: true }}
            value={formData.incident_time}
            onChange={handleChange}
          />

          <TextField
            label="Location"
            name="incident_location"
            value={formData.incident_location}
            onChange={handleChange}
          />

          <TextField
            label="Description"
            name="incident_description"
            multiline
            rows={4}
            value={formData.incident_description}
            onChange={handleChange}
          />

          <FormControlLabel
            control={
              <Switch
                checked={formData.injury_status}
                onChange={handleSwitch("injury_status")}
              />
            }
            label="Injury Involved"
          />

          <FormControlLabel
            control={
              <Switch
                checked={formData.your_action}
                onChange={handleSwitch("your_action")}
              />
            }
            label="Action Taken"
          />

          <TextField
            label="Action Reason"
            name="reason_action"
            value={formData.reason_action}
            onChange={handleChange}
          />

          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">Incident Submitted</Alert>}

          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit Incident"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ReportIncidentPage;
