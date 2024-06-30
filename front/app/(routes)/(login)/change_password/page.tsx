import { Metadata } from "next";
import ChangePasswordFormCmpt from "@/app/_components/login/ChangePasswordFormCmpt";

export const metadata: Metadata = {
  title: "Modification de mot de passe - Les potes en ciel",
  description: "Page pour modifier le mot de passe des potes en ciel",
};

export default function ChangePasswordPage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-6">
              <ChangePasswordFormCmpt/>
          </div>
        </div>
      </div>
    </>
  );
}
