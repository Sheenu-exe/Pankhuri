"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

const categories = ["All", "Business Cards", "Brochures", "Banners", "Invitations", "Corporate"]

const projects = [
  {
    id: 1,
    title: "Tech Startup Business Cards",
    category: "Business Cards",
    client: "TechFlow Solutions",
    image: "/placeholder.svg?height=400&width=600",
    description: "Premium matte finish cards with embossed logo",
  },
  {
    id: 2,
    title: "Restaurant Menu Design",
    category: "Brochures",
    client: "Spice Garden",
    image: "/placeholder.svg?height=400&width=600",
    description: "Elegant tri-fold menu with food photography",
  },
  {
    id: 3,
    title: "Grand Opening Banner",
    category: "Banners",
    client: "Fashion Hub",
    image: "/placeholder.svg?height=400&width=600",
    description: "Large format vinyl banner for store launch",
  },
  {
    id: 4,
    title: "Wedding Invitation Suite",
    category: "Invitations",
    client: "Sharma Family",
    image: "/placeholder.svg?height=400&width=600",
    description: "Luxury wedding cards with gold foiling",
  },
  {
    id: 5,
    title: "Corporate Brochure",
    category: "Corporate",
    client: "BuildTech Industries",
    image: "/placeholder.svg?height=400&width=600",
    description: "Professional company profile brochure",
  },
  {
    id: 6,
    title: "Event Poster Series",
    category: "Banners",
    client: "Music Festival",
    image: "/placeholder.svg?height=400&width=600",
    description: "Vibrant posters for annual music event",
  },
]

export default function Work() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/20">Our Work</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Portfolio of
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-zinc-400">Showcasing our finest printing projects and client success stories</p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0"
                    : "border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-zinc-900" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-all duration-500">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-orange-400 mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-zinc-400 text-sm mb-3">{project.description}</p>
                    <div className="text-xs text-zinc-500">Client: {project.client}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">Our Process</span>
            </h2>
            <p className="text-lg text-zinc-400">How we bring your vision to life</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Brief", desc: "Understanding your needs" },
              { step: "02", title: "Design", desc: "Creating the perfect look" },
              { step: "03", title: "Review", desc: "Your feedback matters" },
              { step: "04", title: "Print", desc: "Bringing it to life" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 to-black" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Start Your Project
              </span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8">Ready to create something amazing?</p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-xl shadow-orange-500/25 group"
              >
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
