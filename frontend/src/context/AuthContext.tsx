import { createContext, useCallback, useContext, useEffect, useState } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────

export interface AuthUser {
  id: string
  email: string
  displayName: string
}

interface AuthState {
  user: AuthUser | null
  loading: boolean
}

interface AuthActions {
  login:             (email: string, password: string) => Promise<void>
  register:          (email: string, password: string) => Promise<void>
  logout:            () => Promise<void>
  refresh:           () => Promise<void>
  forgotPassword:    (email: string) => Promise<void>
  resetPassword:     (email: string, token: string, newPassword: string) => Promise<void>
  updateDisplayName: (displayName: string) => Promise<void>
}

type AuthContextValue = AuthState & AuthActions

// ── Context ───────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | null>(null)

// ── Provider ──────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, loading: true })

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/me', { credentials: 'include' })
      if (res.ok) {
        const user: AuthUser = await res.json()
        setState({ user, loading: false })
      } else {
        setState({ user: null, loading: false })
      }
    } catch {
      setState({ user: null, loading: false })
    }
  }, [])

  // Check session on mount
  useEffect(() => { refresh() }, [refresh])

  const login = useCallback(async (email: string, password: string) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new Error(body.error ?? 'Login failed')
    }
    const user: AuthUser = await res.json()
    setState({ user, loading: false })
  }, [])

  const register = useCallback(async (email: string, password: string) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      const msg = body.errors ? (body.errors as string[]).join(' ') : (body.error ?? 'Registration failed')
      throw new Error(msg)
    }
    const user: AuthUser = await res.json()
    setState({ user, loading: false })
  }, [])

  const logout = useCallback(async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
    setState({ user: null, loading: false })
  }, [])

  const forgotPassword = useCallback(async (email: string) => {
    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email }),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new Error(body.error ?? 'Request failed')
    }
  }, [])

  const resetPassword = useCallback(async (email: string, token: string, newPassword: string) => {
    const res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, token, newPassword }),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      const msg = body.errors ? (body.errors as string[]).join(' ') : (body.error ?? 'Reset failed')
      throw new Error(msg)
    }
  }, [])

  const updateDisplayName = useCallback(async (displayName: string) => {
    const res = await fetch('/api/auth/display-name', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ displayName }),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new Error(body.error ?? 'Update failed')
    }
    const user: AuthUser = await res.json()
    setState(s => ({ ...s, user }))
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout, refresh, forgotPassword, resetPassword, updateDisplayName }}>
      {children}
    </AuthContext.Provider>
  )
}

// ── Hook ──────────────────────────────────────────────────────────────────

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
