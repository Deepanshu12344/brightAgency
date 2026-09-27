import { useRef, useState, type PointerEvent } from 'react'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isCursorVisible, setIsCursorVisible] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const toggleAudio = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const moveCursor = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setCursorPosition({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    })
  }

  return (
    <div className="video-section">
      <div
        className="video-frame"
        onPointerEnter={(event) => {
          setIsCursorVisible(true)
          moveCursor(event)
        }}
        onPointerMove={moveCursor}
        onPointerLeave={() => setIsCursorVisible(false)}
      >
        <video ref={videoRef} className="video-element" autoPlay loop muted={isMuted} playsInline>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <button
          type="button"
          className={`video-audio-cursor${isCursorVisible ? ' is-visible' : ''}${isMuted ? ' is-muted' : ''}`}
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
          onClick={toggleAudio}
          aria-label={isMuted ? 'Turn audio on' : 'Turn audio off'}
        >
          {isMuted ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 10v4h4l5 4V6l-5 4H4Z" />
              <path d="m17 9 4 4m0-4-4 4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 10v4h4l5 4V6l-5 4H4Z" />
              <path d="M16 9.5a4 4 0 0 1 0 5m2-7.5a7 7 0 0 1 0 10" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
