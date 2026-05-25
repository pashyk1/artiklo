'use client'

import Footer from '../components/Footer'

export default function Impressum() {
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
          Impressum
        </h1>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
          <Section title="Angaben gemäß § 5 TMG">
            <p>Pavels Lipins</p>
            <p>Riedwiesenweg 17</p>
            <p>69181 Leimen</p>
            <p>Deutschland</p>
          </Section>

          <Section title="Kontakt">
            <p>E-Mail: <a href="mailto:info@artiklo.de"
              style={{ color: 'var(--yellow)', textDecoration: 'none', fontWeight: 600 }}>
              info@artiklo.de
            </a></p>
          </Section>

          <Section title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
            <p>Pavels Lipins</p>
            <p>Riedwiesenweg 17, 69181 Leimen</p>
          </Section>

          <Section title="Haftung für Inhalte">
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen.</p>
          </Section>

          <Section title="Haftung für Links">
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber verantwortlich.</p>
          </Section>

          <Section title="Urheberrecht">
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung außerhalb der Grenzen des Urheberrechtes bedarf der
            schriftlichen Zustimmung des jeweiligen Autors.</p>
          </Section>

          <Section title="EU-Streitschlichtung">
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--yellow)', textDecoration: 'none', fontWeight: 600 }}>
                ec.europa.eu/consumers/odr
              </a>. Wir nehmen nicht an Streitbeilegungsverfahren teil.</p>
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
      <div style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {children}
      </div>
    </div>
  )
}
