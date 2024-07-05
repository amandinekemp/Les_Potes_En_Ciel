import CalendarCmpt from "@/app/_components/calendar/CalendarCmpt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda - Les potes en ciel",
  description: "Agenda des potes en ciel",
};

export default function CalendarPage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h2>Agenda du mois</h2>
          <CalendarCmpt/>
        </div>
      </div>
    </>
  );
}
