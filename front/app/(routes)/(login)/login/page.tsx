import { Metadata } from "next";
import { BrowserRouter } from "react-router-dom";
import InscriptionFormCmpt from "@/app/_components/login/InscriptionFormCmpt";
import LoginFormCmpt from "@/app/_components/login/LoginFormCmpt";

export const metadata: Metadata = {
  title: "Authentification - Les potes en ciel",
  description: "Page d'authentification des potes en ciel",
};

export default function LoginPage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-6">
              <LoginFormCmpt/>
              <InscriptionFormCmpt/>
          </div>
        </div>
      </div>
    </>
  );
}
