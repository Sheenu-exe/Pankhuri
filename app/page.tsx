"use client"

import {motion} from 'motion/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Printer, FileText, Shirt, ImageIcon, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const services = [
  {
    icon: FileText,
    title: "Business Cards",
    description: "Premium quality cards with various finishes",
  },
  {
    icon: ImageIcon,
    title: "Flex Banners",
    description: "Large format printing for outdoor displays",
  },
  {
    icon: Shirt,
    title: "T-Shirt Printing",
    description: "Custom screen printing on fabric",
  },
  {
    icon: Printer,
    title: "Labels & Stickers",
    description: "Professional product labels and stickers",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-sand">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-sand">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="space-y-8">
              <Badge className="bg-orange/10 text-navy border-orange/30 font-medium">
                ✨ Your Trusted Print Partner
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-navy">
                Turning your ideas into{" "}
                <span className="text-orange relative">
                  printed reality
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50 2 100 2 150 6C200 10 250 4 298 6"
                      stroke="#f4ae3e"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                for businesses & creators
              </h1>

              <p className="text-xl text-purple leading-relaxed">
                Professional screen-printing, flex banners, business cards, t-shirts, labels, and PVC stickers with fast
                turnaround times. Empowering your brand with every print.
              </p>

              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-navy hover:bg-gray-800 text-sand font-bold px-8 py-4 text-lg group shadow-xl"
                >
                  Get your Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange" />
                  <span className="text-purple">Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange" />
                  <span className="text-purple">Nationwide Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange" />
                  <span className="text-purple">High Quality</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-navy rounded-3xl p-12 shadow-2xl">
                <div className="absolute top-6 right-6 w-4 h-4 bg-orange rounded-full animate-pulse"></div>
                <div className="absolute top-6 left-6 w-3 h-3 bg-sand rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-gray rounded-full"></div>

                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-orange rounded-2xl flex items-center justify-center mx-auto">
                    <Printer className="w-12 h-12 text-navy" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-purple rounded w-3/4 mx-auto"></div>
                    <div className="h-3 bg-purple rounded w-1/2 mx-auto"></div>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-8 h-8 bg-orange rounded-lg"></div>
                    <div className="w-8 h-8 bg-sand rounded-lg"></div>
                    <div className="w-8 h-8 bg-purple rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20 bg-gray">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge className="bg-navy/10 text-navy border-navy/20 font-medium mb-6">Our Services</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">What We Print</h2>
            <p className="text-xl text-purple max-w-2xl mx-auto">
              From business cards to large banners, we handle all your printing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-sand hover:bg-gray transition-all duration-300 group border-0 shadow-lg h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-orange transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-orange group-hover:text-navy transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                    <p className="text-purple text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-orange hover:bg-orange/80 text-navy font-semibold px-8 py-3 group">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-orange">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Let's get your print project started</h2>
            <p className="text-xl text-navy/80 mb-8 leading-relaxed">
              High-quality prints, fast turnaround, and dedicated service for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-navy hover:bg-purple text-sand font-bold px-8 py-4 text-lg group shadow-xl"
                >
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/testimonials">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-sand bg-transparent font-semibold px-8 py-4"
                >
                  See What Clients Say
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
