import {
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './Footer.css'

function Footer() {
  return (
    <footer className="glitter-footer">
      <div className="footer-left">
        <span>© 2025 Aimpon Technologies</span>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
      <div className="footer-right">
        <a href="#" aria-label="GitHub"><FaGithub /></a>
        <a href="#" aria-label="Twitter"><FaXTwitter /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="#" aria-label="Discord"><FaDiscord /></a>
      </div>
    </footer>
  )
}

export default Footer
