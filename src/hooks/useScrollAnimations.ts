import { useEffect } from 'react'

const states = [
  { scroll: 0, opacity: 1, rotate: 0, scale: 1 },
  { scroll: 0.33, opacity: 0.5681, rotate: 19.4352, scale: 1.6478 },
  { scroll: 0.66, opacity: 0.1362, rotate: 38.8704, scale: 2.297 },
  { scroll: 1, opacity: 0, rotate: 45, scale: 2.5 },
]

function interpolate(scrollProgress: number) {
  if (scrollProgress >= 1) return states[states.length - 1]
  if (scrollProgress <= 0) return states[0]

  let startState = states[0]
  let endState = states[states.length - 1]

  for (let i = 0; i < states.length - 1; i++) {
    if (scrollProgress >= states[i].scroll && scrollProgress <= states[i + 1].scroll) {
      startState = states[i]
      endState = states[i + 1]
      break
    }
  }

  const range = endState.scroll - startState.scroll
  const progress = (scrollProgress - startState.scroll) / range

  return {
    opacity: startState.opacity + (endState.opacity - startState.opacity) * progress,
    rotate: startState.rotate + (endState.rotate - startState.rotate) * progress,
    scale: startState.scale + (endState.scale - startState.scale) * progress,
  }
}

const HERO_SCROLL_END = 800

const hyperspaceData = [
  { src: 'img1.jpg', x: -900, y: 0, baseZ: -1000, scale: 1.5, speed: 1.3 },
  { src: 'img2.jpg', x: -400, y: -250, baseZ: -2000, scale: 1, speed: 0.82 },
  { src: 'img3.jpg', x: -350, y: 350, baseZ: -1500, scale: 1.1, speed: 1.1 },
  { src: 'img4.jpg', x: -250, y: -250, baseZ: -3000, scale: 0.6, speed: 1.45 },
  { src: 'img5.jpg', x: 200, y: -250, baseZ: -2500, scale: 0.9, speed: 0.72 },
  { src: 'img6.jpg', x: 500, y: 100, baseZ: -1800, scale: 1.2, speed: 1.2 },
  { src: 'img7.jpg', x: 250, y: 350, baseZ: -1200, scale: 1.3, speed: 0.9 },
  { src: 'img8.jpg', x: 800, y: -450, baseZ: -4000, scale: 0.8, speed: 1.55 },
  { src: 'img9.jpg', x: -700, y: 450, baseZ: -3500, scale: 0.9, speed: 0.65 },
]

export function useScrollAnimations() {
  useEffect(() => {
    // --- ROLLUP ANIMATION SETUP ---
    document.querySelectorAll<HTMLElement>('.menu-item-title, .btn:not(.btn-rollup)').forEach(el => {
      const originalHTML = el.innerHTML
      el.innerHTML = `
        <span class="rollup-wrapper">
          <span class="rollup-original">${originalHTML}</span>
          <span class="rollup-duplicate">${originalHTML}</span>
        </span>
      `
    })

    // --- HYPERSPACE SETUP ---
    const hsContainer = document.createElement('div')
    hsContainer.className = 'hyperspace-container'
    document.body.appendChild(hsContainer)

    const fixedImages = hyperspaceData.map((data, i) => {
      const img = document.createElement('img')
      img.src = `/images/${data.src}`
      img.className = 'hyperspace-img'
      img.style.width = '260px'
      img.style.height = '340px'
      if (i === 0) { img.style.width = '350px'; img.style.height = '600px' }
      if (i === 3) { img.style.width = '200px'; img.style.height = '200px' }
      hsContainer.appendChild(img)
      return { ...data, el: img }
    })

    let globalZOffset = 0
    let lastScrollY = window.scrollY
    let currentScrollVelocity = 0
    const BASE_SPEED = 4.25
    let rafId: number

    function updateHyperspace() {
      const currentScrollY = window.scrollY
      const deltaY = currentScrollY - lastScrollY
      lastScrollY = currentScrollY

      const targetScrollVelocity = Math.abs(deltaY) * 2.5
      currentScrollVelocity += (targetScrollVelocity - currentScrollVelocity) * 0.1

      const speed = BASE_SPEED + currentScrollVelocity
      globalZOffset += speed

      if (currentScrollY > HERO_SCROLL_END - 200) {
        let containerOpacity = 1

        if (currentScrollY < HERO_SCROLL_END + 200) {
          containerOpacity = (currentScrollY - (HERO_SCROLL_END - 200)) / 400
        }

        const IMAGES_FADE_START = 2400
        const IMAGES_FADE_END = 3000
        if (currentScrollY > IMAGES_FADE_START) {
          containerOpacity = Math.max(0, 1 - (currentScrollY - IMAGES_FADE_START) / (IMAGES_FADE_END - IMAGES_FADE_START))
        }

        hsContainer.style.opacity = containerOpacity.toString()

        const MAX_Z = 1500, MIN_Z = -5000, RANGE = MAX_Z - MIN_Z

        fixedImages.forEach(data => {
          let currentZ = data.baseZ + globalZOffset * data.speed
          while (currentZ > MAX_Z) currentZ -= RANGE
          while (currentZ < MIN_Z) currentZ += RANGE

          const p = (currentZ - MIN_Z) / RANGE
          const warpedP = p * (2 - p)
          const visualZ = MIN_Z + warpedP * RANGE

          data.el.style.transform = `translate3d(${data.x}px, ${data.y}px, ${visualZ}px) scale(${data.scale})`
          data.el.style.opacity = '1'
        })
      } else {
        hsContainer.style.opacity = '0'
      }

      rafId = requestAnimationFrame(updateHyperspace)
    }
    rafId = requestAnimationFrame(updateHyperspace)

    // --- SCROLL ANIMATION ---
    function onScroll() {
      const scrollY = window.scrollY

      // Hero visual
      const scrollProgress = Math.min(Math.max(scrollY / HERO_SCROLL_END, 0), 1)
      const current = interpolate(scrollProgress)
      const visual = document.querySelector<HTMLElement>('.hero-visual')
      if (visual) {
        visual.style.transform = `rotate(${current.rotate}deg) scale(${current.scale})`
        visual.style.opacity = String(current.opacity)
      }

      // Hero text
      const TEXT_FADE_START = 2200, TEXT_FADE_END = 2600
      const textProgress = Math.min(Math.max((scrollY - TEXT_FADE_START) / (TEXT_FADE_END - TEXT_FADE_START), 0), 1)
      const heroContent = document.querySelector<HTMLElement>('.hero-content')
      if (heroContent) heroContent.style.opacity = String(1 - textProgress)

      // Video section
      const VIDEO_START = 2200, VIDEO_END = 4200
      const totalProgress = Math.min(Math.max((scrollY - VIDEO_START) / (VIDEO_END - VIDEO_START), 0), 1)
      const videoSection = document.querySelector<HTMLElement>('.video-section')
      const videoFrame = document.querySelector<HTMLElement>('.video-frame')
      if (videoSection && videoFrame) {
        if (totalProgress > 0 && totalProgress < 1) {
          videoSection.style.opacity = '1'
          const yOffset = 800 - 1600 * totalProgress
          const scale = 0.7 + 0.3 * Math.sin(totalProgress * Math.PI)
          videoFrame.style.transform = `translateY(${yOffset}px) scale(${scale})`
        } else if (totalProgress === 1) {
          videoSection.style.opacity = '0'
          videoFrame.style.transform = `translateY(-800px) scale(0.7)`
        } else {
          videoSection.style.opacity = '0'
          videoFrame.style.transform = `translateY(800px) scale(0.7)`
        }
      }

      // Get Started Section
      const GS_START = 3200, GS_END = 4800
      const gsProgress = Math.min(Math.max((scrollY - GS_START) / (GS_END - GS_START), 0), 1)
      const gsSection = document.querySelector<HTMLElement>('.get-started-section')
      const gsH2 = document.querySelector<HTMLElement>('.gs-header h2')
      const gsP = document.querySelector<HTMLElement>('.gs-header p')
      const gsBtn = document.querySelector<HTMLElement>('.gs-header button')
      const gsCards = document.querySelectorAll<HTMLElement>('.gs-card')

      const mapRange = (val: number, inMin: number, inMax: number) =>
        Math.min(Math.max((val - inMin) / (inMax - inMin), 0), 1)
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

      if (gsSection) {
        if (gsProgress > 0 && gsProgress < 1) {
          gsSection.style.opacity = '1'
          gsSection.style.pointerEvents = 'auto'
          gsSection.style.position = 'fixed'
          gsSection.style.top = '0'

          const sectionY = 800 - 800 * gsProgress
          gsSection.style.transform = `translateY(${sectionY}px)`

          const h2P = mapRange(gsProgress, 0.45, 0.65)
          const pP = mapRange(gsProgress, 0.50, 0.70)
          const btnP = mapRange(gsProgress, 0.55, 0.75)

          if (gsH2) { gsH2.style.opacity = String(h2P); gsH2.style.transform = `translateY(${100 * (1 - easeOut(h2P))}px)` }
          if (gsP) { gsP.style.opacity = String(pP); gsP.style.transform = `translateY(${100 * (1 - easeOut(pP))}px)` }
          if (gsBtn) { gsBtn.style.opacity = String(btnP); gsBtn.style.transform = `translateY(${100 * (1 - easeOut(btnP))}px)` }

          gsCards.forEach((card, idx) => {
            const cardP = mapRange(gsProgress, 0.65 + idx * 0.04, 0.85 + idx * 0.04)
            card.style.opacity = String(cardP)
            card.style.transform = `translateY(${150 * (1 - easeOut(cardP))}px)`
          })
        } else if (gsProgress === 1) {
          gsSection.style.position = 'absolute'
          gsSection.style.top = `${GS_END}px`
          gsSection.style.opacity = '1'
          gsSection.style.pointerEvents = 'auto'
          gsSection.style.transform = 'translateY(0px)'
          if (gsH2) { gsH2.style.opacity = '1'; gsH2.style.transform = 'translateY(0px)' }
          if (gsP) { gsP.style.opacity = '1'; gsP.style.transform = 'translateY(0px)' }
          if (gsBtn) { gsBtn.style.opacity = '1'; gsBtn.style.transform = 'translateY(0px)' }
          gsCards.forEach(card => { card.style.opacity = '1'; card.style.transform = 'translateY(0px)' })
          document.querySelector('.site-footer')?.classList.add('visible')
        } else {
          gsSection.style.position = 'fixed'
          gsSection.style.top = '0'
          gsSection.style.opacity = '0'
          gsSection.style.pointerEvents = 'none'
          gsSection.style.transform = 'translateY(800px)'
          document.querySelector('.site-footer')?.classList.remove('visible')
        }
      }
      
      // Footer Animation
      const footer = document.querySelector<HTMLElement>('.site-footer')
      if (footer) {
        const rect = footer.getBoundingClientRect()
        const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        const maxScroll = scrollHeight - window.innerHeight
        const footerAbsoluteTop = window.scrollY + rect.top
        const startScroll = footerAbsoluteTop - window.innerHeight + 150
        const totalScrollRange = Math.max(maxScroll - startScroll, 100)
        
        // progress goes from 0 to exactly 1.0 at the absolute bottom of the page
        const footerProgress = Math.min(Math.max((window.scrollY - startScroll) / totalScrollRange, 0), 1)
        
        // Sections sliding from left to right
        const revealElements = document.querySelectorAll<HTMLElement>('.footer-reveal')
        revealElements.forEach((el, idx) => {
          // Max idx is 6. 0.7 + (6 * 0.05) = 1.0 (so the last element finishes exactly at the end)
          const elProgress = mapRange(footerProgress, idx * 0.05, 0.7 + idx * 0.05)
          const easeP = easeOut(elProgress)
          
          el.style.opacity = String(easeP)
          // From left (-100px) to right (0px)
          el.style.transform = `translateX(${100 * (1 - easeP) * -1}px)`
        })

        // Main text alphabet by alphabet — tied to scroll, so it reverses on scroll up
        // Characters animate in during the last 40% of footerProgress (0.6 → 1.0)
        const footerChars = document.querySelectorAll<HTMLElement>('.footer-char')
        footerChars.forEach((char, idx) => {
          const total = footerChars.length   // 13 chars in "BRIGHT AGENCY"
          const charStart = 0.6 + (idx / total) * 0.25         // spread across 0.60 → 0.85
          const charEnd   = charStart + 0.12                    // each char takes 12% of progress to complete
          const charProgress = mapRange(footerProgress, charStart, charEnd)
          const easeC = easeOut(charProgress)
          char.style.opacity = String(easeC)
          char.style.transform = `translateX(${-50 * (1 - easeC)}px)`
        })
      }
    }

    window.addEventListener('scroll', onScroll)
    window.dispatchEvent(new Event('scroll'))

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
      if (hsContainer.parentNode) hsContainer.parentNode.removeChild(hsContainer)
    }
  }, [])
}
