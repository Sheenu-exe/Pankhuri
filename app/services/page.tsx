"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FileText,
  ImageIcon,
  Printer,
  Shirt,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Zap,
} from "lucide-react"
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
    title: "Business Cards & Visiting Cards",
    description: "Premium quality business cards with various finishes - matte, gloss, and textured options.",
    features: ["Multiple paper types", "Embossed options", "Quick 24hr delivery", "Bulk discounts available"],
    price: "Starting ₹3/card",
    popular: false,
  },
  {
    icon: ImageIcon,
    title: "Flex & Dye-Sublimation Banners",
    description: "Large format printing for outdoor banners, shop signage, and promotional displays.",
    features: ["Weather resistant", "Any custom size", "Vibrant colors", "Installation support"],
    price: "Starting ₹25/sq ft",
    popular: true,
  },
  {
    icon: Shirt,
    title: "T-Shirt & Cloth Printing",
    description: "Custom screen printing on t-shirts, uniforms, and fabric materials with vibrant colors.",
    features: ["Screen printing", "Digital printing", "Bulk orders", "Custom designs"],
    price: "Starting ₹80/piece",
    popular: false,
  },
  {
    icon: Printer,
    title: "Labels, Stickers & Brochures",
    description: "Professional printing for product labels, promotional stickers, and marketing brochures.",
    features: ["Waterproof stickers", "Custom shapes", "High-quality paper", "Fast turnaround"],
    price: "Starting ₹2/piece",
    popular: false,
  },
  {
    icon: Award,
    title: "Wedding & Event Invitations",
    description: "Beautiful wedding cards, event invitations with premium finishes and custom designs.",
    features: ["Premium paper", "Gold/Silver foiling", "Custom designs", "Envelope printing"],
    price: "Starting ₹15/card",
    popular: false,
  },
  {
    icon: Users,
    title: "Corporate Printing Solutions",
    description: "Bulk printing services for businesses including letterheads, envelopes, and catalogs.",
    features: ["Volume discounts", "Consistent quality", "Corporate branding", "Regular orders"],
    price: "Custom pricing",
    popular: false,
  },
]

const features = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Most orders completed within 24-48 hours",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction or we'll reprint for free",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We never miss deadlines, guaranteed",
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-sand">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-sand">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <Badge className="bg-orange/10 text-navy border-orange/30 font-medium mb-6">Our Services</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-navy mb-6">
              Complete Printing{" "}
              <span className="text-orange relative">
                Solutions
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 2 100 2 150 6C170 8 180 4 198 6"
                    stroke="orange"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From business cards to large format displays - we handle all your printing needs with precision and speed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full transition-all duration-300 group border-0 shadow-lg relative ${
                    service.popular ? "bg-navy text-sand" : "bg-sand hover:bg-gray-50"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <Badge className="bg-orange text-navy font-semibold">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                        service.popular ? "bg-orange" : "bg-navy group-hover:bg-orange"
                      }`}
                    >
                      <service.icon
                        className={`w-8 h-8 transition-colors duration-300 ${
                          service.popular ? "text-navy" : "text-orange group-hover:text-navy"
                        }`}
                      />
                    </div>
                    <h3 className={`text-xl font-bold mb-4 ${service.popular ? "text-sand" : "text-navy"}`}>
                      {service.title}
                    </h3>
                    <p className={`mb-4 leading-relaxed ${service.popular ? "text-gray-300" : "text-gray-600"}`}>
                      {service.description}
                    </p>
                    <div
                      className={`font-semibold mb-6 text-lg ${service.popular ? "text-orange" : "text-orange"}`}
                    >
                      {service.price}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className={`flex items-center text-sm ${service.popular ? "text-gray-300" : "text-gray-600"}`}
                        >
                          <CheckCircle className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full font-semibold ${
                          service.popular
                            ? "bg-orange hover:bg-orange/80 text-navy"
                            : "bg-navy hover:bg-gray-800 text-sand"
                        }`}
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional printing services with these guarantees
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-orange" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge className="bg-orange/20 text-orange border-orange/30 font-medium mb-6">How It Works</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-sand mb-6">Simple Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">From concept to completion in just 4 easy steps</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discuss", desc: "Share your requirements with us" },
              { step: "02", title: "Design", desc: "We create the perfect design" },
              { step: "03", title: "Print", desc: "High-quality printing process" },
              { step: "04", title: "Deliver", desc: "Fast and secure delivery" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-navy">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-sand mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-navy/80 mb-8">
              Get a free quote and see how we can help bring your ideas to life
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-navy hover:bg-gray-800 text-sand font-bold px-8 py-4 text-lg group shadow-xl"
              >
                Get Free Quote Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
