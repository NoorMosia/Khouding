import s from './Profile.module.css'

export default function Profile() {
  return (
    <div className={`${s.page} page-enter`}>
      <h1 className={s.heading}>Account &amp; profile</h1>

      <div className={s.field}>
        <label>Display name</label>
        <div className={s.fieldValue}>Noortje</div>
      </div>
      <div className={s.field}>
        <label>Email</label>
        <div className={s.fieldValue}>noortje@example.com</div>
      </div>

      <h2 className={s.heading}>Login methods</h2>

      <div className={s.loginRow}>
        <span className={s.loginIcon}>@</span>
        <span className={s.loginLabel}>Email &amp; password</span>
        <span className={s.loginStatus}>set</span>
      </div>
      <div className={s.loginRow}>
        <span className={s.loginIcon}>G</span>
        <span className={s.loginLabel}>Google</span>
        <span className={s.loginStatus}>linked</span>
      </div>
      <div className={s.loginRow}>
        <span className={s.loginIcon}>GH</span>
        <span className={s.loginLabel}>GitHub</span>
        <button className="btn btn--sm">link</button>
      </div>

      <h2 className={s.heading}>Community</h2>
      <div className={s.reserved}>
        reserved: your khommunity badges &amp; shield appear here once community ships
      </div>
    </div>
  )
}
