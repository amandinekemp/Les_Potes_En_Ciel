import HelpUsCmpt from "@/app/_components/help_us/HelpUsCmpt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aider l'association - Les potes en ciel",
  description: "Nous aider",
};

export default function HelpUsPage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <HelpUsCmpt/>
        </div>
      </div>
    </>
  );
}
