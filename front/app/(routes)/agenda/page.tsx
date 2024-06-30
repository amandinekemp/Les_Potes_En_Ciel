import CalendarCmpt from "@/app/_components/calendar/CalendarCmpt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda - Les potes en ciel",
  description: "Agenda des potes en ciel",
};

export default function CalendarPage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <CalendarCmpt/>
        </div>
      </div>
    </>
  );
}
