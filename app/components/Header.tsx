'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { name: 'Home', id: 'accueil' },
    { name: 'Diensten', id: 'services' },
    { name: 'Ontvangst van fondsen', id: 'fund-reception' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex justify-between items-center py-4 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Menus Gauche - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => scrollToSection('accueil')}
              className="font-medium transition-all duration-300 relative group px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => scrollToSection('services')}
              className="font-medium transition-all duration-300 relative group px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50"
            >
              Diensten
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </motion.button>
          </nav>

          {/* Logo Central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <Image
                src="/Logo.png"
                alt="herstelservicedsv-logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
              <span className="text-gray-900">herstelservice</span>
            </h1>
          </motion.div>

          {/* Menus Droite - Desktop */}
          <nav className="hidden lg:flex items-center justify-end space-x-6">
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => scrollToSection('fund-reception')}
              className="font-medium transition-all duration-300 relative group px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50"
            >
              Ontvangst van fondsen
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t bg-white border-gray-200 rounded-b-lg shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-medium py-3 px-4 text-primary-800 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Header
