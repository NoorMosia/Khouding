import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import s from './Auth.module.css'

export default function ResetPassword() {
  const [searchParams]          = useSearchParams()
  const email                   = searchParams.get('email') ?? ''
  const token                   = searchParams.get('token') ?? ''
  const { resetPassword }       = useAuth()
  const navigate                = useNavigate()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm]   = useState('')
  const [busy, setBusy]         = useState(false)
  const [error, setError]       = useState<string | null>(null)
  const [done, setDone]         = useState(false)

  if (!email || !token) {
    return (
      <div className={`${s.page} page-enter`}>
        <div className={s.split}>
          <div className={s.formSide}>
            <div className={`${s.formWrap} ${s.pane}`}>
              <h1 className={s.heading}>Invalid link</h1>
              <p className={s.sub}>This reset link is missing required information. Request a new one from the login page.</p>
              <button className={s.submitBtn} type="button" onClick={() => navigate('/auth/login')}>
                Back to log in
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (done) {
    return (
      <div className={`${s.page} page-enter`}>
        <div className={s.split}>
          <div className={s.formSide}>
            <div className={`${s.formWrap} ${s.pane}`}>
              <h1 className={s.heading}>Password updated</h1>
              <p className={s.sub}>Your password has been reset. You can now log in with your new password.</p>
              <button className={s.submitBtn} type="button" onClick={() => navigate('/auth/login')}>
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  async function handleSubmit() {
    setError(null)
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    setBusy(true)
    try {
      await resetPassword(email, token, password)
      setDone(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Reset failed. The link may have expired.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={`${s.page} page-enter`}>
      <div className={s.split}>
        <div className={s.formSide}>
          <div className={`${s.formWrap} ${s.pane}`}>
            <h1 className={s.heading}>Choose a new password</h1>
            <p className={s.sub}>Resetting password for <strong>{email}</strong>.</p>

            {error && <p className={s.errorMsg}>{error}</p>}

            <div className={s.field}>
              <div className={s.fieldLabel}><label htmlFor="reset-pw">New password</label></div>
              <input
                id="reset-pw" className={s.input} type="password"
                placeholder="at least 8 characters" autoComplete="new-password"
                value={password} onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />
            </div>

            <div className={s.field}>
              <div className={s.fieldLabel}><label htmlFor="reset-pw-confirm">Confirm password</label></div>
              <input
                id="reset-pw-confirm" className={s.input} type="password"
                placeholder="same again" autoComplete="new-password"
                value={confirm} onChange={e => setConfirm(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />
            </div>

            <button className={s.submitBtn} type="button" onClick={handleSubmit} disabled={busy}>
              {busy ? 'Saving…' : 'Set new password'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
