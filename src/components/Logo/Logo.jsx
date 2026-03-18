import logoImg from '../../assets/logo.png'
import './Logo.css'

function Logo() {
  return (
    <div className="corner-logo">
      <img src={logoImg} alt="Aimpon logo" className="logo-image" />
    </div>
  )
}

export default Logo
