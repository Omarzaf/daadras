"use client"

import { 
  PartnershipHero, 
  PartnershipTypesSection, 
  CurrentPartnersSection, 
  PartnershipProcessSection, 
  PartnershipContactSection 
} from "@/components/partnership"

export default function PartnershipsPage() {
  return (
    <div className="bg-background">
      <PartnershipHero />
      <PartnershipTypesSection />
      <CurrentPartnersSection />
      <PartnershipProcessSection />
      <PartnershipContactSection />
    </div>
  )
}