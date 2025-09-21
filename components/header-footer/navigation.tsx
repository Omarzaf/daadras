"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { SocialLinks } from "./SocialMediaLinks";

type TSection = "about" | "news" | "initiatives" | "involved" | "ways-to-give";

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<TSection | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Helper function to determine if a navigation item is active
  const isActiveSection = (section: TSection) => {
    switch (section) {
      case "about":
        return pathname.startsWith("/about");
      case "news":
        return pathname.startsWith("/news-resources");
      case "initiatives":
        return pathname.startsWith("/initiatives");
      case "involved":
        return pathname.startsWith("/get-involved");
      case "ways-to-give":
        return pathname === "/ways-to-give";
      default:
        return false;
    }
  };

  const handleMouseEnter = (dropdown: TSection) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (!keyboardFocus) {
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    if (!keyboardFocus) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 50); // Further reduced timeout for immediate response
    }
  };

  const handleFocus = (dropdown: TSection) => {
    setKeyboardFocus(true);
    setActiveDropdown(dropdown);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setKeyboardFocus(false);
      setActiveDropdown(null);
    }, 50); // Further reduced timeout for immediate response
  };

  const handleDropdownClick = (dropdown: TSection) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    // Prevent event bubbling to avoid conflicts
    e.stopPropagation();
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    
    // Ensure navigation is immediately interactive
    // Force a re-render to ensure all event handlers are properly attached
    const ensureInteractivity = () => {
      // This ensures the component is fully hydrated and interactive
      if (typeof window !== 'undefined') {
        document.body.style.pointerEvents = 'auto';
      }
    };
    
    // Run immediately and after a short delay to ensure hydration is complete
    ensureInteractivity();
    const timeoutId = setTimeout(ensureInteractivity, 0);
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav className="shadow-[0_3px_3px_-1px_rgba(17,30,71,0.15)] bg-[#FFFFFF] sticky top-0 z-50" style={{ pointerEvents: 'auto' }}>
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex justify-between items-center h-[100px]">
          <div className="flex items-center">
            <Link href="/">
              <div className="w-fit h-[49px] flex items-center gap-3 mr-5">
                <Image
                  src="/green_logo.svg"
                  alt="Daadras Logo"
                  width={24}
                  height={24}
                  priority
                />
                <h1 className="text-2xl font-bold text-primary font-space-grotesk">
                  Daadras
                </h1>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <div
              className="group relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center text-foreground hover:text-accent hover:bg-primary/10 px-4 md:px-8 h-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-out cursor-pointer ${
                  activeDropdown === "about" ? "bg-primary/10" : ""
                } ${isActiveSection("about") ? "font-bold" : ""}`}
                onFocus={() => handleFocus("about")}
                onBlur={handleBlur}
                aria-expanded={activeDropdown === "about"}
              >
                ABOUT US
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  activeDropdown === "about" ? "rotate-180" : ""
                }`} />
              </button>
              <div
                className={`fixed left-0 top-[100px] w-full transform transition-all duration-150 ease-out z-50 ${
                  activeDropdown === "about"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-x-0 h-px bg-primary/20 w-full"></div>
                <div
                  className="bg-white shadow-md w-full pt-6 md:pt-8 pb-10 md:pb-12 px-6 md:px-8"
                  style={{ backgroundColor: "#ffffff !important" }}
                >
                  <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-14">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col">
                        <p
                          className="text-sm mb-4"
                          style={{ color: "#374151 !important" }}
                        >
                          Learn about our mission, vision, and the dedicated
                          team working to create positive change in communities
                          worldwide.
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Link
                          href="/about/our-story"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Our Story
                        </Link>
                        <Link
                          href="/our-team"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Our Team
                        </Link>
                        <Link
                          href="/about/contact"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Contact Us
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="aspect-[16/9] bg-gray-100 mb-2 overflow-hidden rounded-md relative">
                          <Image
                            src="/drive/community_build.jpg"
                            alt="Our team working together for change"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <p
                          className="text-xs"
                          style={{ color: "#6b7280 !important" }}
                        >
                          Our team working together for change
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start mt-6">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="group relative"
              onMouseEnter={() => handleMouseEnter("news")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center text-foreground hover:text-accent hover:bg-primary/10 px-4 md:px-8 h-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-out cursor-pointer ${
                  activeDropdown === "news" ? "bg-primary/10" : ""
                } ${isActiveSection("news") ? "font-bold" : ""}`}
                onFocus={() => handleFocus("news")}
                onBlur={handleBlur}
                aria-expanded={activeDropdown === "news"}
              >
                NEWS & RESOURCES
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  activeDropdown === "news" ? "rotate-180" : ""
                }`} />
              </button>
              <div
                className={`fixed left-0 top-[100px] w-full transform transition-all duration-150 ease-out z-50 ${
                  activeDropdown === "news"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                onMouseEnter={() => handleMouseEnter("news")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-x-0 h-px bg-primary/20 w-full"></div>
                <div
                  className="bg-white shadow-md w-full pt-6 md:pt-8 pb-10 md:pb-12 px-6 md:px-8"
                  style={{ backgroundColor: "#ffffff !important" }}
                >
                  <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-14">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col">
                        <p
                          className="text-sm mb-4"
                          style={{ color: "#374151 !important" }}
                        >
                          Stay updated with our latest news, events, and
                          publications. Discover how we're making an impact in
                          communities.
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Link
                          href="/news-resources/news"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Latest News
                        </Link>
                        <Link
                          href="/news-resources/reports"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Reports
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="aspect-[16/9] bg-gray-100 mb-2 overflow-hidden rounded-md relative">
                          <Image
                            src="/drive/kids_studying.jpg"
                            alt="Latest updates from our initiatives"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <p
                          className="text-xs"
                          style={{ color: "#6b7280 !important" }}
                        >
                          Latest updates from our initiatives
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start mt-6">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="group relative"
              onMouseEnter={() => handleMouseEnter("initiatives")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center text-foreground hover:text-accent hover:bg-primary/10 px-4 md:px-8 h-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-out cursor-pointer ${
                  activeDropdown === "initiatives" ? "bg-primary/10" : ""
                } ${isActiveSection("initiatives") ? "font-bold" : ""}`}
                onFocus={() => handleFocus("initiatives")}
                onBlur={handleBlur}
                aria-expanded={activeDropdown === "initiatives"}
              >
                OUR INITIATIVES
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  activeDropdown === "initiatives" ? "rotate-180" : ""
                }`} />
              </button>
              <div
                className={`fixed left-0 top-[100px] w-full transform transition-all duration-150 ease-out z-50 ${
                  activeDropdown === "initiatives"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                onMouseEnter={() => handleMouseEnter("initiatives")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-x-0 h-px bg-primary/20 w-full"></div>
                <div
                  className="bg-white shadow-md w-full pt-6 md:pt-8 pb-10 md:pb-12 px-6 md:px-8"
                  style={{ backgroundColor: "#ffffff !important" }}
                >
                  <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-14">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col">
                        <p
                          className="text-sm mb-4"
                          style={{ color: "#374151 !important" }}
                        >
                          Explore our key initiatives focused on education,
                          economic development, and humanitarian aid to create
                          sustainable change.
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Link
                          href="/initiatives/project-salam"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out font-medium"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Project Salam
                        </Link>
                        <div className="ml-6 space-y-1 border-l-2 border-primary/20 pl-4">
                          <Link
                            href="/initiatives/project-salam/strategic-gaming"
                            className="py-2 px-4 text-[13px] text-gray-600 hover:bg-primary/5 hover:text-primary flex items-center transition-all duration-200 ease-out rounded-md"
                            onClick={handleLinkClick}
                          >
                            Strategic Gaming
                          </Link>
                          <Link
                            href="/initiatives/project-salam/sel-program"
                            className="py-2 px-4 text-[13px] text-gray-600 hover:bg-primary/5 hover:text-primary flex items-center transition-all duration-200 ease-out rounded-md"
                            onClick={handleLinkClick}
                          >
                            Socio-Emotional Learning
                          </Link>
                          <Link
                            href="/initiatives/project-salam/it-program"
                            className="py-2 px-4 text-[13px] text-gray-600 hover:bg-primary/5 hover:text-primary flex items-center transition-all duration-200 ease-out rounded-md"
                            onClick={handleLinkClick}
                          >
                            Technology
                          </Link>
                        </div>
                        <Link
                          href="/initiatives/economic-upliftment"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Economic Upliftment
                        </Link>
                        <Link
                          href="/initiatives/emergency-relief"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Emergency Relief
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="aspect-[16/9] bg-gray-100 mb-2 overflow-hidden rounded-md relative">
                          <Image
                            src="/drive/help_charity_kids.webp"
                            alt="Supporting communities through our initiatives"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <p
                          className="text-xs"
                          style={{ color: "#6b7280 !important" }}
                        >
                          Supporting communities through our initiatives
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start mt-6">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="group relative"
              onMouseEnter={() => handleMouseEnter("involved")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center text-foreground hover:text-accent hover:bg-primary/10 px-4 md:px-8 h-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-out cursor-pointer ${
                  activeDropdown === "involved" ? "bg-primary/10" : ""
                } ${isActiveSection("involved") ? "font-bold" : ""}`}
                onFocus={() => handleFocus("involved")}
                onBlur={handleBlur}
                aria-expanded={activeDropdown === "involved"}
              >
                GET INVOLVED
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  activeDropdown === "involved" ? "rotate-180" : ""
                }`} />
              </button>
              <div
                className={`fixed left-0 top-[100px] w-full transform transition-all duration-150 ease-out z-50 ${
                  activeDropdown === "involved"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                onMouseEnter={() => handleMouseEnter("involved")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-x-0 h-px bg-primary/20 w-full"></div>
                <div
                  className="bg-white shadow-md w-full pt-6 md:pt-8 pb-10 md:pb-12 px-6 md:px-8"
                  style={{ backgroundColor: "#ffffff !important" }}
                >
                  <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-14">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col">
                        <p
                          className="text-sm mb-4"
                          style={{ color: "#374151 !important" }}
                        >
                          Join our mission to create positive change. Discover
                          how you can contribute your time, skills, or resources
                          to make a difference.
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Link
                          href="/get-involved/volunteer"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Volunteer
                        </Link>
                        <Link
                          href="/get-involved/career"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Careers
                        </Link>
                        <Link
                          href="/get-involved/partnership"
                          className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out"
                          style={{ color: "#374151 !important" }}
                          onClick={handleLinkClick}
                        >
                          Partner With Us
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="aspect-[16/9] bg-gray-100 mb-2 overflow-hidden rounded-md relative">
                          <Image
                            src="/drive/volunteer_wahab.webp"
                            alt="Volunteers making an impact in our community"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <p
                          className="text-xs"
                          style={{ color: "#6b7280 !important" }}
                        >
                          Volunteers making an impact in our community
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start mt-6">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/ways-to-give" className="h-full flex items-center">
              <Button
                className={`bg-[#0F443F] hover:opacity-90 text-white uppercase tracking-wide px-8 md:px-12 rounded-none h-[100px] transition-opacity duration-200 ease-out text-base ${
                  isActiveSection("ways-to-give") ? "font-bold" : ""
                }`}
              >
                Ways to Give
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary hover:bg-muted rounded-md transition-colors duration-200 ease-out cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[100px] bg-background border-t border-border z-50 overflow-y-auto">
            <div className="px-4 py-6 space-y-4 min-h-full">
              <div className="space-y-2">
                <button
                  onClick={() => handleDropdownClick("about")}
                  className={`flex items-center justify-between w-full text-primary hover:text-accent transition-colors duration-200 ease-out py-2 cursor-pointer ${
                    isActiveSection("about") ? "font-bold" : ""
                  }`}
                >
                  ABOUT US
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`} />
                </button>
                {activeDropdown === "about" && (
                  <div className="ml-4 space-y-2">
                    <p
                      className="text-sm mb-4"
                      style={{ color: "#374151 !important" }}
                    >
                      Learn about our mission, vision, and the dedicated team
                      working to create positive change in communities
                      worldwide.
                    </p>
                    <Link
                      href="/about/our-story"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Our Story
                    </Link>
                    <Link
                      href="/our-team"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/about/contact"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => handleDropdownClick("news")}
                  className={`flex items-center justify-between w-full text-primary hover:text-accent transition-colors duration-200 ease-out py-2 cursor-pointer ${
                    isActiveSection("news") ? "font-bold" : ""
                  }`}
                >
                  NEWS & RESOURCES
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "news" ? "rotate-180" : ""
                  }`} />
                </button>
                {activeDropdown === "news" && (
                  <div className="ml-4 space-y-2">
                    <p
                      className="text-sm mb-4"
                      style={{ color: "#374151 !important" }}
                    >
                      Stay updated with our latest news, events, and
                      publications. Discover how we're making an impact in
                      communities.
                    </p>
                    <Link
                      href="/news-resources/news"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Latest News
                    </Link>
                    <Link
                      href="/news-resources/reports"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Reports
                    </Link>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => handleDropdownClick("initiatives")}
                  className={`flex items-center justify-between w-full text-primary hover:text-accent transition-colors duration-200 ease-out py-2 cursor-pointer ${
                    isActiveSection("initiatives") ? "font-bold" : ""
                  }`}
                >
                  OUR INITIATIVES
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "initiatives" ? "rotate-180" : ""
                  }`} />
                </button>
                {activeDropdown === "initiatives" && (
                  <div className="ml-4 space-y-2">
                    <p
                      className="text-sm mb-4"
                      style={{ color: "#374151 !important" }}
                    >
                      Explore our key initiatives focused on education, economic
                      development, and humanitarian aid to create sustainable
                      change.
                    </p>

                    <Link
                      href="/initiatives/project-salam"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-2 font-medium"
                    >
                      Education - Project Salam
                    </Link>
                    <div className="ml-4 space-y-1 border-l-2 border-primary/20 pl-4">
                      <Link
                        href="/initiatives/project-salam/strategic-gaming"
                        onClick={handleLinkClick}
                        className="block text-xs text-slate-600 hover:text-primary transition-colors duration-200 ease-out py-1"
                      >
                        Strategic Chess Program
                      </Link>
                      <Link
                        href="/initiatives/project-salam/sel-program"
                        onClick={handleLinkClick}
                        className="block text-xs text-slate-600 hover:text-primary transition-colors duration-200 ease-out py-1"
                      >
                        S.E.L Emotional Resilience
                      </Link>
                      <Link
                        href="/initiatives/project-salam/it-program"
                        onClick={handleLinkClick}
                        className="block text-xs text-slate-600 hover:text-primary transition-colors duration-200 ease-out py-1"
                      >
                        I.T Future Innovators
                      </Link>
                    </div>
                    <Link
                      href="/initiatives/economic-upliftment"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-2"
                    >
                      Economic Upliftment
                    </Link>
                    <Link
                      href="/initiatives/emergency-relief"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-2"
                    >
                      Emergency Relief
                    </Link>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => handleDropdownClick("involved")}
                  className={`flex items-center justify-between w-full text-primary hover:text-accent transition-colors duration-200 ease-out py-2 cursor-pointer ${
                    isActiveSection("involved") ? "font-bold" : ""
                  }`}
                >
                  GET INVOLVED
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "involved" ? "rotate-180" : ""
                  }`} />
                </button>
                {activeDropdown === "involved" && (
                  <div className="ml-4 space-y-2">
                    <p
                      className="text-sm mb-4"
                      style={{ color: "#374151 !important" }}
                    >
                      Join our mission to create positive change. Discover how
                      you can contribute your time, skills, or resources to make
                      a difference.
                    </p>
                    <Link
                      href="/get-involved/volunteer"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Volunteer
                    </Link>
                    <Link
                      href="/get-involved/career"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/get-involved/partnership"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Partner With Us
                    </Link>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border">
                <SocialLinks waysToGive={true} />
                <div className="ml-4">
                  <Link
                    href="/ways-to-give"
                    onClick={handleLinkClick}
                    className="w-full block"
                  >
                    <Button
                      className={`bg-[#0F443F] hover:opacity-90 text-white uppercase tracking-wide px-8 md:px-12 rounded-none w-full py-3 transition-opacity duration-200 ease-out text-sm ${
                        isActiveSection("ways-to-give") ? "font-bold" : ""
                      }`}
                    >
                      Ways to Give
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
