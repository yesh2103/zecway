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

      <main className="pt-16">
        <section className="hero-section min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 leading-tight">
              Your Creative, Media & Technology Transformation Partner
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto">
              We're a team of 1000+ Specialists delivering award-winning work for 300+ brands worldwide, 8 years and counting!
            </p>

            <div className="geometric-pattern-container w-full max-w-6xl mx-auto h-64 md:h-96 lg:h-[500px] relative mb-8">
              <div className="geometric-pattern w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-blue-500 via-cyan-500 via-green-500 via-orange-500 via-yellow-500 to-purple-500 rounded-2xl transform -skew-x-12 opacity-90"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
                  <div className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 transform -rotate-12">celebrate</div>
                  <div className="text-4xl md:text-6xl lg:text-7xl font-black">24</div>
                </div>

                <div className="absolute top-4 right-8 text-white font-bold text-lg md:text-xl transform rotate-12">
                  PRIDE
                  <div className="text-sm">04 august</div>
                </div>

                <div className="absolute bottom-8 left-8 text-white font-bold text-lg md:text-xl transform -rotate-12">
                  july
                </div>

                <div className="absolute top-8 left-1/3 text-white font-bold text-base md:text-lg transform rotate-6">
                  msterd
                </div>

                <div className="absolute bottom-4 right-1/3 text-white font-bold text-xl md:text-2xl transform rotate-12">
                  PRIDE
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-black text-white py-3 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-sm md:text-base font-semibold mx-8">IT'S TIME TO CREATE A SCHBANG</span>
              <span className="text-sm md:text-base font-semibold mx-8">•</span>
              <span className="text-sm md:text-base font-semibold mx-8">IT'S TIME TO CREATE A SCHBANG</span>
              <span className="text-sm md:text-base font-semibold mx-8">•</span>
              <span className="text-sm md:text-base font-semibold mx-8">IT'S TIME TO CREATE A SCHBANG</span>
              <span className="text-sm md:text-base font-semibold mx-8">•</span>
              <span className="text-sm md:text-base font-semibold mx-8">IT'S TIME TO CREATE A SCHBANG</span>
              <span className="text-sm md:text-base font-semibold mx-8">•</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">What defines us</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just another agency. We're transformation partners who blend creativity, technology, and strategic thinking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl md:text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-white text-black border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-full flex items-center mx-auto">
                Dive into Our Culture <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </section>

        <section id="work" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">Featured Work</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped brands transform their digital presence and achieve remarkable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&q=80&fm=jpg&dpr=2&auto=format&s=${item}`}
                      alt={`Project ${item}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-full">
                        View Project <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Creative Project {item}</h3>
                    <p className="text-gray-600">
                      Brand transformation campaign with innovative digital solutions.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Schbang</h3>
                <p className="text-gray-300">
                  Your Creative, Media & Technology Transformation Partner
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center w-fit">
                  Contact Us <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Creative & Branding</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Technology Solutions</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Media Planning</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Culture</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Mumbai, India</p>
                  <p>hello@schbang.com</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Schbang. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
