"use client"

import { useEffect, useState } from "react";

import { Family } from "@/app/_types/Family";
import { Member } from "@/app/_types/Member";
import { Borrow } from "@/app/_types/Borrow";
import FamilyCmpt from "@/app/_components/account/FamilyCmpt";
import MemberCmpt from "@/app/_components/account/MemberCmpt";
import BorrowCmpt from "@/app/_components/account/BorrowCmpt";

export default function ProfileCmpt() {
  const [family, setFamily] = useState<Family>();
  const [borrows, setBorrows] = useState<Borrow[]>();
  const idFamily = 2;

  useEffect(() => {
    fetch('http://localhost:8000/api/families/'+idFamily)
      .then(response => response.json())
      .then(data => setFamily(data))
      .catch(error => console.error(error));

    fetch('http://localhost:8000/api/borrows/'+idFamily)
    .then(response => response.json())
    .then(data => setBorrows(data))
    .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className="row justify-content-center">
          <h1>Mon profile</h1>
      </div>
      <div className="row justify-content-center mt-4">
        <h2>Informations de la famille</h2>
        {family && <FamilyCmpt family={ family }/>}
      </div>
      <div className="row mt-4">
        <h2>Membres de la famille</h2>
        {family?.members?.map((memberItem:Member) => (
          <MemberCmpt key={memberItem.idMember} member={memberItem} />
        ))}
      </div>
      <div className="row mt-4">
        <h2>Emprunts de livre</h2>
        {borrows?.map((borrowItem:Borrow) => (
          <BorrowCmpt key={borrowItem.idBorrow} borrow={borrowItem} />
        ))}
      </div>
    </>
  );
}
