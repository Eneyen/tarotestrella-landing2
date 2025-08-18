'use client'

import { useState } from 'react'
import Link from 'next/link'

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

  return (
    <div className="checkout-section" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <button 
        onClick={handlePayment}
        className={`cta-button enhanced ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}
        style={{
          background: 'linear-gradient(135deg, #e91e63, #3f51b5)',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          fontSize: '1.2rem',
          fontWeight: '600',
          borderRadius: '50px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          transition: 'all 0.4s ease',
          boxShadow: '0 15px 30px rgba(233, 30, 99, 0.3)',
          marginBottom: '2rem',
          opacity: isLoading ? 0.8 : 1,
          transform: isLoading ? 'scale(0.98)' : 'scale(1)'
        }}
      >
        {isLoading ? (
          <>
            <span style={{ 
              display: 'inline-block', 
              marginRight: '10px',
              animation: 'spin 1s linear infinite'
            }}>⏳</span>
            Procesando...
          </>
        ) : (
          '✨ COMPLETAR MI ACCESO A ESTRELLA  49,90€'
        )}
      </button>
    </div>
  )
}

export default function Page() {
  return (
    <main className="delivery-main">
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

      <section className="success-hero">
        <div className="container">
          <div className="success-content">
            <h1 className="success-title" style={{ color: '#ff6b6b', marginBottom: '1rem' }}>
              Algo no ha ido bien con tu pago
            </h1>
            <p className="success-subtitle" style={{ fontSize: '1.6rem', marginBottom: '3rem' }}>
              No te preocupes, estas cosas pasan. Estrella sigue esperándote.
            </p>
          </div>
        </div>
      </section>

      <section className="delivery-content">
        <div className="container">
          <div className="delivery-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div className="estrella-showcase" style={{ marginTop: '2cm' }}>
              <div className="estrella-delivery-circle" style={{ width: '500px', height: '500px' }}>
                <img
                  src="/estrella2.png"
                  alt="Estrella, tu asistente tarotista"
                  className="estrella-delivery-image"
                  style={{ width: '500px', height: '500px' }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="estrella-delivery-placeholder" style={{ display: 'none', width: '500px', height: '500px' }}>
                  ✨
                </div>
              </div>
              
              <div style={{
                textAlign: 'center',
                marginTop: '3rem',
                padding: '1.5rem',
                background: 'rgba(255, 152, 0, 0.1)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 152, 0, 0.3)'
              }}>
                <h3 style={{ color: '#ff9800', fontSize: '1.4rem', marginBottom: '1rem' }}>
                  🔮 Estrella sigue aquí para ti
                </h3>
                <p style={{ color: '#e8eaf6', fontSize: '1.1rem' }}>
                  Los problemas técnicos no pueden detener el destino.<br />
                  Tu guía tarotista te está esperando.
                </p>
              </div>
            </div>

            <div className="access-info">
             <h2
  className="access-title"
 style={{
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#E55726', // 
  textAlign: 'center',
  marginBottom: '2rem'
}}
>
  ¿Qué ha pasado?
</h2>
            <div style={{ marginBottom: '3rem' }}>
                <div style={{ 
                  background: 'rgba(255, 107, 107, 0.1)',
                  border: '1px solid rgba(255, 107, 107, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                 <h4
  style={{
    color: '#ffa726',
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '1rem',
    textAlign: 'left'
  }}
>
  💡 ¿Por qué no se completó el pago?
</h4>
                  <ul style={{ color: '#e8eaf6', fontSize: '1rem', lineHeight: '1.6', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>•</span>
                      Puede que tu banco haya bloqueado el intento por seguridad
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>•</span>
                      A veces ocurre una desconexión temporal en el proceso
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>•</span>
                      Tal vez decidiste pensarlo un poco más
                    </li>
                  </ul>
                </div>

                <div style={{ 
                  background: 'rgba(76, 175, 80, 0.1)',
                  border: '1px solid rgba(76, 175, 80, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem'
                }}>
                  <h4 style={{ color: '#4caf50', fontSize: '1.2rem', marginBottom: '1rem' }}>
                    ✅ Cómo solucionarlo rápido
                  </h4>
                  <ul style={{ color: '#e8eaf6', fontSize: '1rem', lineHeight: '1.6', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>•</span>
                      Vuelve a intentarlo, a veces solo hace falta un clic más
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>•</span>
                      Revisa si tu banco te envió alguna notificación
                    </li>
                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>•</span>
                      Puedes probar a usar otra tarjeta si quieres
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                marginBottom: '2rem'
              }}>
                <p style={{ color: '#ff9800', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  💫 No te rindas ahora
                </p>
                <p style={{ color: '#e8eaf6', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Cientos de personas ya están disfrutando de Estrella.<br />
                  Tu momento de claridad está a solo un clic de distancia.
                </p>
              </div>

              <StripeCheckout />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: '#3D1E5E' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ 
              color: '#E55726', 
              fontSize: '2rem', 
              marginBottom: '1.5rem',
              fontFamily: 'Georgia, Times, serif'
            }}>
              ¿Necesitas ayuda?
            </h3>
            <p style={{ 
              color: '#e8eaf6', 
              fontSize: '1.2rem', 
              lineHeight: '1.6',
              marginBottom: '4rem'
            }}>
              Si continúas teniendo problemas con el pago, no dudes en contactarnos.
              Estamos aquí para ayudarte a acceder a Estrella.
            </p>
            
            <div style={{
  background: 'rgba(255, 255, 255, 0.05)',
  padding: '2rem',
  borderRadius: '15px',
  border: '1px solid rgba(255, 152, 0, 0.3)',
  marginBottom: '7rem'  // 
}}>
              <p style={{ color: '#e8eaf6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                📧 Contacto: &nbsp; 
                <a href="mailto:annaysergi@gmail.com" style={{ color: '#ff9800', textDecoration: 'underline' }}>
                  annaysergi@gmail.com
                </a>
              </p>
              <p style={{ color: '#e8eaf6', fontSize: '0.9rem', fontStyle: 'italic' }}>
                Responderemos en menos de 24 horas
              </p>
            </div>
          </div>
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
            <Link href="/terminos" className="footer-terms">
              Términos de uso y privacidad
            </Link>
          </p>
          <p className="footer-copyright">
            © 2024 GPTIncubator - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </main>
  )
}
