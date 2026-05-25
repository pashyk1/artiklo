'use client'

import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Auth({ onClose }) {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth()
  const [mode, setMode]       = useState('login') // 'login' | 'register'
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const handleGoogle = async () => {
    setError('')
    await signInWithGoogle()
  }

  const handleSubmit = async () => {
    setError('')
    setSuccess('')
    if (!email || !password) { setError('Bitte E-Mail und Passwort eingeben.'); return }
    if (password.length < 6)  { setError('Passwort muss mindestens 6 Zeichen haben.'); return }

    setLoading(true)
    const fn = mode === 'login' ? signInWithEmail : signUpWithEmail
    const { error: err } = await fn(email, password)
    setLoading(false)

    if (err) {
      if (err.message.includes('Invalid login')) setError('E-Mail oder Passwort falsch.')
      else if (err.message.includes('already registered')) setError('Diese E-Mail ist bereits registriert.')
      else setError(err.message)
    } else {
      if (mode === 'register') {
        setSuccess('Bestätigungsmail gesendet! Bitte E-Mail prüfen.')
      } else {
        onClose()
      }
    }
  }

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>✕</button>

        <h2 className="auth-title">
          {mode === 'login' ? 'Anmelden' : 'Registrieren'}
        </h2>

        {/* Google Button */}
        <button className="auth-google-btn" onClick={handleGoogle}>
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Mit Google anmelden
        </button>

        <div className="auth-divider"><span>oder</span></div>

        {/* Email/Password */}
        <input
          className="auth-input"
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Passwort (min. 6 Zeichen)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />

        {error   && <p className="auth-error">{error}</p>}
        {success && <p className="auth-success">{success}</p>}

        <button className="auth-submit-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? '...' : mode === 'login' ? 'Anmelden' : 'Registrieren'}
        </button>

        <p className="auth-switch">
          {mode === 'login' ? (
            <>Noch kein Konto? <button onClick={() => { setMode('register'); setError('') }}>Registrieren</button></>
          ) : (
            <>Bereits registriert? <button onClick={() => { setMode('login'); setError('') }}>Anmelden</button></>
          )}
        </p>
      </div>
    </div>
  )
}
