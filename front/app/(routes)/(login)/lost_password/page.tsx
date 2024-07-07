import { Metadata } from "next";
import LostPasswordFormCmpt from "@/app/_components/login/LostPasswordFormCmpt";

export const metadata: Metadata = {
  title: "Mot de passe perdu - Les potes en ciel",
  description: "Page pour réinitialiser le mot de passe des potes en ciel",
};

export default function LostPasswordPage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h1>Mot de passe perdu</h1>
            <LostPasswordFormCmpt/>
          </div>
        </div>
      </div>
    </>
  );
}
