'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Package, Truck } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    { name: 'Récupération de Colis', id: 'services' },
    { name: 'Livraison Express', id: 'services' },
    { name: 'Service 24/7', id: 'services' },
    { name: 'Suivi en Temps Réel', id: 'services' }
  ]

  const quickLinks = [
    { name: 'Accueil', id: 'accueil' },
    { name: 'Services', id: 'services' },
    { name: 'Enregistrement', id: 'contact' },
    { name: 'Réception de Fonds', id: 'fund-reception' }
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'registratie@autodp.org',
      link: 'mailto:registratie@autodp.org'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      info: '+33 1 23 45 67 89',
      link: 'tel:+33123456789'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      info: 'France - Service National',
      link: null
    },
    {
      icon: Clock,
      title: 'Horaires',
      info: '24h/24 - 7j/7',
      link: null
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <Package className="w-8 h-8 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold">
                  <span className="text-primary-500">DSV</span> Colis
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Votre partenaire de confiance pour la récupération et livraison de colis. 
                Service rapide, fiable et sécurisé partout en France.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Truck className="w-4 h-4 mr-2" />
                  <span>Service 24/7</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Nos Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(service.id)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Liens Rapides</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-200 mb-1">{item.title}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{item.info}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 DSV Colis. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Politique de confidentialité</span>
              <span>•</span>
              <span>Conditions d'utilisation</span>
              <span>•</span>
              <span>Mentions légales</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
