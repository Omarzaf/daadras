import { Button } from "@/components/ui/button"

export function ReportsCTA() {
  return (
    <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-left">Stay Updated with Our Latest Reports</h2>
      <p className="text-lg text-muted-foreground mb-6 max-w-3xl text-left">
        Subscribe to our newsletter to receive notifications when new reports and publications are available.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
        <Button className="bg-primary hover:bg-accent text-white">Subscribe</Button>
      </div>
    </div>
  )
}
