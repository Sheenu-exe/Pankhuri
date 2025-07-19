"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Shield, Timer, Users, Award, Target, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "2000+", label: "Projects Completed" },
  { number: "500+", label: "Happy Clients" },
  { number: "99%", label: "Success Rate" },
]

const values = [
  {
    icon: Zap,
    title: "Speed",
    description: "24-hour turnaround on most orders",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Premium materials and processes",
  },
  {
    icon: Timer,
    title: "Reliability",
    description: "Always on time, every time",
  },
  {
    icon: Users,
    title: "Service",
    description: "Dedicated customer support",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning print quality",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Attention to every detail",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/20">About Us</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sand to-zinc-300 bg-clip-text text-transparent">
                Your Trusted
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Print Partner
              </span>
            </h1>
            <p className="text-xl text-zinc-400">Serving Akurdi with premium printing solutions for over a decade</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-zinc-900" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/20">Our Story</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-sand to-zinc-300 bg-clip-text text-transparent">
                  Built on Quality
                </span>
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Founded in 2013, Pankhuri Graphics started as a small print shop with a big vision - to provide Akurdi
                  with world-class printing services.
                </p>
                <p>
                  Today, we're proud to be the go-to printing partner for hundreds of local businesses, from startups to
                  established enterprises.
                </p>
                <p>
                  Our commitment to quality, speed, and customer satisfaction has made us a trusted name in the
                  industry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-3xl" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our Workshop"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl relative z-10 border border-zinc-800"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-zinc-900" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sand to-zinc-300 bg-clip-text text-transparent">Our Values</span>
            </h2>
            <p className="text-lg text-zinc-400">What drives us every day</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all duration-500 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-7 h-7 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-zinc-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sand to-zinc-300 bg-clip-text text-transparent">Our Team</span>
            </h2>
            <p className="text-lg text-zinc-400">Skilled professionals dedicated to your success</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
              { name: "Priya Sharma", role: "Design Head", image: "/placeholder.svg?height=300&width=300" },
              { name: "Amit Patel", role: "Production Manager", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-2xl relative z-10 border border-zinc-800 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-orange-400">{member.role}</p>
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
              <span className="bg-gradient-to-r from-sand to-zinc-300 bg-clip-text text-transparent">
                Ready to Work Together?
              </span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8">Let's bring your ideas to life</p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-xl shadow-orange-500/25 group"
              >
                Get Started
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
