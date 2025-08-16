"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".elementor-invisible")
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.remove("elementor-invisible")
          element.classList.add("elementor-animation-fade-in-up")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on load
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const dropdownData = {
    Solutions: ["Creative & Branding", "Digital Marketing", "Technology Solutions", "Media Planning"],
    About: ["Our Story", "Leadership Team", "Culture & Values", "Awards"],
    Resources: ["Case Studies", "Blog", "Whitepapers", "Reports"],
  }

  return (
    <div className="elementor-page">
      <header className="schbang-header sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="schbang-logo">
              <span className="text-xl font-bold text-black">Schbang</span>
              <span className="text-sm text-gray-600">.Talent Management</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <a href="#work" className="nav-link text-gray-700 hover:text-black transition-colors">
                  Work
                </a>

                {Object.entries(dropdownData).map(([key, items]) => (
                  <div
                    key={key}
                    className="relative nav-dropdown-container"
                    onMouseEnter={() => setActiveDropdown(key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="nav-link text-gray-700 hover:text-black transition-colors flex items-center">
                      {key}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform ${activeDropdown === key ? "rotate-180" : ""}`}
                      />
                    </button>

                    {activeDropdown === key && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                        {items.map((item, index) => (
                          <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <a href="#careers" className="nav-link text-gray-700 hover:text-black transition-colors">
                  Careers
                </a>
              </nav>

              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full flex items-center">
                Contact Us
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-4">
              <nav className="space-y-2">
                <a
                  href="#work"
                  className="block py-2 text-gray-700 hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Work
                </a>

                {Object.entries(dropdownData).map(([key, items]) => (
                  <div key={key} className="space-y-1">
                    <div className="block py-2 text-gray-700 font-medium">{key}</div>
                    <div className="pl-4 space-y-1">
                      {items.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block py-1 text-sm text-gray-600 hover:text-black transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                <a
                  href="#careers"
                  className="block py-2 text-gray-700 hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </a>
              </nav>

              <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-full">
                Contact Us
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="elementor-main-content">
        <section className="elementor-section elementor-hero-section">
          <div className="elementor-container">
            <div className="elementor-row">
              <div className="elementor-column elementor-col-100">
                <div className="elementor-widget elementor-widget-heading elementor-invisible">
                  <h1 className="elementor-heading-title text-2xl md:text-4xl lg:text-5xl">
                    Your Creative, Media & Technology Transformation Partner
                  </h1>
                </div>

                <div className="elementor-widget elementor-widget-text-editor elementor-invisible">
                  <p className="elementor-text-content text-sm md:text-base lg:text-lg">
                    We're a team of 1000+ Specialists delivering award-winning work for 300+ brands worldwide. 8 years
                    and counting!
                  </p>
                </div>

                <div className="elementor-widget elementor-widget-image elementor-invisible">
                  <div className="elementor-geometric-pattern scale-75 md:scale-100">
                    <div className="elementor-shape elementor-shape-1 elementor-animation-float-1"></div>
                    <div className="elementor-shape elementor-shape-2 elementor-animation-float-2"></div>
                    <div className="elementor-shape elementor-shape-3 elementor-animation-float-3"></div>
                    <div className="elementor-shape elementor-shape-4 elementor-animation-float-4"></div>
                    <div className="elementor-shape elementor-shape-5 elementor-animation-float-5"></div>
                    <div className="elementor-shape elementor-shape-6 elementor-animation-float-6"></div>
                    <div className="elementor-shape elementor-shape-7 elementor-animation-float-7"></div>

                    <div className="elementor-text-overlay elementor-text-1 elementor-animation-glow">celebrate</div>
                    <div className="elementor-text-overlay elementor-text-2 elementor-animation-pulse">PRIDE</div>
                    <div className="elementor-text-overlay elementor-text-3 elementor-animation-bounce">24</div>
                    <div className="elementor-text-overlay elementor-text-4 elementor-animation-glow">04 august</div>
                    <div className="elementor-text-overlay elementor-text-5 elementor-animation-pulse">PRIDE</div>
                    <div className="elementor-text-overlay elementor-text-6 elementor-animation-glow">msterd</div>
                    <div className="elementor-text-overlay elementor-text-7 elementor-animation-bounce">july</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-widget elementor-widget-text-marquee">
            <div className="elementor-scrolling-banner">
              <div className="elementor-scrolling-text text-sm md:text-base lg:text-lg">
                IT'S TIME TO CREATE A SCHBANG • IT'S TIME TO CREATE A SCHBANG • IT'S TIME TO CREATE A SCHBANG • IT'S
                TIME TO CREATE A SCHBANG •
              </div>
            </div>
          </div>
        </section>

        <section className="elementor-section elementor-about-section">
          <div className="elementor-container">
            <div className="elementor-row">
              <div className="elementor-column elementor-col-100">
                <div className="elementor-widget elementor-widget-heading elementor-invisible">
                  <h2 className="elementor-heading-title text-xl md:text-2xl lg:text-3xl">What defines us</h2>
                </div>

                <div className="elementor-widget elementor-widget-text-editor elementor-invisible">
                  <p className="elementor-text-content text-sm md:text-base">
                    We're not just another agency. We're transformation partners who blend creativity, technology, and
                    strategic thinking.
                  </p>
                </div>
              </div>
            </div>

            <div className="elementor-row">
              {[
                {
                  icon: "🎨",
                  title: "Creative Excellence",
                  desc: "Award-winning creative team that pushes boundaries to deliver impactful campaigns.",
                },
                {
                  icon: "⚡",
                  title: "Technology Innovation",
                  desc: "Cutting-edge technology and data-driven insights for innovative solutions.",
                },
                {
                  icon: "🚀",
                  title: "Strategic Partnership",
                  desc: "We partner with you to develop strategies that align with your business goals.",
                },
              ].map((item, index) => (
                <div key={index} className="elementor-column elementor-col-100 md:elementor-col-33">
                  <div className="elementor-widget elementor-widget-icon-box elementor-invisible">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <span className="elementor-icon">{item.icon}</span>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title text-lg md:text-xl">{item.title}</h3>
                        <p className="elementor-icon-box-description text-sm md:text-base">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="elementor-row">
              <div className="elementor-column elementor-col-100">
                <div className="elementor-widget elementor-widget-button elementor-invisible">
                  <Button className="elementor-button elementor-button-secondary">
                    Dive into Our Culture <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="elementor-section elementor-work-section">
          <div className="elementor-container">
            <div className="elementor-row">
              <div className="elementor-column elementor-col-100">
                <div className="elementor-widget elementor-widget-heading elementor-invisible">
                  <h2 className="elementor-heading-title text-xl md:text-2xl lg:text-3xl">Featured Work</h2>
                </div>

                <div className="elementor-widget elementor-widget-text-editor elementor-invisible">
                  <p className="elementor-text-content text-sm md:text-base">
                    Discover how we've helped brands transform their digital presence and achieve remarkable results.
                  </p>
                </div>
              </div>
            </div>

            <div className="elementor-row">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="elementor-column elementor-col-100 md:elementor-col-50 lg:elementor-col-33">
                  <div className="elementor-widget elementor-widget-image-box elementor-invisible">
                    <div className="elementor-image-box-wrapper">
                      <div className="elementor-image-box-img">
                        <img
                          src={`/colorful-creative-project.png?height=300&width=400&query=colorful creative project ${item}`}
                          alt={`Project ${item}`}
                          className="elementor-image"
                        />
                        <div className="elementor-image-overlay">
                          <Button className="elementor-overlay-button">
                            View Project <ArrowRight className="ml-2" size={16} />
                          </Button>
                        </div>
                      </div>
                      <div className="elementor-image-box-content">
                        <h3 className="elementor-image-box-title text-base md:text-lg">Creative Project {item}</h3>
                        <p className="elementor-image-box-description text-sm md:text-base">
                          Brand transformation campaign with innovative digital solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="elementor-section elementor-footer-section">
          <div className="elementor-container">
            <div className="elementor-row">
              <div className="elementor-column elementor-col-100 md:elementor-col-50 lg:elementor-col-25">
                <div className="elementor-widget elementor-widget-heading">
                  <h3 className="elementor-heading-title">Schbang</h3>
                </div>
                <div className="elementor-widget elementor-widget-text-editor">
                  <p className="elementor-text-content">Your Creative, Media & Technology Transformation Partner</p>
                </div>
                <div className="elementor-widget elementor-widget-button">
                  <Button className="elementor-button elementor-button-light">
                    Contact Us <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>

              <div className="elementor-column elementor-col-100 md:elementor-col-50 lg:elementor-col-25">
                <div className="elementor-widget elementor-widget-nav-menu">
                  <h4 className="elementor-widget-title">Services</h4>
                  <ul className="elementor-nav-menu-list">
                    <li>
                      <a href="#" className="elementor-nav-link">
                        Creative & Branding
                      </a>
                    </li>
                    <li>
                      <a href="#" className="elementor-nav-link">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="elementor-nav-link">
                        Technology Solutions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="elementor-nav-link">
                        Media Planning
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="elementor-column elementor-col-100 md:elementor-col-50 lg:elementor-col-25">
                <div className="elementor-widget elementor-widget-nav-menu">
                  <h4 className="elementor-widget-title">Company</h4>
                  <ul className="elementor-nav-menu-list">
                    <li>
                      <a href="#" className="elementor-nav-link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="elementor-nav-link">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="elementor-nav-link">
                        Culture
                      </a>
                    </li>
                    <li>
                      <a href="#" className="elementor-nav-link">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="elementor-column elementor-col-100 md:elementor-col-50 lg:elementor-col-25">
                <div className="elementor-widget elementor-widget-text-editor">
                  <h4 className="elementor-widget-title">Contact</h4>
                  <div className="elementor-contact-info">
                    <p>Mumbai, India</p>
                    <p>hello@schbang.com</p>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-row elementor-footer-bottom">
              <div className="elementor-column elementor-col-100 md:elementor-col-50">
                <div className="elementor-widget elementor-widget-text-editor">
                  <p className="elementor-copyright">© 2024 Schbang. All rights reserved.</p>
                </div>
              </div>
              <div className="elementor-column elementor-col-100 md:elementor-col-50">
                <div className="elementor-widget elementor-widget-nav-menu">
                  <ul className="elementor-footer-links">
                    <li>
                      <a href="#" className="elementor-nav-link">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="elementor-nav-link">
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
