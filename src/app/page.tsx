import Collaborators from "../components/PageComponents/Home/collaborators";
import WhoWeAre from "../components/PageComponents/Home/who-we-are";
import Top from "../components/PageComponents/Home/top";
import FoundationFacts from "../components/PageComponents/Home/foundationFacts";
import Documentary from "../components/PageComponents/Home/documentary";
// import FeaturedNews from "../components/PageComponents/Home/FeaturedNews";
import "./globals.css"; // Adjust the path if your CSS file is located elsewhere

export default function Home() {
  return (
    <main>
      <Top />
      <Documentary />
      <WhoWeAre />
      <Collaborators />
      <FoundationFacts />
      {/* <FeaturedNews /> */}
      {/* <Donate /> */}
    </main>
  );
}
