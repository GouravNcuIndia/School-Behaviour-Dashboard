import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1300,
        bgcolor: "primary.main",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ color: "#ffffff" }}>
          Behaviour & Incident Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
