import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  ListItemIcon,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Assessment as AssessmentIcon,
  People as PeopleIcon,
  Report as ReportIcon,
  Psychology as PsychologyIcon,
  Checklist as AuditIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationItems } from "./navigation.ts";

const drawerWidth = 240;

const iconMap: { [key: string]: React.ReactNode } = {
  "/dashboard": <DashboardIcon />,
  "/incidents": <PeopleIcon />,
  "/report": <ReportIcon />,
  "/ai-insights": <PsychologyIcon />,
  "/audit": <AuditIcon />,
  "/analytics": <AssessmentIcon />,
};

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          marginTop: "30px",
          marginLeft: "60px",
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "primary.main",
          borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      <Toolbar />
      <List sx={{ pt: 2 }}>
        {navigationItems.map((item) => (
          <ListItemButton
            key={item.path}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
            sx={{
              color:
                location.pathname === item.path
                  ? "secondary.main"
                  : "text.primary",
              bgcolor:
                location.pathname === item.path
                  ? "rgba(255, 152, 0, 0.1)"
                  : "transparent",
              "&:hover": {
                bgcolor: "rgba(255, 152, 0, 0.05)",
              },
              mb: 1,
              mx: 1,
              borderRadius: 1,
            }}
          >
            <ListItemIcon
              sx={{
                color: "inherit",
                minWidth: 40,
              }}
            >
              {iconMap[item.path]}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                sx: { fontWeight: location.pathname === item.path ? 600 : 400 },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
