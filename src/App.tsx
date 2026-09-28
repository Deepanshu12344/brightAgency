import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import VideoSection from './components/VideoSection'
import GetStartedSection from './components/GetStartedSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import { useScrollAnimations } from './hooks/useScrollAnimations'

function HomePage() {
  useScrollAnimations()

  return (
    <>
      <Header />
      <HeroSection />
      <VideoSection />
      <GetStartedSection />
      <TeamSection />
      <Footer />
    </>
  )
}

export default function App() {
  return window.location.pathname === '/contact' ? <ContactPage /> : <HomePage />
}
