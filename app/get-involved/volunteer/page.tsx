import { VolunteersHeader } from "@/components/volunteers/VolunteersHeader"
import { VolunteersGrid } from "@/components/volunteers/VolunteersGrid"

export default function VolunteerPage() {
  return (
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
      <VolunteersHeader />
      <VolunteersGrid />
    </div>
  )
}
