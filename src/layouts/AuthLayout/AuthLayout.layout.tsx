import { Outlet } from 'react-router-dom'
import './index.scss'

const AuthLayout = () => {
  return (
    <div className="AuthLayout">
      <div className="form-card">
        <h1>TASK TRACKER</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
