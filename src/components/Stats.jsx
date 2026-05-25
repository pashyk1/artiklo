'use client'

import { useAuth } from '../context/AuthContext'

export default function Stats({ t, stats, onLoginRequest }) {
  const { user } = useAuth()
  const { correct, total, streak, known } = stats
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : null

  // Залогинен — показываем статистику
  if (user) {
    return (
      <div>
        <div className="stats-header" style={{ marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.4px' }}>
            {t.tabStats}
          </h2>
        </div>
        <div className="stats-grid">
          <div className="stat-card"><div className="stat-label">{t.statCorrect}</div><div className="stat-value">{correct}</div></div>
          <div className="stat-card"><div className="stat-label">{t.statAcc}</div><div className="stat-value">{accuracy !== null ? `${accuracy}%` : '—'}</div></div>
          <div className="stat-card"><div className="stat-label">{t.statStreak}</div><div className="stat-value">{streak}</div></div>
          <div className="stat-card"><div className="stat-label">{t.statTotal}</div><div className="stat-value">{total}</div></div>
        </div>
      </div>
    )
  }

  // Не залогинен — CTA
  return (
    <div>
      <div className="register-cta">
        <div className="cta-icon">📈</div>
        <div className="cta-title">{t.ctaTitle}</div>
        <div className="cta-sub">{t.ctaSub}</div>
        <button className="cta-btn" onClick={onLoginRequest}>{t.ctaRegister}</button>
        <span className="cta-login">
          {t.ctaHaveAccount} <span onClick={onLoginRequest} style={{ cursor: 'pointer' }}>{t.ctaLogin}</span>
        </span>
      </div>

      <div className="stats-preview">
        <div className="stat-card"><div className="stat-label">{t.statCorrect}</div><div className="stat-value">{correct}</div></div>
        <div className="stat-card"><div className="stat-label">{t.statAcc}</div><div className="stat-value">{accuracy !== null ? `${accuracy}%` : '—'}</div></div>
        <div className="stat-card"><div className="stat-label">{t.statStreak}</div><div className="stat-value">{streak}</div></div>
        <div className="stat-card"><div className="stat-label">{t.statTotal}</div><div className="stat-value">{total}</div></div>
      </div>
    </div>
  )
}
