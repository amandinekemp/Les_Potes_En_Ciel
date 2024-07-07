import { Metadata } from "next";
import ProfileCmpt from "@/app/_components/account/ProfileCmpt";

export const metadata: Metadata = {
  title: "Profile utilisateur - Les potes en ciel",
  description: "Page de gestion du profile utilisateur des potes en ciel",
};

export default function AccountProfilePage() {
  return (
    <>
      <div className="container">
        <ProfileCmpt />
      </div>
    </>
  );
}
