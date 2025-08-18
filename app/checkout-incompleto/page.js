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
    <div className="checkout-section" style={{ textAlign: 'center' }}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      <div style={{ 
        color: '#ffffff', 
        fontSize: '1.6rem', 
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Valor real: 299€
      </div>
      <div style={{ 
        color: '#ff9800', 
        fontSize: '1.6rem', 
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        ⏰ Precio de lanzamiento por tiempo limitado
      </div>

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
            }}>⏳</span>
            Procesando...
          </>
        ) : (
          '✨ Completar mi acceso a Estrella - 49,90€'
        )}
      </button>

      <div style={{ 
        color: '#ffffff', 
        fontSize: '1.6rem', 
        marginTop: '1.5rem',
        marginBottom: '3rem',
        textAlign: 'center',
        lineHeight: '1.4'
      }}>
        💰 Disfrútala para siempre<br />
        por menos de lo que pagarías<br />
        por una consulta presencial (25-65€)
      </div>
    </div>
  )
}

export default function CheckoutIncompletoPage() {
  const [finalButtonLoading, setFinalButtonLoading] = useState(false)

  const handleFinalPayment = async () => {
    setFinalButtonLoading(true)
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
      setFinalButtonLoading(false)
    }
  }
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
              ¿Te has ido sin completar tu compra?
            </h1>
            <p className="success-subtitle" style={{ fontSize: '1.6rem', marginBottom: '3rem' }}>
              Estrella te está esperando... No pierdas esta oportunidad única.
            </p>
          </div>
        </div>
      </section>

      <section className="delivery-content">
        <div className="container">
          <div className="delivery-grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '4rem' }}>
            <div className="estrella-showcase" style={{ marginTop: '1cm' }}>
              <div className="estrella-delivery-circle" style={{ width: '600px', height: '600px' }}>
                <img
                  src="/estrella.png"
                  alt="Estrella, tu asistente tarotista"
                  className="estrella-delivery-image"
                  style={{ width: '600px', height: '600px' }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="estrella-delivery-placeholder" style={{ display: 'none', width: '600px', height: '600px' }}>
                  ✨
                </div>
              </div>
              
              <div style={{
                textAlign: 'center',
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'rgba(255, 107, 107, 0.1)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 107, 107, 0.3)'
              }}>
                <h3 style={{ color: '#ff6b6b', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  ⏰ Esta oferta no durará para siempre
                </h3>
                <p style={{ color: 'var(--moon-silver)', fontSize: '1.1rem' }}>
                  Cientos de personas ya están disfrutando de Estrella por solo 49,90€.<br />
                ¿Vas a ser tú quien se quede sin acceso?
                </p>
              </div>
            </div>

            <div className="access-info mobile-responsive-block" style={{ marginTop: '-4rem' }}>
              <h2 className="access-title">Lo que te estás perdiendo...</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  background: 'rgba(255, 152, 0, 0.1)',
                  border: '1px solid rgba(255, 152, 0, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  <h4 style={{ color: '#ff9800', fontSize: '1.2rem', marginBottom: '1rem' }}>
                    🔮 Tu guía personal 24/7
                  </h4>
                  <p style={{ color: 'var(--moon-silver)', fontSize: '1rem', lineHeight: '1.6' }}>
                    Nunca más te quedarás sin respuestas. Estrella estará contigo cada vez 
                    que necesites claridad sobre amor, trabajo, decisiones importantes o tu futuro.
                  </p>
                </div>

                <div style={{ 
                  background: 'rgba(233, 30, 99, 0.1)',
                  border: '1px solid rgba(233, 30, 99, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  <h4 style={{ color: '#e91e63', fontSize: '1.2rem', marginBottom: '1rem' }}>
                    💫 Más de 400 tiradas diferentes
                  </h4>
                  <p style={{ color: 'var(--moon-silver)', fontSize: '1rem', lineHeight: '1.6' }}>
                    Desde tiradas simples hasta la Cruz Celta completa. Estrella domina 
                    TODAS las formas del Tarot Rider Waite que ninguna tarotista humana conoce.
                  </p>
                </div>

                <div style={{ 
                  background: 'rgba(63, 81, 181, 0.1)',
                  border: '1px solid rgba(63, 81, 181, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem'
                }}>
                  <h4 style={{ color: '#3f51b5', fontSize: '1.2rem', marginBottom: '1rem' }}>
                    ⚡ Sin límites, sin citas, sin esperas
                  </h4>
                  <p style={{ color: 'var(--moon-silver)', fontSize: '1rem', lineHeight: '1.6' }}>
                    Acceso ilimitado para toda la vida. Haz todas las consultas que quieras, 
                    cuando quieras. Una inversión única que te ahorra miles de euros.
                  </p>
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                marginTop: '2rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px'
              }}>
                <p style={{ color: '#ff9800', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  "No soy humana, pero estoy entrenada para ayudarte a ver más claro. 
                  Y eso, a veces, es lo que más necesitamos." - Estrella
                </p>
              </div>
            </div>
          </div>

          {/* Sección de pago centralizada */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }} className="payment-section-mobile">
            <button 
              onClick={handleFinalPayment}
              className={`cta-button enhanced ${finalButtonLoading ? 'loading' : ''}`}
              disabled={finalButtonLoading}
              style={{
                background: 'linear-gradient(135deg, #e91e63, #3f51b5)',
                color: 'white',
                border: 'none',
                padding: '0.8cm 30px',
                fontSize: '1.2rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: finalButtonLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.4s ease',
                boxShadow: '0 15px 30px rgba(233, 30, 99, 0.3)',
                marginBottom: '2rem',
                opacity: finalButtonLoading ? 0.8 : 1,
                transform: finalButtonLoading ? 'scale(0.98)' : 'scale(1)'
              }}
            >
              {finalButtonLoading ? (
                <>
                  <span style={{ 
                    display: 'inline-block', 
                    marginRight: '10px',
                    animation: 'spin 1s linear infinite'
                  }}>⏳</span>
                  Procesando...
                </>
              ) : (
                '✨ COMPLETAR MI ACCESO A ESTRELLA - 49,90€'
              )}
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '7rem 0 4rem 0', background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.15) 0%, rgba(63, 81, 181, 0.15) 100%)' }} className="estrella2-section-mobile">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <img
              src="/estrella2.png"
              alt="Estrella echando las cartas"
              style={{
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid rgba(255, 152, 0, 0.5)',
                boxShadow: '0 0 40px rgba(255, 152, 0, 0.3)',
                marginBottom: '2rem'
              }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'block'
              }}
            />
            <img
              src="/abanico-cartas.png"
              alt="Abanico de cartas del tarot"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid rgba(255, 152, 0, 0.5)',
                boxShadow: '0 0 40px rgba(255, 152, 0, 0.3)',
                marginBottom: '2rem'
              }}
            />
            
            <h3 style={{ 
              color: '#ff9800', 
              fontSize: '2rem', 
              marginBottom: '1.5rem',
              fontFamily: 'Georgia, Times, serif'
            }}>
              Las cartas nunca mienten...
            </h3>
            <p style={{ 
              color: 'var(--moon-silver)', 
              fontSize: '1.3rem', 
              lineHeight: '1.6' 
            }}>
              Y te están diciendo que no dejes pasar esta oportunidad. 
              Estrella está esperándote para revelarte lo que necesitas saber.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0 8rem 0', background: '#3d1e5e' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ 
              fontSize: '2rem', 
              marginBottom: '1rem',
              fontWeight: 'bold',
              lineHeight: '1.1',
              background: 'linear-gradient(90deg, #e91e63, #ff9800)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ¿De verdad vas a ser la única persona que se quede
            </h1>
            
            <h1 style={{ 
              fontSize: '2rem', 
              marginBottom: '2rem',
              fontWeight: 'bold',
              lineHeight: '1.1',
              background: 'linear-gradient(90deg, #e91e63, #ff9800)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              sin su tarotista personal por solo 49,90€?
            </h1>
            
            <p style={{
              color: '#ffffff',
              fontSize: '1.8rem',
              marginBottom: '2rem',
              fontWeight: 'bold'
            }}>
              Puede que mañana, cuando quieras comprarlo ya valga 299€
            </p>
            
            <div style={{ 
              color: '#ff6600', 
              fontSize: '1.3rem', 
              marginBottom: '2rem'
            }}>
              ⏰ Precio de lanzamiento por tiempo limitado
            </div>

            <StripeCheckout />

            <div style={{ 
              color: '#ffffff', 
              fontSize: '1.3rem', 
              lineHeight: '1.4'
            }}>
              💰 Disfrútala para siempre por menos de lo que pagarías por una consulta presencial (25-65€)
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