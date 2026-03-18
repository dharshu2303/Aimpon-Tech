import Logo from './components/Logo/Logo'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import GlowEffects from './components/GlowEffects/GlowEffects'

function App() {
  return (
    <>
      <Logo />
      <Navbar />
      <div className="page-wrap">
        <Hero />
      </div>
      <Footer />
      <GlowEffects />
    </>
  )
}

export default App
