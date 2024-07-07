import { Metadata } from "next";
import ChangePasswordFormCmpt from "@/app/_components/login/ChangePasswordFormCmpt";

export const metadata: Metadata = {
  title: "Modification de mot de passe - Les potes en ciel",
  description: "Page pour modifier le mot de passe des potes en ciel",
};

export default function ChangePasswordPage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
              <ChangePasswordFormCmpt/>
          </div>
        </div>
      </div>
    </>
  );
}
