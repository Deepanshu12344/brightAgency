import { useState, type PointerEvent } from 'react'

const cards = [
  { img: 'img1.jpg', desc: 'Chrome soft-serve dessert with cherry, wafer sticks, and straw, glossy metallic texture, dramatic studio lighting, dark gradient background, surreal luxury product photography.' },
  { img: 'img2.jpg', desc: 'Elegant rider wearing a tailored green suit and bowler hat mounted on a glossy black horse in a vast desert landscape, sculptural sand dunes behind, clear blue sky, strong directional sunlight, cinematic composition, high-fashion editorial photography.' },
  { img: 'img3.jpg', desc: 'Plush sculptural pink sofa centered in a minimalist studio setting, dramatic dark backdrop and warm mustard floor, soft directional lighting, contemporary design object, high-end product photography, clean composition, tactile fabric texture.' },
  { img: 'img4.jpg', desc: 'Intricate 3D rendering of a futuristic cityscape at dusk, neon lights reflecting on wet streets, cyberpunk aesthetic, cinematic lighting, hyper-realistic detail.' },
  { img: 'img5.jpg', desc: 'Minimalist architectural interior with natural light casting sharp geometric shadows across poured concrete floors, warm wood accents, photorealistic render.' },
  { img: 'img6.jpg', desc: 'Macro photography of an iridescent beetle resting on a dew-covered tropical leaf, vibrant colors, shallow depth of field, sharp focus on texture.' },
]

type Card = (typeof cards)[number]

function GetStartedCard({ card, index }: { card: Card; index: number }) {
  const [isCursorVisible, setIsCursorVisible] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const moveCursor = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setCursorPosition({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    })
  }

  return (
    <div className="gs-card">
      <div
        className="gs-img-wrapper"
        onPointerEnter={(event) => {
          setIsCursorVisible(true)
          moveCursor(event)
        }}
        onPointerMove={moveCursor}
        onPointerLeave={() => setIsCursorVisible(false)}
      >
        <img src={`/images/${card.img}`} alt={`Card ${index + 1}`} />
        <span
          className={`image-expand-cursor${isCursorVisible ? ' is-visible' : ''}`}
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
          aria-hidden="true"
        >
          Expand <b>+</b>
        </span>
      </div>
      <p>{card.desc}</p>
    </div>
  )
}

export default function GetStartedSection() {
  return (
    <div className="get-started-section">
      <div className="gs-header">
        <h2>GET STARTED<br/>WITH BRIGHT</h2>
        <p>New to BRIGHT? Discover AI-powered services that help<br/>you create, transform, grow, and make your brand truly iconic.</p>
        <button className="btn" style={{background:'white',color:'black',borderRadius:'40px',padding:'14px 32px',fontWeight:'bold',fontSize:'16px',border:'none',cursor:'pointer'}}>
          Book a Demo
        </button>
      </div>

      <div className="gs-grid">
        {cards.map((card, i) => (
          <GetStartedCard key={card.img} card={card} index={i} />
        ))}
      </div>
    </div>
  )
}
