import Link from "next/link"
import { DAADRAS_CONTACT } from "@/lib/contact_info"
import { SOCIAL_MEDIA_LINKS } from "@/lib/socialMedia"

export const Footer = () => {
  return (
    <footer className="shadow-[0_-3px_3px_-1px_rgba(17,30,71,0.15)] bg-[#FFFFFF] py-12">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
                 <img src="/green_logo.svg" alt="Daadras Logo" className="h-8 w-8" />
                 <h3 className="text-4xl font-bold text-primary">Daadras</h3>
               </div>
            <p className="text-muted-foreground mb-4">
              Empowering communities through education, technology, and social-emotional learning.
            </p>
            <div className="flex space-x-4">
              <Link
                href={SOCIAL_MEDIA_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in h-6 w-6"></i>
              </Link>
              <Link
                href={SOCIAL_MEDIA_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram h-6 w-6"></i>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Programs</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/initiatives/project-salam" className="hover:text-accent transition-colors">
                  Project Salam
                </Link>
              </li>
              <li>
                <Link href="/get-involved/partnership" className="hover:text-accent transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved/volunteer" className="hover:text-accent transition-colors">
                  Volunteer with Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved/career" className="hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Get Involved</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/get-involved/volunteer" className="hover:text-accent transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/ways-to-give" className="hover:text-accent transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/get-involved/partnership" className="hover:text-accent transition-colors">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="/get-involved/partnership" className="hover:text-accent transition-colors">
                  Sponsor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href={`mailto:${DAADRAS_CONTACT.email}`} className="hover:text-accent transition-colors">
                  {DAADRAS_CONTACT.email}
                </Link>
              </li>
              <li>
                <Link href={`tel:${DAADRAS_CONTACT.phone.replace(/[^+\d]/g, "")}`} className="hover:text-accent transition-colors">
                  {DAADRAS_CONTACT.phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 text-left text-muted-foreground">
          <p>&copy; 2025 Daadras NGO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
