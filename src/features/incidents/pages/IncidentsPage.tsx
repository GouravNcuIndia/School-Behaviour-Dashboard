import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";
import { supabase } from "../../../lib/supabase";

interface Incident {
  "incident-id": number;
  incident_student: string;
  incident_type: string;
  incident_date: string;
  incident_location: string;
}

const IncidentsPage: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIncidents = async () => {
      const { data, error } = await supabase
        .from("incident_table")
        .select(
          '"incident-id", incident_student, incident_type, incident_date, incident_location',
        )
        .order("incident_date", { ascending: false });

      if (!error && data) {
        setIncidents(data as Incident[]);
      }

      setLoading(false);
    };

    fetchIncidents();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Incidents
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Paper sx={{ p: 3 }}>
          {incidents.map((incident) => (
            <Box key={incident["incident-id"]} mb={2}>
              <Typography fontWeight="bold">
                {incident.incident_student} — {incident.incident_type}
              </Typography>
              <Typography variant="body2">
                {incident.incident_date} | {incident.incident_location}
              </Typography>
            </Box>
          ))}
        </Paper>
      )}
    </Container>
  );
};

export default IncidentsPage;
