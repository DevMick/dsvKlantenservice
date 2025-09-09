'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Package, Truck, MapPin, Clock, Shield, Zap } from 'lucide-react'


const Hero = () => {

  return (
    <section id="accueil" className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background personnalisé avec dégradés bleu marine */}
      <div className="absolute inset-0 z-0">
        {/* Dégradé principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-800"></div>

        {/* Éléments décoratifs de livraison */}
        <div className="absolute inset-0">
          {/* Camion de livraison */}
          <motion.div
            className="absolute top-16 right-20 p-4 bg-primary-500/20 rounded-2xl backdrop-blur-sm"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Truck className="w-8 h-8 text-primary-300" />
          </motion.div>

          {/* Colis avec animation */}
          <motion.div
            className="absolute bottom-24 left-20 p-3 bg-accent-50/15 rounded-xl backdrop-blur-sm"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Package className="w-6 h-6 text-accent-50" />
          </motion.div>

          {/* Point de livraison */}
          <motion.div
            className="absolute top-1/3 left-1/4 p-3 bg-primary-600/25 rounded-full backdrop-blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <MapPin className="w-5 h-5 text-primary-200" />
          </motion.div>

          {/* Horloge - Service rapide */}
          <motion.div
            className="absolute top-20 left-1/3 p-2 bg-accent-50/10 rounded-lg backdrop-blur-sm"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Clock className="w-4 h-4 text-accent-50" />
          </motion.div>

          {/* Bouclier sécurité */}
          <motion.div
            className="absolute bottom-32 right-1/3 p-3 bg-primary-400/20 rounded-xl backdrop-blur-sm"
            animate={{
              y: [-5, 5, -5],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            <Shield className="w-6 h-6 text-primary-300" />
          </motion.div>

          {/* Éclair - Service rapide */}
          <motion.div
            className="absolute top-1/2 right-1/4 p-2 bg-accent-50/15 rounded-full backdrop-blur-sm"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <Zap className="w-4 h-4 text-accent-50" />
          </motion.div>

          {/* Lignes de connexion décoratives */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-50/30 to-transparent"></div>


        </div>

        {/* Points de livraison décoratifs */}
        <div className="absolute inset-0 opacity-30">
          {/* Point de départ */}
          <div className="absolute top-20 left-20 w-3 h-3 bg-primary-300 rounded-full animate-pulse border-2 border-primary-200/50"></div>

          {/* Points intermédiaires */}
          <div className="absolute top-32 right-32 w-2 h-2 bg-accent-50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-primary-400 rounded-full animate-pulse border border-primary-300/50" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-accent-50 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>

          {/* Point de destination */}
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-primary-200 rounded-full animate-pulse border-2 border-accent-50/50" style={{animationDelay: '4s'}}></div>

          {/* Petits points de trajet */}
          <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-primary-300/60 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-accent-50/60 rounded-full animate-pulse" style={{animationDelay: '3.5s'}}></div>
        </div>


      </div>

      {/* Content principal */}
      <div className="relative z-40 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >


          {/* Titre principal avec effet gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-primary-300 to-accent-50 bg-clip-text text-transparent">
              DSV
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-200 via-accent-50 to-primary-400 bg-clip-text text-transparent">
              Klantenservice
            </span>
          </motion.h1>

          {/* Sous-titre moderne */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Service professionnel de récupération et livraison de colis
            <span className="text-primary-300 font-semibold"> rapide</span> et
            <span className="text-accent-50 font-semibold"> sécurisé</span>.
          </motion.p>



          {/* Indicateur de scroll moderne */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
