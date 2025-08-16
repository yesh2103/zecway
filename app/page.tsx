"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

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
      <section className="elementor-section elementor-header-section">
        <div className="elementor-container">
          <div className="elementor-row">
            <div className="elementor-column elementor-col-50 elementor-logo-column">
              <div className="elementor-widget elementor-widget-heading">
                <div className="elementor-logo elementor-animation-slide-left">
                  <span className="elementor-logo-text">Schbang</span>
                  <span className="elementor-logo-suffix">.Production</span>
                </div>
              </div>
            </div>

            <div className="elementor-column elementor-col-50 elementor-nav-column">
              <div className="elementor-widget elementor-widget-nav-menu">
                <nav className="elementor-nav-menu elementor-animation-slide-right">
                  <div className="elementor-nav-wrapper">
                    <ul className="elementor-nav-menu-list">
                      <li className="elementor-nav-menu-item">
                        <a href="#work" className="elementor-nav-link">
                          Work
                        </a>
                      </li>

                      {Object.entries(dropdownData).map(([key, items]) => (
                        <li
                          key={key}
                          className="elementor-nav-menu-item elementor-has-dropdown"
                          onMouseEnter={() => setActiveDropdown(key)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <a href="#" className="elementor-nav-link">
                            {key}
                            <ChevronDown
                              size={16}
                              className={`elementor-dropdown-icon ${activeDropdown === key ? "elementor-rotate-180" : ""}`}
                            />
                          </a>

                          {activeDropdown === key && (
                            <ul className="elementor-dropdown-menu elementor-animation-fade-in">
                              {items.map((item, index) => (
                                <li key={index} className="elementor-dropdown-item">
                                  <a href="#" className="elementor-dropdown-link">
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}

                      <li className="elementor-nav-menu-item">
                        <a href="#careers" className="elementor-nav-link">
                          Careers
                        </a>
                      </li>
                    </ul>

                    <Button className="elementor-button elementor-button-primary elementor-animation-hover">
                      Contact us
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-hero-section">
        <div className="elementor-container">
          <div className="elementor-row">
            <div className="elementor-column elementor-col-100">
              <div className="elementor-widget elementor-widget-heading elementor-invisible">
                <h1 className="elementor-heading-title">Your Creative, Media & Technology Transformation Partner</h1>
              </div>

              <div className="elementor-widget elementor-widget-text-editor elementor-invisible">
                <p className="elementor-text-content">
                  We're a team of 1000+ Specialists delivering award-winning work for 300+ brands worldwide. 8 years and
                  counting!
                </p>
              </div>

              <div className="elementor-widget elementor-widget-image elementor-invisible">
                <div className="elementor-geometric-pattern">
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
            <div className="elementor-scrolling-text">
              IT'S TIME TO CREATE A SCHBANG • IT'S TIME TO CREATE A SCHBANG • IT'S TIME TO CREATE A SCHBANG • IT'S TIME
              TO CREATE A SCHBANG •
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-about-section">
        <div className="elementor-container">
          <div className="elementor-row">
            <div className="elementor-column elementor-col-100">
              <div className="elementor-widget elementor-widget-heading elementor-invisible">
                <h2 className="elementor-heading-title">What defines us</h2>
              </div>

              <div className="elementor-widget elementor-widget-text-editor elementor-invisible">
                <p className="elementor-text-content">
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
              <div key={index} className="elementor-column elementor-col-33">
                <div className="elementor-widget elementor-widget-icon-box elementor-invisible">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon">{item.icon}</span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">{item.title}</h3>
                      <p className="elementor-icon-box-description">{item.desc}</p>
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
                <h2 className="elementor-heading-title">Featured Work</h2>
              </div>

              <div className="elementor-widget elementor-widget-text-editor elementor-invisible">
                <p className="elementor-text-content">
                  Discover how we've helped brands transform their digital presence and achieve remarkable results.
                </p>
              </div>
            </div>
          </div>

          <div className="elementor-row">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="elementor-column elementor-col-33">
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
                      <h3 className="elementor-image-box-title">Creative Project {item}</h3>
                      <p className="elementor-image-box-description">
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
            <div className="elementor-column elementor-col-25">
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

            <div className="elementor-column elementor-col-25">
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

            <div className="elementor-column elementor-col-25">
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

            <div className="elementor-column elementor-col-25">
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
            <div className="elementor-column elementor-col-50">
              <div className="elementor-widget elementor-widget-text-editor">
                <p className="elementor-copyright">© 2024 Schbang. All rights reserved.</p>
              </div>
            </div>
            <div className="elementor-column elementor-col-50">
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
    </div>
  )
}
