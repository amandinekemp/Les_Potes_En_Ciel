import { Metadata } from "next";
import Script from "next/script";
import FormInscription from "@/app/_components/login/FormInscription";
import FormLogin from "@/app/_components/login/FormLogin";

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
              <FormLogin/>
              <FormInscription/>
          </div>
        </div>
      </div>
      <Script src="authentification.js"></Script>
    </>
  );
}
