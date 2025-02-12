"use client";

import { useState } from "react";
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  PinIcon as Pinterest,
} from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import ContactUs from "./ContactUs";

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <motion.div
        className="bg-white border-b"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Leaf className="h-8 w-8 text-[#96B66C]" />
                <span className="ml-2 text-2xl font-semibold text-[#96B66C]">
                  PurePickers
                </span>
              </a>
            </div>

            {/* Social and Contact */}
            <div className="flex items-center space-x-8">
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#96B66C] transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#96B66C] transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#96B66C] transition-colors"
                >
                  <Pinterest size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#96B66C] transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Phone className="text-[#96B66C]" size={18} />
                  <div className="flex flex-row gap2">
                    <div className="flex flex-col">
                      <a
                        href="tel:+919008161630"
                        className="text-sm font-medium"
                      >
                        +919008161630
                      </a>
                      <a
                        href="tel:+917408423890"
                        className="text-sm font-medium"
                      >
                        +917408423890
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-[#96B66C]" size={18} />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Send email</span>
                    <a
                      href="mailto:ambed@agrios.com"
                      className="text-sm font-medium"
                    >
                      ambed@agrios.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-[#96B66C]" size={18} />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      HIG-366, Kalinga vihar
                    </span>
                    <span className="text-sm">Bhubaneswar, Odisha, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        className="bg-[#96B66C]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-14">
            <a
              href="/"
              className="text-white hover:text-gray-200 transition-colors inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Home
            </a>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-white hover:text-gray-200 transition-colors inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      >
        <ContactUs onClose={() => setIsContactModalOpen(false)} />
      </Modal>
    </>
  );
}
