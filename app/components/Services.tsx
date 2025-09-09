'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Package2, Rocket, Zap, Star, Shield, Globe, Sparkles, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Package2,
      title: 'Récupération Express',
      description: 'Service de récupération ultra-rapide avec suivi en temps réel et garantie de sécurité maximale.',
      features: ['Récupération en 2h', 'Suivi GPS temps réel', 'Emballage premium', 'Assurance incluse'],
      color: 'from-primary-500 to-primary-600',
      accent: 'primary'
    },
    {
      icon: Rocket,
      title: 'Livraison Éclair',
      description: 'Livraison ultra-rapide avec notre flotte de véhicules électriques et équipe d\'experts.',
      features: ['Livraison 24/7', 'Véhicules électriques', 'Équipe certifiée', 'Tarifs compétitifs'],
      color: 'from-secondary-500 to-secondary-600',
      accent: 'secondary'
    },
    {
      icon: Sparkles,
      title: 'Service Premium',
      description: 'Solutions haut de gamme personnalisées avec accompagnement dédié et garanties exclusives.',
      features: ['Conseiller dédié', 'Garantie premium', 'Service VIP', 'Support prioritaire'],
      color: 'from-accent-500 to-accent-600',
      accent: 'accent'
    }
  ]

  const stats = [
    { number: '24/7', label: 'Service Express', icon: Zap, color: 'text-accent-500' },
    { number: '1000+', label: 'Clients Satisfaits', icon: Star, color: 'text-primary-500' },
    { number: '100%', label: 'Sécurité Garantie', icon: Shield, color: 'text-secondary-500' },
    { number: '50+', label: 'Villes Couvertes', icon: Globe, color: 'text-accent-600' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nos <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            DSV vous accompagne pour tous vos besoins de récupération et livraison de colis avec des services professionnels
            et une expertise reconnue.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${service.color} p-6 sm:p-8`}>
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className={`w-4 h-4 mr-3 flex-shrink-0 ${service.accent === 'primary' ? 'text-primary-500' : service.accent === 'secondary' ? 'text-secondary-500' : 'text-accent-500'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-2xl p-6 sm:p-8 lg:p-12 mt-12 lg:mt-16 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Services
