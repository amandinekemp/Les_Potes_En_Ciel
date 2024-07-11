import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import LoginFormCmpt from "@/app/_components/login/LoginFormCmpt";
import InscriptionFormCmpt from "@/app/_components/login/InscriptionFormCmpt";

export const metadata: Metadata = {
  title: "Authentification - Les potes en ciel",
  description: "Page d'authentification des potes en ciel",
};

export default function LoginPage() {
  const bearer = cookies().get('BEARER');
  if (bearer) {
    console.log("Token exist, redirecting to account page");
    redirect("/account");
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <LoginFormCmpt/>
            <InscriptionFormCmpt/>
          </div>
        </div>
      </div>
    </>
  );
}
