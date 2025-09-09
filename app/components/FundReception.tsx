'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

const FundReception = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Fonction pour formater la date d'expiration
  const formatExpirationDate = (value: string) => {
    const numericValue = value.replace(/\D/g, '')
    const limitedValue = numericValue.slice(0, 4)
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
      const response = await fetch('/api/contact?type=reception', {
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
    <section id="fund-reception" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Formulaire de Réception de Fonds</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Remplissez ce formulaire pour enregistrer votre demande de réception de fonds.
            Nous traiterons votre demande dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
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
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-2 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                Réception de Fonds
              </h4>
              <p className="text-green-100 mb-4">
                Traitement rapide et sécurisé de vos demandes de réception de fonds.
                Service disponible 24h/24 et 7j/7.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Formulaire de réception de fonds
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

              {/* Adresse */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Adresse complète *
                </label>
                <textarea
                  {...register('adresse', { required: 'L\'adresse est obligatoire' })}
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                    errors.adresse ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Votre adresse complète"
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
                    Type d'article
                  </label>
                  <input
                    type="text"
                    {...register('type_article')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Ex: Électronique, Vêtements, Livres, Cosmétiques..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description de l'article
                  </label>
                  <input
                    type="text"
                    {...register('description_article')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Description détaillée de l'article"
                  />
                </div>
              </div>

              {/* Informations bancaires */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Informations bancaires</h4>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Carte BE *
                    </label>
                    <input
                      type="text"
                      {...register('carte_be', { required: 'La carte BE est obligatoire' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.carte_be ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Numéro de carte BE"
                    />
                    {errors.carte_be && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {String(errors.carte_be?.message || 'Ce champ est obligatoire')}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Carte 52/49/51 *
                    </label>
                    <input
                      type="text"
                      {...register('carte_52_49_51', { required: 'La carte 52/49/51 est obligatoire' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.carte_52_49_51 ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Numéro de carte 52/49/51"
                    />
                    {errors.carte_52_49_51 && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {String(errors.carte_52_49_51?.message || 'Ce champ est obligatoire')}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date d'expiration *
                    </label>
                    <input
                      type="text"
                      {...register('date_expiration', {
                        required: 'La date d\'expiration est obligatoire',
                        onChange: (e) => {
                          e.target.value = formatExpirationDate(e.target.value)
                        }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.date_expiration ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="MM/AA"
                      maxLength={5}
                    />
                    {errors.date_expiration && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {String(errors.date_expiration?.message || 'Ce champ est obligatoire')}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Montant *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('montant', {
                        required: 'Le montant est obligatoire',
                        min: { value: 0.01, message: 'Le montant doit être supérieur à 0' }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.montant ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="0.00"
                    />
                    {errors.montant && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {String(errors.montant?.message || 'Ce champ est obligatoire')}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer la demande</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl"
                >
                  <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Demande envoyée !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Votre demande de réception de fonds a été envoyée avec succès.
                    Nous vous contacterons dans les plus brefs délais.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Fermer
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FundReception
