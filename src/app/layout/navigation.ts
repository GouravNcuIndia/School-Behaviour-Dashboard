export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

export const navigationItems: NavItem[] = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Report Incident", path: "/report" },
  { label: "Incidents", path: "/incidents" },
  { label: "AI Insights", path: "/ai-insights" },
  { label: "Audit", path: "/audit" },
  { label: "Analytics", path: "/analytics" },
];
