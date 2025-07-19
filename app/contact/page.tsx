"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, MessageCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: ["+91 99226 83299", "020-2764 1356"],
      action: "tel:+919922683299",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: ["info@pankhurigraphics.com"],
      action: "mailto:info@pankhurigraphics.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: ["Office No 9, D-Wing, Jai Ganesh Vision", "Near Fame Multiplex, Akurdi", "Pune - 411035"],
      action: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      action: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-sand">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-sand">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <Badge className="bg-orange/10 text-navy border-orange/30 font-medium mb-6">Contact Us</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-navy mb-6">
              Let's{" "}
              <span className="text-orange relative">
                Get Started
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
            <p className="text-xl text-purple leading-relaxed">
              Ready to bring your printing project to life? Get in touch with us today for a free quote and consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white hover:bg-gray-50 transition-all duration-300 group border-0 shadow-lg h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange transition-colors duration-300">
                      <contact.icon className="w-8 h-8 text-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-4">{contact.title}</h3>
                    <div className="space-y-2">
                      {contact.info.map((item, idx) => (
                        <p key={idx} className="text-purple text-sm">
                          {item}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Get Your Free Quote</h2>
                <p className="text-lg text-purple">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote
                </p>
              </div>

              <Card className="bg-gray-50 border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-3">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white border-gray-200 focus:border-orange focus:ring-orange text-navy"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-3">Phone Number *</label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="bg-white border-gray-200 focus:border-orange focus:ring-orange text-navy"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-3">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white border-gray-200 focus:border-orange focus:ring-orange text-navy"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-3">Service Required *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-orange focus:ring-orange focus:outline-none text-navy"
                      >
                        <option value="">Select a service</option>
                        <option value="business-cards">Business Cards</option>
                        <option value="banners">Flex Banners</option>
                        <option value="tshirts">T-Shirt Printing</option>
                        <option value="labels">Labels & Stickers</option>
                        <option value="invitations">Wedding Invitations</option>
                        <option value="corporate">Corporate Printing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-3">Project Details</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Tell us about your project - quantity, size, timeline, special requirements, etc."
                        className="bg-white border-gray-200 focus:border-orange focus:ring-orange text-navy resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange hover:bg-orange/90 text-navy font-bold py-4 text-lg group shadow-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Quote Request
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <Card className="bg-gray-50 border-0 shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-orange mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy mb-2">Find Us Here</h3>
                    <p className="text-purple text-sm max-w-xs">
                      Office No 9, D-Wing, Jai Ganesh Vision, near Fame Multiplex, Akurdi, Pune - 411035
                    </p>
                    <Button className="mt-4 bg-orange hover:bg-orange/90 text-navy font-semibold">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy mb-6">Need Immediate Help?</h3>

                <a
                  href="tel:+919922683299"
                  className="flex items-center p-6 bg-navy rounded-2xl text-white hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-navy" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Call Now</div>
                    <div className="text-sm text-purple">+91 99226 83299</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/919922683299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-green-600 rounded-2xl text-white hover:bg-green-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">WhatsApp Chat</div>
                    <div className="text-sm text-green-100">Quick response guaranteed</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:info@pankhurigraphics.com"
                  className="flex items-center p-6 bg-gray-100 rounded-2xl text-navy hover:bg-gray-200 transition-colors group"
                >
                  <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-navy" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm text-purple">info@pankhurigraphics.com</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge className="bg-orange/20 text-orange border-orange/30 font-medium mb-6">FAQ</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-sand mb-6">Common Questions</h2>
            <p className="text-xl text-purple max-w-2xl mx-auto">
              Quick answers to frequently asked questions about our printing services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What's your typical turnaround time?",
                a: "Most orders are completed within 24-48 hours. Rush orders can be accommodated with prior notice.",
              },
              {
                q: "Do you offer design services?",
                a: "Yes, we provide professional design services for all types of printing projects at competitive rates.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept cash, UPI, bank transfers, and all major credit/debit cards for your convenience.",
              },
              {
                q: "Do you provide delivery services?",
                a: "Yes, we offer delivery services within Akurdi, Pimpri-Chinchwad area. Charges may apply based on location.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-sand mb-3">{faq.q}</h3>
                <p className="text-purple">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
