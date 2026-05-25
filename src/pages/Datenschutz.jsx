'use client'

import Footer from '../components/Footer'

export default function Datenschutz() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          color: 'var(--text2)', textDecoration: 'none', fontSize: '13px',
          marginBottom: '2.5rem', fontWeight: 500,
        }}>
          ← Zurück
        </a>

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--text2)', marginBottom: '8px' }}>
          Rechtliches
        </p>
        <h1 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.8px',
          color: 'var(--text)', marginBottom: '2.5rem', lineHeight: 1.1 }}>
          Datenschutzerklärung
        </h1>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>

          <Section title="1. Verantwortlicher">
            <p>Pavels Lipins · Riedwiesenweg 17, 69181 Leimen</p>
            <p>E-Mail: <a href="mailto:info@artiklo.de"
              style={{ color: 'var(--yellow)', textDecoration: 'none', fontWeight: 600 }}>
              info@artiklo.de
            </a></p>
          </Section>

          <Section title="2. Erhobene Daten und Zweck">
            <p>Diese Website erhebt personenbezogene Daten nur im notwendigen Umfang:</p>
            <ul style={{ paddingLeft: '18px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Registrierung:</strong> Ihre E-Mail-Adresse wird gespeichert, um Ihnen den Zugang zu Ihrem persönlichen Lernfortschritt zu ermöglichen.</li>
              <li><strong>Lernfortschritt:</strong> Quizstatistiken werden gespeichert, um eine personalisierte Lernerfahrung zu bieten.</li>
              <li><strong>Serverdaten:</strong> Bei jedem Aufruf werden technische Daten (IP-Adresse, Browser, Uhrzeit) durch unseren Hosting-Anbieter erfasst.</li>
            </ul>
          </Section>

          <Section title="3. Rechtsgrundlage">
            <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
            sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) für den technischen Betrieb.</p>
          </Section>

          <Section title="4. Dienstleister">
            <SubCard title="Supabase">
              Authentifizierung und Datenspeicherung via Supabase Inc., San Francisco, USA.{' '}
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--yellow)', textDecoration: 'none', fontWeight: 600 }}>
                Datenschutzerklärung →
              </a>
            </SubCard>
            <SubCard title="Vercel">
              Hosting via Vercel Inc., Walnut, CA, USA. Vercel verarbeitet technische Zugriffsdaten.{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--yellow)', textDecoration: 'none', fontWeight: 600 }}>
                Datenschutzerklärung →
              </a>
            </SubCard>
          </Section>

          <Section title="5. Cookies">
            <p>Es werden ausschließlich technisch notwendige Cookies zur Aufrechterhaltung Ihrer
            Anmeldesitzung verwendet. Keine Tracking- oder Werbe-Cookies.</p>
          </Section>

          <Section title="6. Speicherdauer">
            <p>Ihre Daten werden gespeichert, solange Ihr Konto aktiv ist. Nach Kontolöschung werden
            alle personenbezogenen Daten innerhalb von 30 Tagen entfernt. Protokolldaten werden nach
            spätestens 7 Tagen gelöscht.</p>
          </Section>

          <Section title="7. Ihre Rechte (DSGVO)">
            <p style={{ marginBottom: '10px' }}>Sie haben das Recht auf:</p>
            <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li><strong>Auskunft</strong> über Ihre Daten (Art. 15)</li>
              <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16)</li>
              <li><strong>Löschung</strong> Ihrer Daten (Art. 17)</li>
              <li><strong>Einschränkung</strong> der Verarbeitung (Art. 18)</li>
              <li><strong>Datenübertragbarkeit</strong> (Art. 20)</li>
              <li><strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21)</li>
            </ul>
            <p style={{ marginTop: '12px' }}>Kontakt: <a href="mailto:info@artiklo.de"
              style={{ color: 'var(--yellow)', textDecoration: 'none', fontWeight: 600 }}>
              info@artiklo.de
            </a></p>
          </Section>

          <Section title="8. Beschwerderecht">
            <p>Sie können sich an den Landesbeauftragten für Datenschutz Baden-Württemberg wenden:{' '}
              <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--yellow)', textDecoration: 'none', fontWeight: 600 }}>
                baden-wuerttemberg.datenschutz.de →
              </a>
            </p>
          </Section>
        </div>

        <p style={{ marginTop: '3rem', fontSize: '12px', color: 'var(--text2)', opacity: 0.5 }}>
          Stand: Mai 2026
        </p>
      </div>
      <Footer />
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--text2)', marginBottom: '10px' }}>
        {title}
      </h3>
      <div style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text)' }}>
        {children}
      </div>
    </div>
  )
}

function SubCard({ title, children }) {
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1.5px solid var(--border)',
      borderRadius: '10px', padding: '12px 14px', marginBottom: '10px',
      fontSize: '14px', lineHeight: 1.7,
    }}>
      <p style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{title}</p>
      <p style={{ color: 'var(--text2)' }}>{children}</p>
    </div>
  )
}
