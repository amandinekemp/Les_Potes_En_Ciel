import NewsFeedCmpt from "@/app/_components/news_feed/NewsFeedCmpt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A propos de l'association - Les potes en ciel",
  description: "A propos des potes en ciel",
};

export default function NewsFeedPage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <NewsFeedCmpt/>
        </div>
      </div>
    </>
  );
}
