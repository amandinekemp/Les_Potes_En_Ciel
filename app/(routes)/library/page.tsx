import BookCreateForm from "@/app/_components/library/BookCreateForm";
import BookShelveCmpt from "@/app/_components/library/BookShelveCmpt";
import { Metadata } from "next";

let isCreation: boolean = true;

export const metadata: Metadata = {
  title: "Bibliothèque - Les potes en ciel",
  description: "Bibliothèque des potes en ciel",
};

export default function LibraryPage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          { isCreation ?  <BookCreateForm/> : <BookShelveCmpt/> }
        </div>
      </div>
    </>
  );
}
