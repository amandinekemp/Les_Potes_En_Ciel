import ContactUsCmpt from "@/app/_components/contact_us/ContactUsCmpt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Les potes en ciel",
  description: "Contactez-nous",
};

export default function ContactUsPage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <ContactUsCmpt/>
        </div>
      </div>
    </>
  );
}
