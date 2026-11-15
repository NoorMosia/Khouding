import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import GitHubIcon from '../../components/icons/GitHubIcon'
import GoogleIcon from '../../components/icons/GoogleIcon'
import { useAuth } from '../../context/AuthContext'
import AuthMap from './AuthMap'
import s from './Auth.module.css'

type AuthView = 'login' | 'signup' | 'forgot'

export default function Auth() {
  const [view, setView] = useState<AuthView>('login')
  const [searchParams] = useSearchParams()

  const oauthError = searchParams.get('error')
  const oauthErrorMessage = oauthError ? {
    callback_failed:        'Sign-in failed. Please try again.',
    no_email:               'Your account has no verified email address. Use email and password instead.',
    account_creation_failed:'Could not create an account. Please try again.',
    login_link_failed:      'Could not link your account. Please try again.',
  }[oauthError] ?? 'Something went wrong. Please try again.' : null

  return (
    <div className={`${s.page} page-enter`}>
      <div className={s.split}>
        {/* ── Form side ──────────────────────────────────────────── */}
        <div className={s.formSide}>
          {view === 'login'  && <LoginForm  onSwap={() => setView('signup')} onForgot={() => setView('forgot')} oauthError={oauthErrorMessage} />}
          {view === 'signup' && <SignupForm onSwap={() => setView('login')} />}
          {view === 'forgot' && <ForgotForm onBack={() => setView('login')} />}
        </div>

        {/* ── Brand side ─────────────────────────────────────────── */}
        <div className={s.brandSide} aria-hidden="true">
          <div className={s.brandSlogan}>Learn to code like it&apos;s 2016.</div>
          <div className={s.brandTagline}>
            A real standard, a built-in editor that grades you, and a world
            you fill in as you learn.
          </div>
          <AuthMap />
        </div>
      </div>
    </div>
  )
}

// ── Login form ────────────────────────────────────────────────────────────

function LoginForm({ onSwap, onForgot, oauthError }: { onSwap: () => void; onForgot: () => void; oauthError?: string | null }) {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState<string | null>(null)
  const [busy, setBusy]         = useState(false)

  async function handleSubmit() {
    setError(null)
    setBusy(true)
    try {
      await login(email, password)
      navigate('/courses')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Login failed')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={`${s.formWrap} ${s.pane}`}>
      <h1 className={s.heading}>Welcome back</h1>
      <p className={s.sub}>Log in to pick up where you left off.</p>

      <div className={s.social}>
        <SocialBtn icon="github" label="Continue with GitHub" />
        <SocialBtn icon="google" label="Continue with Google" />
      </div>

      <div className={s.divider}>or with email</div>

      {oauthError && <p className={s.errorMsg}>{oauthError}</p>}
      {error && <p className={s.errorMsg}>{error}</p>}

      <div className={s.field}>
        <div className={s.fieldLabel}><label htmlFor="login-email">Email</label></div>
        <input
          id="login-email" className={s.input} type="email"
          placeholder="you@example.com" autoComplete="email"
          value={email} onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />
      </div>

      <div className={s.field}>
        <div className={s.fieldLabel}>
          <label htmlFor="login-pw">Password</label>
          <button className={s.forgotLink} type="button" onClick={onForgot}>Forgot?</button>
        </div>
        <input
          id="login-pw" className={s.input} type="password"
          placeholder="••••••••" autoComplete="current-password"
          value={password} onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />
      </div>

      <button className={s.submitBtn} type="button" onClick={handleSubmit} disabled={busy}>
        {busy ? 'Logging in…' : 'Log in'}
      </button>

      <p className={s.swap}>
        New here?{' '}
        <button className={s.swapLink} type="button" onClick={onSwap}>Create an account</button>
      </p>
    </div>
  )
}

// ── Sign up form ──────────────────────────────────────────────────────────

function SignupForm({ onSwap }: { onSwap: () => void }) {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState<string | null>(null)
  const [busy, setBusy]         = useState(false)

  async function handleSubmit() {
    setError(null)
    setBusy(true)
    try {
      await register(email, password)
      navigate('/courses')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Registration failed')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={`${s.formWrap} ${s.pane}`}>
      <h1 className={s.heading}>Start learning</h1>
      <p className={s.sub}>Create an account. Self-paced, nothing locked.</p>

      <div className={s.social}>
        <SocialBtn icon="github" label="Sign up with GitHub" />
        <SocialBtn icon="google" label="Sign up with Google" />
      </div>

      <div className={s.divider}>or with email</div>

      {error && <p className={s.errorMsg}>{error}</p>}

      <div className={s.field}>
        <div className={s.fieldLabel}><label htmlFor="signup-email">Email</label></div>
        <input
          id="signup-email" className={s.input} type="email"
          placeholder="you@example.com" autoComplete="email"
          value={email} onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />
      </div>

      <div className={s.field}>
        <div className={s.fieldLabel}><label htmlFor="signup-pw">Password</label></div>
        <input
          id="signup-pw" className={s.input} type="password"
          placeholder="choose a password" autoComplete="new-password"
          value={password} onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />
      </div>

      <button className={s.submitBtn} type="button" onClick={handleSubmit} disabled={busy}>
        {busy ? 'Creating account…' : 'Create account'}
      </button>

      <p className={s.swap}>
        Already have an account?{' '}
        <button className={s.swapLink} type="button" onClick={onSwap}>Log in</button>
      </p>
      <p className={s.finePrint}>By signing up you agree to the terms and privacy policy.</p>
    </div>
  )
}

// ── Forgot password form ──────────────────────────────────────────────────

function ForgotForm({ onBack }: { onBack: () => void }) {
  const { forgotPassword } = useAuth()
  const [email, setEmail]   = useState('')
  const [busy, setBusy]     = useState(false)
  const [sent, setSent]     = useState(false)
  const [error, setError]   = useState<string | null>(null)

  async function handleSubmit() {
    if (!email.trim()) return
    setError(null)
    setBusy(true)
    try {
      await forgotPassword(email)
      setSent(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setBusy(false)
    }
  }

  if (sent) {
    return (
      <div className={`${s.formWrap} ${s.pane}`}>
        <button className={s.backLink} type="button" onClick={onBack}>← back to log in</button>
        <h1 className={s.heading}>Check your email</h1>
        <p className={s.sub}>
          If an account exists for <strong>{email}</strong>, a reset link is on its way. Check your spam folder if it doesn't arrive.
        </p>
      </div>
    )
  }

  return (
    <div className={`${s.formWrap} ${s.pane}`}>
      <button className={s.backLink} type="button" onClick={onBack}>← back to log in</button>
      <h1 className={s.heading}>Reset your password</h1>
      <p className={s.sub}>Enter your email and we'll send a reset link.</p>

      {error && <p className={s.errorMsg}>{error}</p>}

      <div className={s.field}>
        <div className={s.fieldLabel}><label htmlFor="forgot-email">Email</label></div>
        <input
          id="forgot-email" className={s.input} type="email"
          placeholder="you@example.com" autoComplete="email"
          value={email} onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />
      </div>

      <button className={s.submitBtn} type="button" onClick={handleSubmit} disabled={busy || !email.trim()}>
        {busy ? 'Sending…' : 'Send reset link'}
      </button>

      <p className={s.finePrint}>
        Signed up with GitHub or Google? Just use that button on the log in screen.
      </p>
    </div>
  )
}

// ── Shared social button ──────────────────────────────────────────────────

function SocialBtn({ icon, label }: { icon: 'github' | 'google'; label: string }) {
  function handleClick() {
    window.location.href = `/api/auth/login/${icon}`
  }

  return (
    <button className={s.socialBtn} type="button" onClick={handleClick}>
      <span className={s.socialIcon} aria-hidden="true">
        {icon === 'github' ? <GitHubIcon size={18} /> : <GoogleIcon size={18} />}
      </span>
      {label}
    </button>
  )
}
