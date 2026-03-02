import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../app/layout/AppLayout";

import DashboardPage from "../features/dashboard/pages/DashboardPage.tsx";
import ReportIncidentPage from "../features/reporting/pages/ReportIncidentPage.tsx";
import IncidentsPage from "../features/incidents/pages/IncidentsPage";
import AIInsightsPage from "../features/ai-insights/pages/AIInsightsPage";
import AuditPage from "../features/auditing/pages/AuditPage";
import AnalyticsPage from "../features/analytics/pages/AnalyticsPage";

export default function AppRoutes() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/report" element={<ReportIncidentPage />} />
        <Route path="/incidents" element={<IncidentsPage />} />
        <Route path="/ai-insights" element={<AIInsightsPage />} />
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </AppLayout>
  );
};
