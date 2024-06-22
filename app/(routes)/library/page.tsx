import BookShelve from "@/app/_components/library/BookShelve";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibliothèque - Les potes en ciel",
  description: "Bibliothèque des potes en ciel",
};

export default function LibraryPage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <BookShelve/>
        </div>
      </div>
    </>
  );
}
