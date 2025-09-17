import Link from "next/link";
import { DAADRAS_CONTACT } from "@/lib/contact_info";
import { SocialLinks } from "./SocialMediaLinks";
import { GetInvolved, Programs } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="shadow-[0_-3px_3px_-1px_rgba(17,30,71,0.15)] bg-[#FFFFFF] py-12">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid gap-4 md:grid-cols-2 md:gap-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/green_logo.svg"
                alt="Daadras Logo"
                className="h-8 w-8"
              />
              <h3 className="text-4xl font-bold text-primary">Daadras</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering communities through education, technology, and
              social-emotional learning.
            </p>
            <SocialLinks />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-primary">Programs</h4>
              <ul className="space-y-2 text-muted-foreground">
                {Programs.map((item, index) => (
                  <li key={`programs-list-${index}`}>
                    <Link
                      href={item.link}
                      className="hover:text-accent transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Get Involved</h4>
              <ul className="space-y-2 text-muted-foreground">
                {GetInvolved.map((item, index) => (
                  <li key={`getInvolved-list-${index}`}>
                    <Link
                      href={item.link}
                      className="hover:text-accent transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4 text-primary">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href={`mailto:${DAADRAS_CONTACT.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {DAADRAS_CONTACT.email}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:${DAADRAS_CONTACT.phone.replace(/[^+\d]/g, "")}`}
                    className="hover:text-accent transition-colors"
                  >
                    {DAADRAS_CONTACT.phone}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
