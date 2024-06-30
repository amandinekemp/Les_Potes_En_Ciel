"use client"

import { useState } from "react";
import BookCreateFormCmpt from "@/app/_components/library/BookCreateFormCmpt";
import BookShelveCmpt from "@/app/_components/library/BookShelveCmpt";

export default function LibraryCmpt() {
  const [creationMode, setCreationMode] = useState('isCreation');

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {creationMode === 'true' && <BookCreateFormCmpt onShelve={() => setCreationMode("")}/>}
          {creationMode !== 'true' && <BookShelveCmpt onCreate={() => setCreationMode("true")}/> }
        </div>
      </div>
    </>
  );
}
