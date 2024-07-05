"use client"

import { useState } from "react";
import BookCreateFormCmpt from "@/app/_components/library/BookCreateFormCmpt";
import BookShelveCmpt from "@/app/_components/library/BookShelveCmpt";

export default function LibraryCmpt() {
  const [creationMode, setCreationMode] = useState('isCreation');

  return (
    <>
      {creationMode === 'true' && <BookCreateFormCmpt onShelve={() => setCreationMode("")}/>}
      {creationMode !== 'true' && <BookShelveCmpt onCreate={() => setCreationMode("true")}/> }
    </>
  );
}
