export type TEventStatus = "draft" | "published" | "cancelled";
export type TEvent = {
  name: string;
  status: TEventStatus;
  location: string;
  end_date: string;
};
