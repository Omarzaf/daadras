"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [keyboardFocus, setKeyboardFocus] = useState(false)
  const [projectSalamOpen, setProjectSalamOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (!keyboardFocus) {
      setActiveDropdown(dropdown)
    }
  }

  const handleMouseLeave = () => {
    if (!keyboardFocus) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null)
      }, 150)
    }
  }

  const handleFocus = (dropdown: string) => {
    setKeyboardFocus(true)
    setActiveDropdown(dropdown)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setKeyboardFocus(false)
      setActiveDropdown(null)
    }, 150)
  }

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleLinkClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveDropdown(null)
    setMobileMenuOpen(false)
    setProjectSalamOpen(false)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
        setProjectSalamOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="shadow-[0_3px_3px_-1px_rgba(17,30,71,0.15)] bg-[#FFFFFF] sticky top-0 z-50">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex justify-between items-center h-[100px]">
          <div className="flex items-center">
            <Link href="/">
              <div className="w-[205px] h-[49px] flex items-center gap-3">
                <img src="/green_logo.svg" alt="Daadras Logo" className="h-6 w-6" />
                <h1 className="text-2xl font-bold text-primary font-space-grotesk">Daadras</h1>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div
              className="group relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center text-foreground hover:text-accent hover:bg-primary/10 px-4 md:px-6 h-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-out cursor-pointer ${activeDropdown === "about" ? "bg-primary/10" : ""}`}
                onFocus={() => handleFocus("about")}
                onBlur={handleBlur}
                aria-expanded={activeDropdown === "about"}
              >
                ABOUT US
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ease-out ${activeDropdown === "about" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`fixed left-0 top-[100px] w-full transform transition-all duration-150 ease-out z-50 ${activeDropdown === "about" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}`}
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
                        <p className="text-sm mb-4" style={{ color: "#374151 !important" }}>
                          Learn about our mission, vision, and the dedicated team working to create positive change in
                          communities worldwide.
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
                          href="/about/our-team"
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
                        <div className="aspect-[16/9] bg-gray-100 mb-2">
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ color: "#6b7280 !important" }}
                          >
                            Image Placeholder
                          </div>
                        </div>
                        <p className="text-xs" style={{ color: "#6b7280 !important" }}>
                          Our team working together for change
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start mt-6">
                      <div className="flex space-x-4">
                        <Link
                          href="https://www.linkedin.com/in/daadras-ngo-25962826b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-primary hover:text-accent transition-colors duration-200 ease-out"
                        >
                          <i className="fa-brands fa-linkedin-in h-5 w-5"></i>
                        </Link>
                        <Link
                          href="https://www.instagram.com/daadrasfoundation/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-primary hover:text-accent transition-colors"
                        >
                          <i className="fa-brands fa-instagram h-5 w-5"></i>
                        </Link>
                      </div>
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
                className={`flex items-center text-foreground hover:text-accent hover:bg-primary/10 px-4 md:px-6 h-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-out cursor-pointer ${activeDropdown === "news" ? "bg-primary/10" : ""}`}
                onFocus={() => handleFocus("news")}
                onBlur={handleBlur}
                aria-expanded={activeDropdown === "news"}
              >
                NEWS & RESOURCES
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ease-out ${activeDropdown === "news" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`fixed left-0 top-[100px] w-full transform transition-all duration-150 ease-out z-50 ${activeDropdown === "news" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}`}
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
                        <p className="text-sm mb-4" style={{ color: "#374151 !important" }}>
                          Stay updated with our latest news, events, and publications. Discover how we're making an
                          impact in communities.
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
                        <div className="aspect-[16/9] bg-gray-100 mb-2">
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ color: "#6b7280 !important" }}
                          >
                            Image Placeholder
                          </div>
                        </div>
                        <p className="text-xs" style={{ color: "#6b7280 !important" }}>
                          Latest updates from our initiatives
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start mt-6">
                      <div className="flex space-x-4">
                        <Link
                          href="https://www.linkedin.com/in/daadras-ngo-25962826b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-primary hover:text-accent transition-colors duration-200 ease-out"
                        >
                          <i className="fa-brands fa-linkedin-in h-5 w-5"></i>
                        </Link>
                        <Link
                          href="https://www.instagram.com/daadrasfoundation/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-primary hover:text-accent transition-colors"
                        >
                          <i className="fa-brands fa-instagram h-5 w-5"></i>
                        </Link>
                      </div>
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
                className={`flex items-center text-foreground hover:text-accent hover:bg-primary/10 px-4 md:px-6 h-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-out cursor-pointer ${activeDropdown === "initiatives" ? "bg-primary/10" : ""}`}
                onFocus={() => handleFocus("initiatives")}
                onBlur={handleBlur}
                aria-expanded={activeDropdown === "initiatives"}
              >
                OUR INITIATIVES
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ease-out ${activeDropdown === "initiatives" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`fixed left-0 top-[100px] w-full transform transition-all duration-150 ease-out z-50 ${activeDropdown === "initiatives" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}`}
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
                        <p className="text-sm mb-4" style={{ color: "#374151 !important" }}>
                          Explore our key initiatives focused on education, economic development, and humanitarian aid
                          to create sustainable change.
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="group/project-salam">
                          <Link
                            href="/initiatives/project-salam"
                            className="py-3 px-6 text-[14px] hover:bg-primary/10 hover:text-primary flex items-center justify-between border-l-0 hover:border-l-[3px] hover:border-primary transition-all duration-200 ease-out group-hover/project-salam:bg-primary/10 group-hover/project-salam:text-primary group-hover/project-salam:border-l-[3px] group-hover/project-salam:border-primary"
                            style={{ color: "#374151 !important" }}
                            onClick={handleLinkClick}
                          >
                            <span>Education - Project Salam</span>
                            <ChevronDown className="h-3 w-3 ml-2 transition-transform duration-200 group-hover/project-salam:rotate-180" />
                          </Link>
                          <div className="max-h-0 overflow-hidden group-hover/project-salam:max-h-96 transition-all duration-300 ease-out">
                            <Link
                              href="/initiatives/project-salam/strategic-gaming"
                              className="py-2 px-12 text-[13px] text-gray-600 hover:bg-primary/5 hover:text-primary flex items-center transition-all duration-200 ease-out"
                              onClick={handleLinkClick}
                            >
                              Strategic Chess Program
                            </Link>
                            <Link
                              href="/initiatives/project-salam/sel-program"
                              className="py-2 px-12 text-[13px] text-gray-600 hover:bg-primary/5 hover:text-primary flex items-center transition-all duration-200 ease-out"
                              onClick={handleLinkClick}
                            >
                              S.E.L Emotional Resilience
                            </Link>
                            <Link
                              href="/initiatives/project-salam/it-program"
                              className="py-2 px-12 text-[13px] text-gray-600 hover:bg-primary/5 hover:text-primary flex items-center transition-all duration-200 ease-out"
                              onClick={handleLinkClick}
                            >
                              I.T Future Innovators
                            </Link>
                          </div>
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
                        <div className="aspect-[16/9] bg-gray-100 mb-2">
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ color: "#6b7280 !important" }}
                          >
                            Image Placeholder
                          </div>
                        </div>
                        <p className="text-xs" style={{ color: "#6b7280 !important" }}>
                          Supporting communities through our initiatives
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start mt-6">
                      <div className="flex space-x-4">
                        <Link
                          href="https://www.linkedin.com/in/daadras-ngo-25962826b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-primary hover:text-accent transition-colors duration-200 ease-out"
                        >
                          <i className="fa-brands fa-linkedin-in h-5 w-5"></i>
                        </Link>
                        <Link
                          href="https://www.instagram.com/daadrasfoundation/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-primary hover:text-accent transition-colors"
                        >
                          <i className="fa-brands fa-instagram h-5 w-5"></i>
                        </Link>
                      </div>
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
                className={`flex items-center text-foreground hover:text-accent hover:bg-primary/10 px-4 md:px-6 h-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-out cursor-pointer ${activeDropdown === "involved" ? "bg-primary/10" : ""}`}
                onFocus={() => handleFocus("involved")}
                onBlur={handleBlur}
                aria-expanded={activeDropdown === "involved"}
              >
                GET INVOLVED
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ease-out ${activeDropdown === "involved" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`fixed left-0 top-[100px] w-full transform transition-all duration-150 ease-out z-50 ${activeDropdown === "involved" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}`}
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
                        <p className="text-sm mb-4" style={{ color: "#374151 !important" }}>
                          Join our mission to create positive change. Discover how you can contribute your time, skills,
                          or resources to make a difference.
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
                        <div className="aspect-[16/9] bg-gray-100 mb-2">
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ color: "#6b7280 !important" }}
                          >
                            Image Placeholder
                          </div>
                        </div>
                        <p className="text-xs" style={{ color: "#6b7280 !important" }}>
                          Volunteers making an impact in our community
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start mt-6">
                      <div className="flex space-x-4">
                        <Link
                          href="https://www.linkedin.com/in/daadras-ngo-25962826b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-primary hover:text-accent transition-colors duration-200 ease-out"
                        >
                          <i className="fa-brands fa-linkedin-in h-5 w-5"></i>
                        </Link>
                        <Link
                          href="https://www.instagram.com/daadrasfoundation/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-primary hover:text-accent transition-colors"
                        >
                          <i className="fa-brands fa-instagram h-5 w-5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/ways-to-give" className="h-full flex items-center">
              <Button className="bg-[#0F443F] hover:opacity-90 text-white uppercase tracking-wide px-8 md:px-12 rounded-none h-[100px] transition-opacity duration-200 ease-out text-base">
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
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[100px] bg-background border-t border-border z-50 overflow-y-auto">
            <div className="px-4 py-6 space-y-4 min-h-full">
              <div className="space-y-2">
                <button
                  onClick={() => handleDropdownClick("about")}
                  className="flex items-center justify-between w-full text-primary hover:text-accent transition-colors duration-200 ease-out py-2 cursor-pointer"
                >
                  ABOUT US
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ease-out ${activeDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="ml-4 space-y-2">
                    <p className="text-sm mb-4" style={{ color: "#374151 !important" }}>
                      Learn about our mission, vision, and the dedicated team working to create positive change in
                      communities worldwide.
                    </p>
                    <Link
                      href="/about/our-story"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Our Story
                    </Link>
                    <Link
                      href="/about/our-team"
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
                  className="flex items-center justify-between w-full text-primary hover:text-accent transition-colors duration-200 ease-out py-2 cursor-pointer"
                >
                  NEWS & RESOURCES
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ease-out ${activeDropdown === "news" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "news" && (
                  <div className="ml-4 space-y-2">
                    <p className="text-sm mb-4" style={{ color: "#374151 !important" }}>
                      Stay updated with our latest news, events, and publications. Discover how we're making an impact
                      in communities.
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
                  className="flex items-center justify-between w-full text-primary hover:text-accent transition-colors duration-200 ease-out py-2 cursor-pointer"
                >
                  OUR INITIATIVES
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ease-out ${activeDropdown === "initiatives" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "initiatives" && (
                  <div className="ml-4 space-y-2">
                    <p className="text-sm mb-4" style={{ color: "#374151 !important" }}>
                      Explore our key initiatives focused on education, economic development, and humanitarian aid to
                      create sustainable change.
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          href="/initiatives/project-salam"
                          onClick={handleLinkClick}
                          className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1 flex-1"
                        >
                          Education - Project Salam
                        </Link>
                        <button
                          onClick={() => setProjectSalamOpen(!projectSalamOpen)}
                          className="p-1 text-slate-700 hover:text-primary transition-colors"
                        >
                          <ChevronDown
                            className={`h-3 w-3 transition-transform duration-200 ${projectSalamOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      {projectSalamOpen && (
                        <div className="ml-4 space-y-1">
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
                      )}
                    </div>
                    <Link
                      href="/initiatives/economic-upliftment"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Economic Upliftment
                    </Link>
                    <Link
                      href="/initiatives/emergency-relief"
                      onClick={handleLinkClick}
                      className="block text-sm text-slate-700 hover:text-primary transition-colors duration-200 ease-out py-1"
                    >
                      Emergency Relief
                    </Link>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => handleDropdownClick("involved")}
                  className="flex items-center justify-between w-full text-primary hover:text-accent transition-colors duration-200 ease-out py-2 cursor-pointer"
                >
                  GET INVOLVED
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ease-out ${activeDropdown === "involved" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "involved" && (
                  <div className="ml-4 space-y-2">
                    <p className="text-sm mb-4" style={{ color: "#374151 !important" }}>
                      Join our mission to create positive change. Discover how you can contribute your time, skills, or
                      resources to make a difference.
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
                <div className="flex space-x-4 mb-4 ml-4">
                  <Link
                    href="https://www.linkedin.com/in/daadras-ngo-25962826b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-primary hover:text-accent transition-colors"
                  >
                    <i className="fa-brands fa-linkedin-in h-5 w-5"></i>
                  </Link>
                  <Link
                    href="https://www.instagram.com/daadrasfoundation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-primary hover:text-accent transition-colors"
                  >
                    <i className="fa-brands fa-instagram h-5 w-5"></i>
                  </Link>
                </div>
                <div className="ml-4">
                  <Link href="/ways-to-give" onClick={handleLinkClick} className="w-full block">
                    <Button className="bg-[#0F443F] hover:opacity-90 text-white uppercase tracking-wide px-8 md:px-12 rounded-none w-full py-3 transition-opacity duration-200 ease-out text-sm">
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
  )
}
