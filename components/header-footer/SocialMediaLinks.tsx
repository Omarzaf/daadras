import Link from "next/link";
import { SOCIAL_MEDIA_LINKS } from "@/lib/socialMedia";

//Made a reusable component here for social media links
export function SocialLinks({ waysToGive = false }: { waysToGive?: boolean }) {
  const parentClassname = waysToGive
    ? "flex space-x-4 mb-4 ml-4"
    : "flex space-x-4";
  return (
    <div className={parentClassname}>
      <Link
        href={SOCIAL_MEDIA_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-primary hover:text-accent transition-colors duration-200 ease-out"
      >
        <i className="fa-brands fa-linkedin-in h-5 w-5"></i>
      </Link>
      <Link
        href={SOCIAL_MEDIA_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-primary hover:text-accent transition-colors"
      >
        <i className="fa-brands fa-instagram h-5 w-5"></i>
      </Link>
    </div>
  );
}
