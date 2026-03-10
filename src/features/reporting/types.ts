export interface IncidentPayload {
  incident_student: string;
  incident_type: string;
  incident_clicker: string;
  incident_record: string;

  incident_date: string;
  incident_time: string;

  incident_location: string;

  incident_witnesses: string;
  students_involved: string;
  staff_involved: string;

  report_completer: string;

  injury_status: boolean;
  your_action: boolean;

  reason_action: string;

  incident_description: string;

  c1: string;
  c2: string;
  c3: string;
}