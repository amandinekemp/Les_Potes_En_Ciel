import { Metadata } from "next";
import FamilyCmpt from "@/app/_components/account/FamilyCmpt";
import MemberCmpt from "@/app/_components/account/MemberCmpt";
import BorrowCmpt from "@/app/_components/account/BorrowCmpt";

export const metadata: Metadata = {
  title: "Profile utilisateur - Les potes en ciel",
  description: "Page de gestion du profile utilisateur des potes en ciel",
};

export default function AccountProfilePage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
            <h1>Mon profile</h1>
        </div>
        <div className="row justify-content-center mt-4">
          <h2>Informations de la famille</h2>
          <FamilyCmpt family={ {} }/>
        </div>
        <div className="row mt-4">
          <h2>Informations sur les membres de la famille</h2>
          <MemberCmpt member={ {} }/>
        </div>
        <div className="row mt-4">
          <h2>Emprunts en cours</h2>
          <BorrowCmpt borrow={ {} }/>
        </div>
      </div>
    </>
  );
}
