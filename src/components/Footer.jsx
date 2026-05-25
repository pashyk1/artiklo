'use client'

export default function Footer() {
  return (
    <footer style={{
      maxWidth: '680px',
      margin: '0 auto',
      padding: '2rem 1rem 2.5rem',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text2)' }}>
        artiklo<span style={{ color: 'var(--yellow)' }}>.</span>de
      </span>

      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="/impressum" style={linkStyle}>Impressum</a>
        <a href="/datenschutz" style={linkStyle}>Datenschutz</a>
      </nav>

      <span style={{ fontSize: '12px', color: 'var(--text2)', opacity: 0.6 }}>
        © {new Date().getFullYear()} Pavels Lipins
      </span>
    </footer>
  )
}

const linkStyle = {
  fontSize: '13px',
  color: 'var(--text2)',
  textDecoration: 'none',
  transition: 'color 0.15s',
}
