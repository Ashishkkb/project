"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Fresh from "./components/Fresh"

// Define advanced animation variants with extra scale and rotation effects.
const sectionVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.95, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  // Removed `once: true` so animation triggers every time the element enters/exits the viewport
  const isInView = useInView(ref, { margin: "-20%" })

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-x-hidden overflow-y-hidden">
      {/* Progress Bar with a light blue tint */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-200 z-50"
        style={{ scaleX }}
      />

      {/* Navbar - Fixed */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navbar />
      </div>

      {/* Container for scrollable content with top padding to offset the fixed navbar */}
      <div className="pt-16">
        {/* Hero Section with a smooth scale-in effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>

        {/* About Section */}
        <AnimatedSection>
          <About />
        </AnimatedSection>

        {/* Products Section */}
        <AnimatedSection>
          <Products />
        </AnimatedSection>

        {/* Fresh Section */}
        <AnimatedSection>
          <Fresh />
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>
    </div>
  )
}
