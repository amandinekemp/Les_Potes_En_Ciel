"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

import { Family } from "@/app/_types/Family";
import { Member } from "@/app/_types/Member";
import { Borrow } from "@/app/_types/Borrow";
import FamilyCmpt from "@/app/_components/account/FamilyCmpt";
import MemberCmpt from "@/app/_components/account/MemberCmpt";
import BorrowCmpt from "@/app/_components/account/BorrowCmpt";

const ProfileCmpt = () => {
  const [user, setUser] = useState<Family>();
  const [borrows, setBorrows] = useState<Borrow[]>();
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:8000/api/users/me", {
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));

    fetch("http://localhost:8000/api/borrows/me", {
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => setBorrows(Array.isArray(data) ? data : []))
      .catch((error) => console.error(error));
  }, []);

  const doLogout = () => {
    router.push("/logout");
  }

  return (
    <>
      <div className="row justify-content-center">
        <h1 className="col">Mon profile</h1>
        <Button variant="danger" className="col-auto" onClick={doLogout}>Se deconnecter</Button>
      </div>
      <div className="row justify-content-center mt-4">
        <h2>Informations de la famille</h2>
        {user && <FamilyCmpt family={user} />}
      </div>
      <div className="row mt-4">
        <h2>Membres de la famille</h2>
        {user?.members?.map((memberItem: Member) => (
          <MemberCmpt key={memberItem.idMember} member={memberItem} />
        ))}
      </div>
      <div className="row mt-4">
        <h2>Emprunts de livre</h2>
        {borrows?.map((borrowItem: Borrow) => (
          <BorrowCmpt key={borrowItem.idBorrow} borrow={borrowItem} />
        ))}
      </div>
    </>
  );
}

export default ProfileCmpt;
