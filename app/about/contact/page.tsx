import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"
import { ContactHeroImage } from "@/components/contact/ContactHeroImage"

export default function ContactPage() {
  return (
    <>
      <ContactHeroImage />
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
        <div className="mb-12">
          <h1 className="font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]" style={{fontSize: 'var(--text-5xl)'}}>
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Get in touch with us to learn more about our programs, volunteer opportunities, or partnership
            possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </>
  )
}
