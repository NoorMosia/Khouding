import { useState } from 'react'
import GitHubIcon from '../../components/icons/GitHubIcon'
import GoogleIcon from '../../components/icons/GoogleIcon'
import s from './Auth.module.css'

type AuthView = 'login' | 'signup' | 'forgot'

export default function Auth() {
  const [view, setView] = useState<AuthView>('login')

  return (
    <div className={`${s.page} page-enter`}>
      <div className={s.split}>
        {/* ── Form side ──────────────────────────────────────────── */}
        <div className={s.formSide}>
          {view === 'login'  && <LoginForm  onSwap={() => setView('signup')} onForgot={() => setView('forgot')} />}
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
          <span className={s.brandLater}>map goes here later</span>
        </div>
      </div>
    </div>
  )
}

// ── Login form ────────────────────────────────────────────────────────────

function LoginForm({ onSwap, onForgot }: { onSwap: () => void; onForgot: () => void }) {
  return (
    <div className={`${s.formWrap} ${s.pane}`}>
      <h1 className={s.heading}>Welcome back</h1>
      <p className={s.sub}>Log in to pick up where you left off.</p>

      <div className={s.social}>
        <SocialBtn icon="github" label="Continue with GitHub" />
        <SocialBtn icon="google"  label="Continue with Google" />
      </div>

      <div className={s.divider}>or with email</div>

      <div className={s.field}>
        <div className={s.fieldLabel}><label htmlFor="login-email">Email</label></div>
        <input id="login-email" className={s.input} type="email" placeholder="you@example.com" autoComplete="email" />
      </div>

      <div className={s.field}>
        <div className={s.fieldLabel}>
          <label htmlFor="login-pw">Password</label>
          <button className={s.forgotLink} type="button" onClick={onForgot}>Forgot?</button>
        </div>
        <input id="login-pw" className={s.input} type="password" placeholder="••••••••" autoComplete="current-password" />
      </div>

      <button className={s.submitBtn} type="button">Log in</button>

      <p className={s.swap}>
        New here?{' '}
        <button className={s.swapLink} type="button" onClick={onSwap}>Create an account</button>
      </p>
    </div>
  )
}

// ── Sign up form ──────────────────────────────────────────────────────────

function SignupForm({ onSwap }: { onSwap: () => void }) {
  return (
    <div className={`${s.formWrap} ${s.pane}`}>
      <h1 className={s.heading}>Start learning</h1>
      <p className={s.sub}>Create an account. Self-paced, nothing locked.</p>

      <div className={s.social}>
        <SocialBtn icon="github" label="Sign up with GitHub" />
        <SocialBtn icon="google"  label="Sign up with Google" />
      </div>

      <div className={s.divider}>or with email</div>

      <div className={s.field}>
        <div className={s.fieldLabel}><label htmlFor="signup-email">Email</label></div>
        <input id="signup-email" className={s.input} type="email" placeholder="you@example.com" autoComplete="email" />
      </div>

      <div className={s.field}>
        <div className={s.fieldLabel}><label htmlFor="signup-pw">Password</label></div>
        <input id="signup-pw" className={s.input} type="password" placeholder="choose a password" autoComplete="new-password" />
      </div>

      <button className={s.submitBtn} type="button">Create account</button>

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
  return (
    <div className={`${s.formWrap} ${s.pane}`}>
      <button className={s.backLink} type="button" onClick={onBack}>← back to log in</button>
      <h1 className={s.heading}>Reset your password</h1>
      <p className={s.sub}>Enter your email and we'll send a reset link.</p>

      <div className={s.field}>
        <div className={s.fieldLabel}><label htmlFor="forgot-email">Email</label></div>
        <input id="forgot-email" className={s.input} type="email" placeholder="you@example.com" autoComplete="email" />
      </div>

      <button className={s.submitBtn} type="button">Send reset link</button>

      <p className={s.finePrint}>
        Signed up with GitHub or Google? Just use that button on the log in screen.
      </p>
    </div>
  )
}

// ── Shared social button ──────────────────────────────────────────────────

function SocialBtn({ icon, label }: { icon: 'github' | 'google'; label: string }) {
  return (
    <button className={s.socialBtn} type="button">
      <span className={s.socialIcon} aria-hidden="true">
        {icon === 'github' ? <GitHubIcon size={18} /> : <GoogleIcon size={18} />}
      </span>
      {label}
    </button>
  )
}
