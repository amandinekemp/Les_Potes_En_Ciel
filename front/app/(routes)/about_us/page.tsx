import AboutUsCmpt from "@/app/_components/about_us/AboutUsCmpt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A propos de l'association - Les potes en ciel",
  description: "A propos des potes en ciel",
};

export default function AboutUsPage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <AboutUsCmpt/>
        </div>
      </div>
    </>
  );
}
