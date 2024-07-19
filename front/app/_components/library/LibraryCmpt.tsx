"use client"

import { useState } from "react";
import BookCreateFormCmpt from "@/app/_components/library/BookCreateFormCmpt";
import BookShelveCmpt from "@/app/_components/library/BookShelveCmpt";

/** LibraryCmpt toggles between book shelving and book creation forms **/

export default function LibraryCmpt() {
  const [shelveMode, setShelveMode] = useState(true);
  const [isbnBookToEdit, setIsbnBookToEdit] = useState("");

  return (
    <>
      {shelveMode && <BookShelveCmpt
        onCreate={() => {setShelveMode(false); setIsbnBookToEdit("")}}
        onEdit={(isbn:string) => {setShelveMode(false); setIsbnBookToEdit(isbn);} }
        /> }
      {!shelveMode && <BookCreateFormCmpt
        onShelve={() => setShelveMode(true)}
        isbnBookToEdit={isbnBookToEdit}
        />}
    </>
  );
}
