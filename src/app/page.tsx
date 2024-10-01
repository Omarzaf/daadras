import Facts from "./home-components/facts";
import SpendDonations from "./home-components/spend-donations";
import Collaborators from "./home-components/collaborators";
import Donate from "./home-components/donate";
import WhoWeAre from "./home-components/who-we-are";
import Top from "./home-components/top";

export default function Home() {
  return (
    <>
      <Top />
      <WhoWeAre />
      <Collaborators />
      <Donate />
      <SpendDonations />
      <Facts />
    </>
  );
}
