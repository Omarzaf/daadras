"use client"

import { Button } from "@/components/ui/button"

type Props = {
  departments: string[]
  selected: string
  onSelect: (dept: string) => void
}

export function DepartmentFilter({ departments, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap justify-start gap-2 mb-16">
      {departments.map((dept) => (
        <Button
          key={dept}
          variant={selected === dept ? "default" : "outline"}
          size="sm"
          className="hover:bg-accent hover:text-accent-foreground transition-colors"
          onClick={() => onSelect(dept)}
        >
          {dept}
        </Button>
      ))}
    </div>
  )
}
