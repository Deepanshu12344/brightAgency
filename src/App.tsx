import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import VideoSection from './components/VideoSection'
import GetStartedSection from './components/GetStartedSection'
import Footer from './components/Footer'
import { useScrollAnimations } from './hooks/useScrollAnimations'

export default function App() {
  useScrollAnimations()

  return (
    <>
      <Header />
      <HeroSection />
      <VideoSection />
      <GetStartedSection />
      <Footer />
    </>
  )
}
