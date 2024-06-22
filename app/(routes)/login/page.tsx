import { Metadata } from "next";
import Script from "next/script";
import InscriptionForm from "@/app/_components/login/InscriptionForm";
import LoginForm from "@/app/_components/login/LoginForm";

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
              <LoginForm/>
              <InscriptionForm/>
          </div>
        </div>
      </div>
      <Script src="authentification.js"></Script>
    </>
  );
}
