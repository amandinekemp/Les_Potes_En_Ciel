import LibraryCmpt from "@/app/_components/library/LibraryCmpt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibliothèque - Les potes en ciel",
  description: "Bibliothèque des potes en ciel",
};

export default function LibraryPage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <LibraryCmpt/>
        </div>
      </div>
    </>
  );
}
