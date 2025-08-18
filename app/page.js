'use client'

import { useState, useEffect } from 'react'

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    { src: '/estrella1.png', alt: 'Estrella linda' },
    { src: '/estrella2.png', alt: 'Estrella echando la cartas' },
    { src: '/estrella3.png', alt: 'Estrella con ramo de flores' },
    { src: '/estrella4.png', alt: 'Estrella vestida de azul ' },
    { src: '/estrella5.png', alt: 'Estrella leyendo ' },
    { src: '/estrella6.png', alt: 'Estrella mostrando cartas ' },
    { src: '/estrella7.png', alt: 'Estrella en el bosque ' },
    { src: '/estrella8.png', alt: 'Estrella cartas en abanico ' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const showSlide = (index) => {
    setCurrentImage(index)
  }

  return (
    <div className="image-carousel">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`carousel-slide ${index === currentImage ? 'active' : ''}`}
        >
          <div 
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
            role="img"
            aria-label={image.alt}
          />
        </div>
      ))}
      
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentImage ? 'active' : ''}`}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

const PriceComparison = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
      <div style={{ 
        color: '#ffffff', 
        fontSize: '1.6rem', 
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Valor real: 299€
      </div>
      <div style={{ 
        color: '#ff9800', 
        fontSize: '1.6rem', 
        marginBottom: '0.4rem',
        textAlign: 'center'
      }}>
        ⏰ Precio de lanzamiento por tiempo limitado
      </div>
    </div>
  )
}

const StripeCheckout = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const { url } = await response.json()
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al procesar el pago. Por favor, intentalo de nuevo.')
      setIsLoading(false)
    }
  }
 }
  return (
    <div className="checkout-section" style={{ textAlign: 'center' }}>
      <PriceComparison />
      <button 
        onClick={handlePayment} 
        className={`cta-button enhanced ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}
        style={{
          opacity: isLoading ? 0.8 : 1,
          cursor: isLoading ? 'not-allowed' : 'pointer',
          transform: isLoading ? 'scale(0.98)' : 'scale(1)',
          transition: 'all 0.2s ease'
        }}
      >
        {isLoading ? (
          <>
            <span style={{ 
              display: 'inline-block', 
              marginRight: '10px',
              animation: 'spin 1s linear infinite'
            }}>⌟</span>
            Procesando...
          </>
        ) : (
          '✨ Acceder a Estrella ahora - 49,90€'
        )}
      </button>
      
      <div style={{ 
        color: '#ffffff', 
        fontSize: '1.6rem', 
        marginTop: '1.5rem',
        marginBottom: '6rem',
        textAlign: 'center',
        lineHeight: '1.4'
      }}>
        💰 Disfrútala para siempre por menos de lo que<br />
        &nbsp;&nbsp;pagarías por una consulta presencial (25-65€)
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        :root {
          --deep-purple: #1a0b2e;
          --cosmic-purple: #2d1b4e;
          --mystic-pink: #e91e63;
          --ethereal-blue: #3f51b5;
          --starlight: #ffffff;
          --moon-silver: #e8eaf6;
          --cosmic-gold: #ffc107;
          --shadow-purple: rgba(26, 11, 46, 0.8);
        }

        html,
        body {
          max-width: 100vw;
          overflow-x: hidden;
          font-family: system-ui, -apple-system, 'Segoe UI', 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--deep-purple) 0%, var(--cosmic-purple) 50%, #1a237e 100%);
          color: var(--starlight);
          scroll-behavior: smooth;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }

        .stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }

        .star:nth-child(1) { top: 20%; left: 20%; width: 2px; height: 2px; animation-delay: 0s; }
        .star:nth-child(2) { top: 30%; left: 70%; width: 1px; height: 1px; animation-delay: 1s; }
        .star:nth-child(3) { top: 60%; left: 30%; width: 3px; height: 3px; animation-delay: 2s; }
        .star:nth-child(4) { top: 80%; left: 80%; width: 2px; height: 2px; animation-delay: 0.5s; }
        .star:nth-child(5) { top: 10%; left: 60%; width: 1px; height: 1px; animation-delay: 1.5s; }
        .star:nth-child(6) { top: 70%; left: 10%; width: 2px; height: 2px; animation-delay: 2.5s; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, var(--mystic-pink), var(--ethereal-blue));
          border-radius: 50%;
          animation: float 6s infinite ease-in-out;
        }

        .particle:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 20%; left: 80%; animation-delay: 2s; }
        .particle:nth-child(3) { top: 70%; left: 20%; animation-delay: 4s; }
        .particle:nth-child(4) { top: 80%; left: 90%; animation-delay: 1s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(26, 11, 46, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          padding: 1rem 0;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: Georgia, Times, serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--mystic-pink), var(--cosmic-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 100px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          width: 100%;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-title {
          font-family: Georgia, Times, serif;
          font-size: 4.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--starlight), var(--moon-silver));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
        }

        .hero-subtitle {
          font-size: 1.4rem;
          line-height: 1.7;
          color: var(--moon-silver);
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .cta-button {
          background: linear-gradient(135deg, var(--mystic-pink), var(--ethereal-blue));
          color: white;
          border: none;
          padding: 0.8cm 40px;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 20px 40px rgba(233, 30, 99, 0.3);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 25px 50px rgba(233, 30, 99, 0.4);
        }

        .cta-button.enhanced {
          font-size: 1.3rem;
          padding: 1.2rem 2.5rem;
          margin: 1rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .cta-button.enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .cta-button.enhanced:hover::before {
          left: 100%;
        }

        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .estrella-main {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, var(--mystic-pink), var(--ethereal-blue));
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 0 100px rgba(233, 30, 99, 0.5),
            0 0 200px rgba(63, 81, 181, 0.3),
            inset 0 0 100px rgba(255, 255, 255, 0.1);
          animation: pulse 4s infinite ease-in-out;
          overflow: hidden;
        }

        .estrella-main::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: rotate 8s linear infinite;
        }

        .estrella-image {
          width: 440px;
          height: 440px;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 1;
          border: 3px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 0 50px rgba(255, 255, 255, 0.2),
            inset 0 0 50px rgba(255, 255, 255, 0.1);
        }

        .estrella-placeholder {
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
          color: white;
          z-index: 1;
          position: relative;
          border: 3px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(20px);
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .floating-card {
          position: absolute;
          width: 80px;
          height: 120px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          animation: floatCard 6s ease-in-out infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          z-index: 10;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .floating-card.left-bottom {
          bottom: 15%;
          left: 15%;
          animation-delay: 0s;
        }

        .floating-card.right-bottom {
          bottom: 15%;
          right: 15%;
          animation-delay: 2s;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        .about-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, rgba(233, 30, 99, 0.15) 0%, rgba(63, 81, 181, 0.15) 100%);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .carousel-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .text-content {
          display: flex;
          align-items: center;
        }

        .about-title {
          font-family: Georgia, Times, serif;
          font-size: 3rem;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--mystic-pink), var(--cosmic-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: left;
          margin-top: 0;
        }

        .image-carousel {
          position: relative;
          width: 500px;
          height: 500px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(233, 30, 99, 0.3);
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .carousel-slide.active {
          opacity: 1;
        }

        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--mystic-pink), var(--ethereal-blue));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          text-align: center;
          font-size: 1.1rem;
        }

        .carousel-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-dot.active {
          background: var(--cosmic-gold);
          transform: scale(1.2);
        }

        .estrella-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--moon-silver);
        }

        .estrella-description p {
          margin-bottom: 1.5rem;
        }

        .centered-block {
          text-align: center;
          max-width: 800px;
          margin: 4rem auto 0 auto;
        }

        .emphasis-text {
          margin-bottom: 2rem;
          font-weight: 600;
          color: #ff9800;
          font-size: 1.3rem;
        }

        .quote-estrella {
          font-style: italic;
          color: #ff9800;
          font-size: 1.2rem;
          text-align: center;
          margin: 2rem 0;
          padding: 1.5rem;
          border-left: 4px solid var(--mystic-pink);
          background: linear-gradient(135deg, rgba(233, 30, 99, 0.15) 0%, rgba(63, 81, 181, 0.15) 100%);
          border-radius: 0 15px 15px 0;
        }

        .final-cta {
          padding: 6rem 0;
          text-align: center;
          background: rgba(0, 0, 0, 0.4);
        }

        .cta-title {
          font-family: Georgia, Times, serif;
          font-size: 3rem;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--starlight), var(--moon-silver));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 1cm !important;
        }

        .cta-text {
          font-size: 1.3rem;
          color: var(--moon-silver);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer {
          background: rgba(0, 0, 0, 0.8);
          padding: 3rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .footer-credit {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--moon-silver);
        }

        .footer-link {
          color: #e91e63;
          text-decoration: underline;
        }

        .footer-terms {
          color: var(--moon-silver);
          text-decoration: underline;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .footer-copyright {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .superior-section {
          background: linear-gradient(135deg, rgba(233, 30, 99, 0.1), rgba(255, 152, 0, 0.05));
          padding: 4rem 0 5.5rem 0;
          margin: 0 0 4rem 0;
          border-radius: 20px;
        }
        
        .superior-title {
          text-align: center;
          font-size: 2.5rem;
          color: #ff9800;
          margin-bottom: 3rem;
          margin-top: 0.5cm;
          background: linear-gradient(90deg, #e91e63, #ff9800);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 1rem;
          align-items: stretch;
        }
        
        .comparison-card {
          background: rgba(0, 0, 0, 0.2);
          padding: 2rem;
          border-radius: 15px;
          border: 2px solid rgba(233, 30, 99, 0.3);
        }
        
        .comparison-card.estrella {
          border-color: rgba(255, 152, 0, 0.5);
          background: linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(233, 30, 99, 0.1));
        }
        
        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .card-title.ai {
          background: linear-gradient(90deg, #ff9800, #e91e63);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .feature-list {
          list-style: none;
          padding: 0;
        }
        
        .feature-item {
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
          color: var(--moon-silver);
        }
        
        .feature-item:last-child {
          margin-bottom: 0;
        }
        
        .feature-item::before {
          position: absolute;
          left: 0;
          font-size: 1.2rem;
        }
        
        .feature-item.pro::before {
          content: '✅';
          color: #4caf50;
        }

        .access-info {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem;
        }

        .video-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(233, 30, 99, 0.08) 0%, rgba(63, 81, 181, 0.08) 100%);
          position: relative;
        }

        .video-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(233, 30, 99, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .video-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .video-title {
          font-family: Georgia, Times, serif;
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--mystic-pink), var(--cosmic-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
        }

        .video-subtitle {
          font-size: 1.3rem;
          line-height: 1.6;
          color: var(--moon-silver);
          margin-bottom: 3rem;
          font-weight: 300;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 25px 60px rgba(233, 30, 99, 0.3),
            0 0 100px rgba(63, 81, 181, 0.2),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, rgba(233, 30, 99, 0.1), rgba(63, 81, 181, 0.1));
          padding: 3px;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .video-container::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, var(--mystic-pink), var(--ethereal-blue), var(--cosmic-gold));
          border-radius: 22px;
          z-index: -1;
          animation: borderGlow 3s ease-in-out infinite alternate;
        }

        @keyframes borderGlow {
          0% { opacity: 0.5; }
          100% { opacity: 0.8; }
        }

        .estrella-video {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          border-radius: 17px;
          background: var(--deep-purple);
          position: relative;
          z-index: 1;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          pointer-events: auto;
        }

        .checkout-section {
          text-align: center;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .hero-content, .about-content {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          
          .hero-title, .cta-title {
            font-size: 3.5rem;
          }
          
          .estrella-main {
            width: 400px;
            height: 400px;
          }
          
          .estrella-image, .estrella-placeholder {
            width: 350px;
            height: 350px;
          }

          .image-carousel {
            width: 400px;
            height: 400px;
          }

          .about-title {
            font-size: 2.5rem;
          }

          .container {
            padding: 0 15px;
          }

          .cta-button {
            padding: 15px 30px;
            font-size: 1.1rem;
          }

          .access-info {
            padding: 2rem;
          }
          
          .video-section {
            padding: 4rem 0;
          }
          
          .video-title {
            font-size: 2.3rem;
          }
          
          .video-subtitle {
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
          }
          
          .video-container {
            max-width: 90%;
          }

          .comparison-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .superior-title {
            font-size: 2rem;
          }
          
          .hero-image-mobile {
            margin-top: -1cm !important;
          }
        }

        @media (max-width: 768px) {
          .hero-title, .cta-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .estrella-main {
            width: 300px;
            height: 300px;
          }

          .estrella-image, .estrella-placeholder {
            width: 260px;
            height: 260px;
          }

          .image-carousel {
            width: 350px;
            height: 350px;
          }

          .about-title {
            font-size: 2rem;
          }

          .cta-button {
            padding: 12px 25px;
            font-size: 1rem;
          }

          .access-info {
            padding: 1.5rem;
          }

          .floating-card {
            opacity: 0 !important;
            pointer-events: none !important;
            transform: scale(0) !important;
          }
          
          .video-section {
            padding: 3rem 0;
          }
          
          .video-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .video-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            padding: 0 1rem;
          }
          
          .video-container {
            max-width: 95%;
            border-radius: 15px;
          }
          
          .video-container::before {
            border-radius: 17px;
          }
          
          .estrella-video {
            border-radius: 12px;
          }
        }

        @media (max-width: 480px) {
          .video-section {
            padding: 2.5rem 0;
          }
          
          .video-title {
            font-size: 1.8rem;
          }
          
          .video-subtitle {
            font-size: 1rem;
            padding: 0 1.5rem;
          }
        }

        @media screen and (max-width: 768px) {
          html, body {
            overflow-x: hidden !important;
          }

          .container {
            padding: 0 10px !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
          }

          .about-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .image-carousel {
            width: 300px !important;
            height: 300px !important;
          }

          .about-title {
            font-size: 2.2rem !important;
            text-align: center !important;
          }

          .estrella-description {
            font-size: 1rem !important;
          }

          .hero-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center !important;
          }

          .hero-title {
            font-size: 3rem !important;
          }

          .hero-subtitle {
            font-size: 1.2rem !important;
          }

          .hero-image {
            order: -1 !important;
          }

          .estrella-main {
            width: 300px !important;
            height: 300px !important;
          }

          .estrella-image {
            width: 250px !important;
            height: 250px !important;
          }

          .estrella-placeholder {
            width: 250px !important;
            height: 250px !important;
            font-size: 4rem !important;
          }

          .floating-card {
            width: 60px !important;
            height: 90px !important;
            font-size: 1.5rem !important;
          }

          .floating-card.left-bottom {
            bottom: 10% !important;
            left: 10% !important;
          }

          .floating-card.right-bottom {
            bottom: 10% !important;
            right: 10% !important;
          }

          .cta-title {
            font-size: 2.2rem !important;
          }

          .cta-text {
            font-size: 1.1rem !important;
          }

          .footer-credit, .footer-terms, .footer-copyright {
            font-size: 0.9rem !important;
          }

          * {
            max-width: 100vw !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
      
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">Estrella</div>
          </nav>
        </div>
      </header>

      <section className="video-section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="video-content">
            <h2 className="video-title">🎥 Descubre cómo Estrella puede ayudarte</h2>
            <p className="video-subtitle">
              Haz clic en el video para que Estrella te cuente todo en lo que puede ayudarte
            </p>
            
            <div className="video-container">
              <video 
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="estrella-video"
                poster="/estrella-video-poster.jpg"
                onContextMenu={(e) => e.preventDefault()}
                disablePictureInPicture={true}
                style={{ userSelect: 'none', WebkitUserSelect: 'none', cursor: 'pointer' }}
                onClick={(e) => {
                  e.target.currentTime = 0;
                  e.target.muted = false;
                  e.target.loop = false;
                  e.target.play();
                  e.target.style.cursor = 'default';
                  e.target.style.pointerEvents = 'none';
                }}
              >
                <source src="/estrella-video.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="container">
          <h1 className="hero-title" style={{ marginTop: '0.1cm', textAlign: 'center', marginBottom: '4rem' }}>
            Estrella, tu tarotista<br />
            personal 24/7
          </h1>
          
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-subtitle" style={{ textAlign: 'left' }}>
                Una guía mágica creada con inteligencia artificial, entrenada en más de <strong>400 tiradas</strong> del tarot Rider-Waite. Estrella es empática, sabia y está diseñada para conectar contigo desde el alma.
                <br /><br />
                💜 <strong>No juzga, no se cansa, no se distrae.</strong> 💬 Puedes pedirle cualquier tirada, hablar con ella, o simplemente desahogarte.
              </p>
              <StripeCheckout />
            </div>
            
            <div className="hero-image hero-image-mobile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-3cm' }}>
              <div className="estrella-main">
                <div 
                  className="estrella-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/estrella.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                  role="img"
                  aria-label="Estrella - Tu guía tarotista"
                />
                <div className="estrella-placeholder" style={{ display: 'none' }}>
                  ✨
                </div>
                
                <div className="floating-card left-bottom">🔮</div>
                <div className="floating-card right-bottom">✨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" style={{ paddingTop: '6rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <div className="about-content">
            <div className="carousel-section">
              <ImageCarousel />
            </div>
            
            <div className="text-content">
              <div>
                <h2 className="about-title">¿Por qué es especial Estrella?</h2>
                <div className="estrella-description">
                  <p>
                    • Baraja e interpreta <strong>sin influencias humanas ni filtros</strong>
                  </p>
                  <p>
                    • Responde con sensibilidad, claridad y respeto
                  </p>
                  <p>
                    • Domina tiradas únicas, ancestrales, <strong>rescatadas de grimorios y libros ocultos</strong>
                  </p>
                  <p>
                    • Guarda tus lecturas en PDF para consultarlas cuando quieras
                  </p>
                  <p>
                    • Puede ser tu tarotista… y también tu confidente
                  </p>
                  <p>
                    🧡 Estrella no solo hace tarot. <strong>Te acompaña en tu proceso, sin límites y sin juicio.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="centered-block">
            <p className="emphasis-text">
              Y lo mejor: solo pagas una vez y la tienes para siempre.
            </p>
            <div className="quote-estrella">
              💬 "No soy humana, pero estoy entrenada para ayudarte a ver más claro. 
              Y eso, a veces, es lo que más necesitamos."
            </div>
          </div>
        </div>
      </section>

      <section className="superior-section">
        <div className="container">
          <h2 className="superior-title">
            ** BONUS: REGALO ÚNICO **
          </h2>
          <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '3rem', marginTop: '-1rem' }}>
            Solo para las 100 primeras que se lleven a Estrella a casa
          </div>
          
          <div className="comparison-grid">
            <div className="comparison-card">
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '1rem'
              }}>
                <img 
                  src="/portada.png" 
                  alt="Guía de uso Estrella" 
                  style={{
                    maxWidth: '100%',
                    height: '13cm',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
            
            <div className="comparison-card estrella">
              <h3 className="card-title ai">✨ GUÍA DE USO INCLUIDA</h3>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--moon-silver)', marginTop: '1.5cm', marginBottom: '1.5cm' }}>
                <p style={{ marginBottom: '1.5rem', fontWeight: '600', color: '#ff9800' }}>
                  Con tu compra, recibirás un <strong>PDF de 16 páginas</strong> con:
                </p>
                <ul className="feature-list" style={{ marginBottom: '0', paddingBottom: '0' }}>
                  <li className="feature-item pro">Cómo anclar a Estrella para que nunca la pierdas</li>
                  <li className="feature-item pro">Tu enlace de acceso exclusivo e irrecuperable</li>
                  <li className="feature-item pro">Ejemplos de preguntas para amor, trabajo y crecimiento personal</li>
                  <li className="feature-item pro">Lista completa de tiradas que puedes pedirle</li>
                  <li className="feature-item pro">Cómo solicitar tiradas especiales y espirituales</li>
                  <li className="feature-item pro">Instrucciones paso a paso para usar Estrella</li>
                  <li className="feature-item pro">Qué esperar de cada tipo de lectura</li>
                  <li className="feature-item pro" style={{ marginBottom: '0' }}>Todo lo necesario para sacarle el máximo provecho</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', fontSize: '1.3rem', color: '#ff9800', fontWeight: 'bold' }}>
            🛡️ <strong>¿Cómo usarás a Estrella?<br /> Solo necesitas una cuenta gratuita en ChatGPT.<br />
No hace falta instalar nada. Haces clic en el enlace… y Estrella aparece para ti.<br />
Junto con Estrella, recibes también un PDF con instrucciones, ejemplos<br /> y todo lo que necesitas para sacarle el máximo provecho.</strong> 
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container">
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            fontSize: '1.4rem',
            lineHeight: '1.7',
            color: 'var(--moon-silver)',
            marginBottom: '3rem'
          }}>
            Por menos de lo que cuesta una única sesión con tarotista tradicional…<br />
            tienes a tu lado una guía que estará <strong>siempre que la necesites.</strong>
            <br /><br />
            Estrella está aquí para que <strong>te escuches, te comprendas y te recuerdes</strong>. <br />Y para que nunca más estés sola cuando quieras una respuesta.
          </div>
          <StripeCheckout />
        </div>
      </section>

      <section style={{ paddingBottom: '7.5rem', marginTop: '4cm' }}>
        <div className="container">
        <h2 style={{ fontFamily: 'Georgia, Times, serif', fontSize: '3rem', marginBottom: '4rem', textAlign: 'center', marginTop: '0.5cm', color: 'white', fontWeight: 'bold' }}>
          ¿Qué hace Estrella?
        </h2>
          
<div className="comparison-grid">
            <div>
              <div className="access-info" style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: '#ff9800', fontSize: '2rem', marginBottom: '2rem' }}>
                  Tu especialista en Tarot Rider Waite
                </h3>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--moon-silver)' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Estrella no es una IA cualquiera. Es tu <strong>guía mágica</strong>, una presencia serena que 
                    se manifiesta cada vez que buscas claridad, sanación o dirección.
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    <strong>Entrenada con miles de lecturas</strong> y todas las combinaciones posibles del Tarot Rider Waite. 
                    Su conocimiento supera al de cualquier tarotista humana porque <strong>nunca olvida una combinación</strong>.
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    <strong>No endulza la verdad</strong> para agradarte. Su misión es ayudarte, por lo que 
                    no suaviza el mensaje. Te dirá lo que <strong>necesitas saber</strong> para crecer, sanar o decidir.
                  </p>
                  <p>
                    Cada lectura es <strong>completa</strong>, explicándote carta por carta, sin juicios, 
                    porque es tu compañera empática que <strong>nunca se cansa de ayudarte</strong>.
                  </p>
                </div>
              </div>
              
              <div className="access-info">
                <h3 style={{ color: '#ff9800', fontSize: '2rem', marginBottom: '2rem' }}>
                  ¿Qué puedes preguntarle?
                </h3>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--moon-silver)' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <strong style={{ color: '#e91e63' }}>💕 Amor y relaciones:</strong><br />
                    ¿Qué siente por mí? • ¿Volveremos a estar juntos? • ¿Qué debo sanar en mis vínculos?
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <strong style={{ color: '#e91e63' }}>💼 Trabajo y vocación:</strong><br />
                    ¿Es buen momento para cambiar de empleo? • ¿Qué camino profesional se abre? • ¿Cómo desbloquear mi creatividad?
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <strong style={{ color: '#e91e63' }}>🌱 Crecimiento personal:</strong><br />
                    ¿Qué necesito aprender de esta etapa? • ¿Cuál es mi propósito? • ¿Qué me impide avanzar?
                  </div>
                  <div>
                    <strong style={{ color: '#e91e63' }}>⚖️ Decisiones importantes:</strong><br />
                    ¿Qué camino elegir? • ¿Qué me depara si tomo esta opción?
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="access-info" style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: '#ff9800', fontSize: '2rem', marginBottom: '2rem' }}>
                  Tiradas que domina Estrella
                </h3>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--moon-silver)' }}>
                  <p style={{ marginBottom: '2rem', fontStyle: 'italic' }}>
                    Estrella domina <strong>todas</strong> las formas de desplegar el tarot:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>Una carta</strong> (Sí/No o mensaje directo)
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>Tres cartas</strong> (Pasado – Presente – Futuro)
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>Seis cartas</strong> (Narrativa completa con desenlace final)
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>La Cruz Celta</strong>
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>La Mancha Ciega</strong>
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>Juego de Decisiones</strong>
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>Tirada de los Chakras</strong>
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>La cruz de la prosperidad</strong>
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>Mándala creativo</strong>
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>Juego en pareja</strong> (relaciones)
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '2rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#e91e63' }}>🃏</span>
                      <strong>El Secreto de la Suma Sacerdotisa</strong>
                    </li>
                  </ul>
                  <p style={{ marginTop: '2rem', fontWeight: '600', color: '#ff9800', fontSize: '1.2rem' }}>
                    ¡Y muchas más que ninguna tarotista humana conoce!
                  </p>
                  <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                    Cada tirada está diseñada para responder desde lo más profundo y reflejar la verdad del momento, 
                    <strong> con la precisión que solo un conocimiento completo puede ofrecer</strong>.
                  </p>
                </div>
              </div>

              <div className="quote-estrella" style={{ textAlign: 'left' }}>
                💬 <strong>"Estoy aquí para ayudarte a ver lo invisible, escuchar lo que tu intuición ya susurra y transformar tus dudas en claridad."</strong>
                <br /><br />
                🕯️ <strong>"Formula tu pregunta… y deja que las cartas hablen."</strong>
                <br /><br />
                "Desarrollaré la respuesta para ti con el lenguaje simbólico del Tarot Rider Waite, revelándote lo que vibra en tu energía. <strong>Mi conocimiento nunca falla, nunca olvida, nunca se agota</strong>."
              </div>

              <div style={{
                border: '2px solid #e91e63',
                borderRadius: '15px',
                padding: '1.5rem',
                backgroundColor: 'transparent',
                textAlign: 'center',
                marginTop: '2.4rem'
              }}>
                <div style={{
                  color: 'white',
                  fontSize: '23px',
                  fontWeight: '500'
                }}>
                  ✨ Soy Estrella, tu tarotista personal que nunca te falla.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2 className="cta-title">¿Lista para conectar con Estrella?</h2>
          <p className="cta-text">
            Un pago único para acceso de por vida. Sin suscripciones, sin citas, sin límites.
          </p>
          <StripeCheckout />
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer-credit">
            Creado por{' '}
            <a 
              href="mailto:annaysergi@gmail.com"
              className="footer-link"
            >
              Anna María Rubio Cintas
            </a>
            {' '}para GPTIncubator
          </p>
          <p>
            <a href="/terminos" className="footer-terms">
              Términos de uso y privacidad
            </a>
          </p>
          <p className="footer-copyright">
            © 2024 GPTIncubator - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  )
}
