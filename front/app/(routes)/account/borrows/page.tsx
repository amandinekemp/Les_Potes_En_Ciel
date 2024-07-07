import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes emprunts de livre - Les potes en ciel",
  description: "Page pour visualiser ses emprunts de livres des potes en ciel",
};

export default function AccountBorrowsPage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1>Mes livres empruntés</h1>
            A faire
          </div>
        </div>
      </div>
    </>
  );
}
