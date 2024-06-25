import { Metadata } from "next";
import Script from "next/script";
import InscriptionFormCmpt from "@/app/_components/login/InscriptionFormCmpt";
import LoginFormCmpt from "@/app/_components/login/LoginFormCmpt";

export const metadata: Metadata = {
  title: "Authentification - Les potes en ciel",
  description: "Page d'authentification des potes en ciel",
};

export default function LoginPage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
              <LoginFormCmpt/>
              <InscriptionFormCmpt/>
          </div>
        </div>
      </div>
      <Script src="authentification.js"></Script>
    </>
  );
}
