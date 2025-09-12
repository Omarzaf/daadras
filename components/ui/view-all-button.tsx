import Link from "next/link"

interface ViewAllButtonProps {
  href: string
  children?: React.ReactNode
  className?: string
}

export function ViewAllButton({ href, children = "View All", className = "" }: ViewAllButtonProps) {
  return (
    <div className={`text-right mt-10 pl-4 sm:pl-6 lg:pl-8 ${className}`}>
      <Link href={href}>
        <button className="group inline-flex items-center text-sm font-medium text-foreground transition-colors relative">
           <span className="relative">
             {children}
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
           </span>
         </button>
      </Link>
    </div>
  )
}
