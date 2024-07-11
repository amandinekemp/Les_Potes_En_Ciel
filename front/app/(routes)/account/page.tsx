import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import ProfileCmpt from "@/app/_components/account/ProfileCmpt";

export const metadata: Metadata = {
  title: "Profile utilisateur - Les potes en ciel",
  description: "Page de gestion du profile utilisateur des potes en ciel",
};

export default function AccountProfilePage() {
  const bearer = cookies().get('BEARER');
  if (!bearer) {
    console.log("No token found, redirecting to login page");
    redirect("/login");
  }

  return (
    <>
      <div className="container">
        <ProfileCmpt />
      </div>
    </>
  );
}
