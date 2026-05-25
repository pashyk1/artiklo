'use client'

import Footer from '../../components/Footer'

export default function UeberArtiklo() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '1.25rem 1rem 2rem' }}>
        <header style={{
          background: '#2a2824', borderRadius: '10px', padding: '0.85rem 1.25rem',
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          width: '90vw', maxWidth: '1200px',
        }}>
          <a href="/" style={{ fontSize: '17px', fontWeight: 700, color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            artiklo<span style={{ color: '#F5C200' }}>.</span>de
          </a>
          <nav style={{ display: 'flex', gap: '4px', flex: 1, padding: '0 0.75rem' }}>
            <a href="/ueber-artiklo" style={{
              fontSize: '13px', fontWeight: 600, padding: '8px 12px', borderRadius: '8px',
              color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.1)',
            }}>Über Artiklo</a>
          </nav>
          <a href="/" style={{
            fontSize: '13px', fontWeight: 700, padding: '7px 14px', borderRadius: '8px',
            background: '#F5C200', color: '#2a2824', textDecoration: 'none',
          }}>Zum Tool →</a>
        </header>
      </div>

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '2rem 1rem 4rem' }}>

        {/* Hero */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--text2)', marginBottom: '12px',
          }}>Über das Projekt</p>
          <h1 style={{
            fontSize: '42px', fontWeight: 700, letterSpacing: '-1px',
            lineHeight: 1.15, marginBottom: '1.25rem', color: 'var(--text)',
          }}>
            Der, die oder das?<br />
            <span style={{ color: '#b89000' }}>Keine Ahnung.</span>
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--text2)', marginBottom: '1rem' }}>
            Deutsch lernen ist gar nicht so schwer — bis man merkt, dass jedes Substantiv
            einen Artikel hat. Und der ist meistens alles andere als logisch.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--text2)' }}>
            Warum ist <em>das Mädchen</em> sächlich, obwohl es ein Mädchen ist?
            Warum ist <em>der Löffel</em> männlich, aber <em>die Gabel</em> weiblich?
            Fragen, auf die es keine gute Antwort gibt — außer: auswendig lernen.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '3rem' }} />

        {/* Was ist artiklo */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.4px', marginBottom: '1rem' }}>
            Was ist artiklo.de?
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text2)', marginBottom: '1rem' }}>
            artiklo.de ist ein schnelles Nachschlagewerk für deutsche Artikel —
            ohne Anmeldung, ohne Ablenkung, ohne Werbung. Einfach Wort eingeben, Artikel finden.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text2)' }}>
            Hinter jeder Suche stecken <strong style={{ color: 'var(--text)' }}>117.000 Wörter</strong> aus
            dem deutschen Wortschatz — mit Artikel, Deklination und Beispielsätzen.
            Weil manchmal reicht „der" nicht — man will auch wissen, wie es in der Praxis klingt.
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          gap: '12px', marginBottom: '3rem',
        }}>
          {[
            { value: '117.000', label: 'Wörter im Wörterbuch' },
            { value: '9', label: 'Sprachen für Übersetzungen' },
            { value: '∞', label: 'Quizfragen zum Üben' },
          ].map(({ value, label }) => (
            <div key={label} style={{
              background: 'var(--bg-card)', border: '1.5px solid var(--border)',
              borderRadius: '10px', padding: '1.25rem 1rem', textAlign: 'center',
            }}>
              <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--text)', marginBottom: '6px' }}>
                {value}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text2)', lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Noch im Aufbau */}
        <div style={{
          background: 'var(--bg-card)', border: '1.5px solid var(--border)',
          borderLeft: '3px solid #F5C200',
          borderRadius: '10px', padding: '1.25rem 1.5rem', marginBottom: '3rem',
        }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>
            🚧 Das Projekt wächst noch
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--text2)' }}>
            artiklo.de ist noch jung — aber es wird stetig besser. Neue Funktionen,
            mehr Lernmodi und ein verlässliches Tool für Deutschlernende aus aller Welt:
            das ist das Ziel. Wer früh dabei ist, erlebt den Weg mit.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="/" style={{
            display: 'inline-block', padding: '14px 36px',
            background: '#F5C200', color: '#2a2824',
            fontSize: '15px', fontWeight: 700,
            borderRadius: '10px', textDecoration: 'none',
            transition: 'background 0.15s',
          }}>
            Artikel nachschlagen →
          </a>
          <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text2)' }}>
            Fragen oder Feedback?{' '}
            <a href="mailto:info@artiklo.de" style={{ color: '#b89000', fontWeight: 600, textDecoration: 'none' }}>
              info@artiklo.de
            </a>
          </p>
        </div>

      </div>
      <Footer />
    </div>
  )
}
