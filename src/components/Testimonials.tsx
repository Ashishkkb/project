'use client'

import { Card } from "./../components/card"
import { Avatar, AvatarFallback, AvatarImage } from "./../components/avatar"
import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Pure Pickers has transformed how we source our ingredients. Their commitment to quality and freshness is unmatched. Every delivery consistently exceeds our expectations, allowing us to serve our customers the highest quality dishes.",
    author: "Michael Chen",
    role: "Executive Chef",
    company: "The Garden Restaurant",
    image: "/placeholder.svg"
  },
  {
    content: "As a health-focused café owner, finding reliable suppliers for fresh, organic produce was challenging until we partnered with Pure Pickers. Their farm-to-table approach and attention to detail have made a significant difference in our menu quality.",
    author: "Emma Thompson",
    role: "Owner",
    company: "Fresh & Co. Café",
    image: "/placeholder.svg"
  },
  {
    content: "The quality and reliability of Pure Pickers' service have been instrumental in our restaurant's success. Their produce is consistently fresh, and their delivery is always on time. It's a partnership we truly value.",
    author: "David Rodriguez",
    role: "Restaurant Manager",
    company: "Harvest Table",
    image: "/placeholder.svg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-base font-semibold text-primary mb-2">OUR TESTIMONIALS</h3>
          <h2 className="text-3xl font-bold tracking-tight">WHAT THEY'RE SAYING ABOUT US</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="relative bg-white p-8 shadow-md">
                <div className="absolute -top-4 left-8">
                  <div className="bg-primary p-2 rounded-full">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <blockquote className="text-gray-700 leading-relaxed min-h-[180px]">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                          {testimonial.company && (
                            <>
                              <span className="mx-1">·</span>
                              <span>{testimonial.company}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
