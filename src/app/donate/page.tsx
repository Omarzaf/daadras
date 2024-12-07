import React from "react";
import DonationsSpend from "@/components/donations-spend";
import Donation from "./components/donate";
import Logo from "./components/logo";

function Donate() {
  return (
    <>
      <Logo />
      <Donation />
      <DonationsSpend />
    </>
  );
}

export default Donate;
