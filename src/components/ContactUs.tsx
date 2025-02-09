"use client"

import { useState, type FormEvent } from "react"
import { X } from "lucide-react"

interface ContactUsProps {
  onClose?: () => void
}

export default function ContactUs({ onClose }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="relative bg-white p-8">
        {onClose && (
          <button className="absolute top-4 left-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        )}
        <h2 className="text-2xl font-bold text-center mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#96B66C] focus:border-[#96B66C]"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#96B66C] focus:border-[#96B66C]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#96B66C] focus:border-[#96B66C]"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#96B66C] text-white py-2 px-4 rounded-md hover:bg-[#7a9657] transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>

      <div
        className="bg-[#2F4F2F] text-white p-8 flex flex-col justify-center space-y-8 size"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-bold">Get in Touch by any of the following means:</h1>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#c1f0c1] mb-2">Address</h3>
            <p>Shop 5, Block A, Garki International Market, Abuja</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#c1f0c1] mb-2">Email</h3>
            <p>agromarket@example.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#c1f0c1] mb-2">Phone Number</h3>
            <p>07012345678</p>
          </div>
        </div>
      </div>
    </div>
  )
}

