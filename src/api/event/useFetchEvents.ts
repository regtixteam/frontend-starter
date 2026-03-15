import { useQuery } from "@tanstack/vue-query";
import { api } from "@/lib/axios";
import type { TEvent } from "@/types/event";

export const useFetchEvents = () => {
  return useQuery<TEvent[]>({
    queryKey: ["events"],
    queryFn: async () => {
      try {
        const response = await api.get("events");
        return response.data.data;
      } catch (error: any) {
        if (error.response) {
          throw error.response.data;
        }
        throw new Error("Unexpected error occurred");
      }
    },
  });
};
