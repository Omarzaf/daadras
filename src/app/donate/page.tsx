import React from "react";
import DonationsSpend from "../../components/donations-spend";
import Donation from "./components/donate";
import Logo from "./components/logo";

function Donate() {
  return (
    <main>
      <Donation />
      <DonationsSpend />
    </main>
  );
}

export default Donate;
