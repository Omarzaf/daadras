import Collaborators from "../components/PageComponents/Home/collaborators";
import WhoWeAre from "../components/PageComponents/Home/who-we-are";
import Top from "../components/PageComponents/Home/top";
import FoundationFacts from "../components/PageComponents/Home/foundationFacts";
import "./globals.css"; // Adjust the path if your CSS file is located elsewhere
// import Documentary from "./home-components/documentary";

export default function Home() {
  return (
    <main>
      <Top />
      {/* <Documentary /> */}
      <WhoWeAre />
      <Collaborators />
      {/* <Donate /> */}
      <FoundationFacts />w
    </main>
  );
}
