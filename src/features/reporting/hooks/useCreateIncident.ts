import { useState } from "react";
import { createIncident } from "../api/createIncident";
import type { IncidentPayload } from "../types.ts";

export const useCreateIncident = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitIncident = async (payload: IncidentPayload) => {
    setLoading(true);
    setError(null);

    try {
      const result = await createIncident(payload);
      return result;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unexpected error occurred");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitIncident,
    loading,
    error,
  };
};
