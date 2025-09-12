import { CareersHeader } from "@/components/careers/CareersHeader"
import { CareersGrid } from "@/components/careers/CareersGrid"

export default function CareersPage() {
  return (
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
      <CareersHeader />
      <CareersGrid />
    </div>
  )
}
