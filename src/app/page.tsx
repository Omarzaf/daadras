import Collaborators from "./home-components/collaborators";
// import Donate from "./home-components/donate";
import WhoWeAre from "./home-components/who-we-are";
import Top from "./home-components/top";
import FoundationFacts from "@/components/foundation-facts";
import DonationsSpend from "@/components/donations-spend";

export default function Home() {
  return (
    <>
      <Top />
      <WhoWeAre />
      <Collaborators />
      {/* <Donate /> */}
      <DonationsSpend />
      <FoundationFacts />
    </>
  );
}
