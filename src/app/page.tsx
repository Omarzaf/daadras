import Collaborators from "./home-components/collaborators";
import WhoWeAre from "./home-components/who-we-are";
import Top from "./home-components/top";
import FoundationFacts from "../components/foundation-facts";
import './globals.css'; // Adjust the path if your CSS file is located elsewhere
import Documentary from "./home-components/documentary";

export default function Home() {
  return (
    <>
      <Top />
      <Documentary />
      <WhoWeAre />
      <Collaborators />
      {/* <Donate /> */}
      <FoundationFacts />
    </>
  );
}
