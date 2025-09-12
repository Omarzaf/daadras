"use client"

import { WaysToGiveHero } from "@/components/ways-to-give/WaysToGiveHero"
import { GivingMethodsSection } from "@/components/ways-to-give/GivingMethodsSection"
import { BankTransfersSection } from "@/components/ways-to-give/BankTransfersSection"
import { DonationFAQsSection } from "@/components/ways-to-give/DonationFAQsSection"

export default function WaysToGivePage() {
  return (
    <div className="bg-background">
      <WaysToGiveHero />
      <GivingMethodsSection />
      <BankTransfersSection />
      <DonationFAQsSection />
    </div>
  )
}
