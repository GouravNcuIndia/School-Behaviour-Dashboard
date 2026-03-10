import { supabase } from "../../../lib/supabase";
import type { IncidentPayload } from "../types.ts";

export const createIncident = async (payload: IncidentPayload) => {
  const { data, error } = await supabase
    .from("incident_table_temp")
    .insert([payload])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
