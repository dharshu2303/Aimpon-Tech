import {
  FaHome,
  FaUserAstronaut,
  FaCog,
  FaCube,
  FaUsers,
  FaEnvelope,
} from 'react-icons/fa'
import './Navbar.css'

const navItems = [
  { icon: <FaHome />, label: 'Home', href: '#' },
  { icon: <FaUserAstronaut />, label: 'About', href: '#' },
  { icon: <FaCog />, label: 'Services', href: '#' },
  { icon: <FaCube />, label: 'Products', href: '#' },
  { icon: <FaUsers />, label: 'Team', href: '#' },
  { icon: <FaEnvelope />, label: 'Contact', href: '#' },
]

function Navbar() {
  return (
    <nav className="mid-icon-box" aria-label="Main navigation">
      {navItems.map((item) => (
        <a key={item.label} href={item.href} aria-label={item.label}>
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}

export default Navbar
