import React from "react";
import type { Metadata } from "next";
import InsightStories from "../../components/PageComponents/News/news";

export const metadata: Metadata = {
  title: "News - Daadras",
  description: "Latest news and updates from Daadras",
  robots: "noindex, nofollow",
};

function NewsPage() {
  return (
    <main>
      <InsightStories />
      {/* <BlogAndUpdates /> */}
    </main>
  );
}

export default NewsPage;
