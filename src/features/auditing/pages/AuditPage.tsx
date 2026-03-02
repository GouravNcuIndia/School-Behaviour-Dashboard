import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const AuditPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Incident Audit Log
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Box>
          <Typography variant="body1">
            This section will display:
          </Typography>

          <ul>
            <li>Incident updates</li>
            <li>Report modifications</li>
            <li>User actions</li>
            <li>System-triggered AI events</li>
          </ul>
        </Box>
      </Paper>
    </Container>
  );
};

export default AuditPage;