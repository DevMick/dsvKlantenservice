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
    <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white relative overflow-hidden">
      {/* Animations d'arrière-plan - Réseau de livraison sécurisé */}
      <div className="absolute inset-0 z-0">
        {/* Lignes de connexion animées représentant le réseau de livraison */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Ligne principale de livraison */}
          <motion.path
            d="M100 400 Q300 200 600 400 Q900 600 1100 400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            viewport={{ once: false }}
          />

          {/* Lignes secondaires - réseau de distribution */}
          <motion.path
            d="M200 300 L400 500 L600 300 L800 500 L1000 300"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            viewport={{ once: false }}
          />

          {/* Définition des gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#334155" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#475569" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Particules de sécurité flottantes */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full"
          animate={{
            x: [0, 100, 200, 100, 0],
            y: [0, -50, 0, 50, 0],
            scale: [1, 1.5, 1, 1.2, 1],
            opacity: [0.3, 0.8, 0.5, 0.9, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-secondary-500 rounded-full"
          animate={{
            x: [0, -80, -160, -80, 0],
            y: [0, 60, 0, -40, 0],
            scale: [1, 1.3, 1, 1.1, 1],
            opacity: [0.4, 0.7, 0.6, 0.8, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-primary-300 rounded-full"
          animate={{
            x: [0, 120, 60, 180, 0],
            y: [0, -80, -40, -100, 0],
            scale: [1, 1.4, 1, 1.2, 1],
            opacity: [0.5, 0.9, 0.4, 0.7, 0.5]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Éléments de sécurité pulsants */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-primary-300/30 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.1, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/5 w-6 h-6 border-2 border-secondary-400/25 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.05, 0.2],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
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
