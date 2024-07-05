import NewsletterCmpt from "@/app/_components/newsletter/NewsletterCmpt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter - Les potes en ciel",
  description: "Newsletter des potes en ciel",
};

export default function NewsletterPage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <NewsletterCmpt/>
        </div>
      </div>
    </>
  );
}
