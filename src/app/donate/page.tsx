import React from "react";
import DonationsSpend from "../../components/donations-spend";
import Donation from "./components/donate";

function Donate() {
  return (
    <main>
      <Donation />
      <DonationsSpend />
    </main>
  );
}

export default Donate;
