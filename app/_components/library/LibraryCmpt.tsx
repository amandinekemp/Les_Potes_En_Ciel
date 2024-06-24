"use client"

import { useState } from "react";
import BookCreateForm from "@/app/_components/library/BookCreateForm";
import BookShelveCmpt from "@/app/_components/library/BookShelveCmpt";

export default function LibraryCmpt() {
  const [creationMode, setCreationMode] = useState('isCreation');

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {creationMode === 'true' && <BookCreateForm onShelve={() => setCreationMode("")}/>}
          {creationMode !== 'true' && <BookShelveCmpt onCreate={() => setCreationMode("true")}/> }
        </div>
      </div>
    </>
  );
}
