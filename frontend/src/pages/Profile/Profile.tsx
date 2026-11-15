import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import s from './Profile.module.css'

export default function Profile() {
  const { user, logout, updateDisplayName } = useAuth()
  const navigate = useNavigate()

  const [nameValue, setNameValue]   = useState('')
  const [editing, setEditing]       = useState(false)
  const [busy, setBusy]             = useState(false)
  const [nameError, setNameError]   = useState<string | null>(null)
  const [nameSaved, setNameSaved]   = useState(false)

  if (!user) {
    return (
      <div className={`${s.page} page-enter`}>
        <h1 className={s.heading}>Account</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          You are not logged in.{' '}
          <button className={s.linkBtn} onClick={() => navigate('/auth/login')}>
            Log in
          </button>
        </p>
      </div>
    )
  }

  async function handleLogout() {
    await logout()
    navigate('/')
  }

  function startEdit() {
    setNameValue(user!.displayName)
    setEditing(true)
    setNameError(null)
    setNameSaved(false)
  }

  async function handleSaveName() {
    if (!nameValue.trim()) { setNameError('Name cannot be empty.'); return }
    if (nameValue.trim().length > 40) { setNameError('Max 40 characters.'); return }
    setBusy(true)
    setNameError(null)
    try {
      await updateDisplayName(nameValue.trim())
      setEditing(false)
      setNameSaved(true)
      setTimeout(() => setNameSaved(false), 3000)
    } catch (e) {
      setNameError(e instanceof Error ? e.message : 'Update failed')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={`${s.page} page-enter`}>
      <h1 className={s.heading}>Account</h1>

      <div className={s.field}>
        <label>Email</label>
        <div className={s.fieldValue}>{user.email}</div>
      </div>

      <div className={s.field}>
        <label>Display name</label>
        {editing ? (
          <div className={s.nameEdit}>
            <input
              className={s.nameInput}
              type="text"
              value={nameValue}
              onChange={e => setNameValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSaveName()}
              maxLength={40}
              autoFocus
            />
            <button className="btn btn--primary btn--sm" onClick={handleSaveName} disabled={busy}>
              {busy ? 'Saving…' : 'Save'}
            </button>
            <button className="btn btn--sm" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <div className={s.nameRow}>
            <span className={s.fieldValue}>{user.displayName}</span>
            <button className={s.editBtn} onClick={startEdit}>change</button>
            {nameSaved && <span className={s.saved}>saved</span>}
          </div>
        )}
        {nameError && <p className={s.fieldError}>{nameError}</p>}
      </div>

      <h2 className={s.heading}>Community</h2>
      <div className={s.reserved}>
        reserved: badges and shield appear here once community ships
      </div>

      <div style={{ marginTop: 32 }}>
        <button className="btn" onClick={handleLogout}>Log out</button>
      </div>
    </div>
  )
}
