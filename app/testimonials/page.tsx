"use client"

import {motion} from 'motion/react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight, Building, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const testimonials = [
  {
    name: "Rajesh Sharma",
    business: "Sharma Electronics",
    location: "Akurdi",
    rating: 5,
    text: "Exceptional quality and service. The team at Pankhuri Graphics delivered exactly what we needed for our product launch. The business cards were premium quality and the banners looked fantastic.",
    image: "/placeholder.svg?height=80&width=80",
    project: "Business Cards & Banners",
    category: "Electronics Store",
  },
  {
    name: "Priya Patel",
    business: "Patel Catering Services",
    location: "Pimpri",
    rating: 5,
    text: "Beautiful wedding invitations that exceeded our expectations. The attention to detail and the quality of printing was outstanding. Our clients were extremely happy with the final result.",
    image: "/placeholder.svg?height=80&width=80",
    project: "Wedding Invitations",
    category: "Catering Business",
  },
  {
    name: "Amit Kumar",
    business: "Kumar Traders",
    location: "Chinchwad",
    rating: 5,
    text: "Best printing partner in Akurdi. Consistent quality, competitive pricing, and always on time. We've been working with them for over 2 years and they never disappoint.",
    image: "/placeholder.svg?height=80&width=80",
    project: "Corporate Stationery",
    category: "Trading Company",
  },
  {
    name: "Sneha Desai",
    business: "Desai Clinic",
    location: "Akurdi",
    rating: 5,
    text: "Professional brochures and prescription pads printed with excellent quality. The team understood our medical requirements and delivered exactly what we needed for our clinic.",
    image: "/placeholder.svg?height=80&width=80",
    project: "Medical Stationery",
    category: "Healthcare",
  },
  {
    name: "Vikram Singh",
    business: "Singh Fitness Center",
    location: "Pimpri",
    rating: 5,
    text: "Amazing t-shirt printing service! The screen printing quality is top-notch and the colors are vibrant. Our gym members love the custom t-shirts we got printed.",
    image: "/placeholder.svg?height=80&width=80",
    project: "Custom T-Shirts",
    category: "Fitness Center",
  },
  {
    name: "Meera Joshi",
    business: "Joshi Restaurant",
    location: "Akurdi",
    rating: 5,
    text: "The flex banners for our restaurant opening were perfect. Weather-resistant and the colors are still vibrant after 6 months. Great value for money and excellent service.",
    image: "/placeholder.svg?height=80&width=80",
    project: "Flex Banners",
    category: "Restaurant",
  },
]

const stats = [
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "2000+", label: "Projects Completed", icon: Award },
  { number: "99%", label: "Satisfaction Rate", icon: Star },
  { number: "3+", label: "Years Serving Akurdi", icon: Building },
]

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-sand">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-sand">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <Badge className="bg-orange/10 text-navy border-orange/30 font-medium mb-6">Client Stories</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-navy mb-6">
              What Our{" "}
              <span className="text-orange relative">
                Clients Say
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
              Real feedback from local businesses in Akurdi, Pimpri, and Chinchwad who trust us with their printing
              needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange" />
                </div>
                <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-sand hover:bg-gray-50 transition-all duration-300 border-0 shadow-lg group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Quote className="w-8 h-8 text-orange mr-3" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-orange fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full border-2 border-gray-200"
                        />
                        <div className="flex-1">
                          <div className="font-bold text-navy">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.business}</div>
                          <div className="text-xs text-gray-500">{testimonial.location}</div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <Badge className="bg-orange/10 text-navy border-orange/30 text-xs">
                          {testimonial.project}
                        </Badge>
                        <span className="text-xs text-gray-500">{testimonial.category}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-orange mx-auto mb-8" />
            <blockquote className="text-2xl lg:text-3xl font-medium text-sand mb-8 leading-relaxed">
              "Pankhuri Graphics has been our go-to printing partner for all our business needs. Their quality is
              unmatched and they always deliver on time. Highly recommended for anyone in Akurdi looking for
              professional printing services."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Featured Client"
                width={80}
                height={80}
                className="rounded-full border-2 border-orange"
              />
              <div className="text-left">
                <div className="font-bold text-sand text-lg">Rohit Agarwal</div>
                <div className="text-gray-300">Agarwal Enterprises</div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Join Our Happy Clients</h2>
            <p className="text-xl text-navy/80 mb-8">
              Experience the same quality and service that our clients rave about
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-navy hover:bg-gray-800 text-sand font-bold px-8 py-4 text-lg group shadow-xl"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-sand bg-transparent font-semibold px-8 py-4"
                >
                  View Our Services
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
