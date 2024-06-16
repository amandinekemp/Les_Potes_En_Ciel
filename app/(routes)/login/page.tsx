import FormInscription from "@/app/_components/login/FormInscription";
import FormLogin from "@/app/_components/login/FormLogin";
import Script from "next/script";

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
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="authentification.js"></Script>
    </>
  );
}
