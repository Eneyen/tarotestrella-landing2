'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function EntregaContent() {
  const [paymentVerified, setPaymentVerified] = useState(false)
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (sessionId) {
      setPaymentVerified(true)
    }
    setLoading(false)
  }, [sessionId])

  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/estrella-guia-de-uso.pdf'
    link.download = 'Estrella-Guia-De-Uso.pdf'
    link.click()
  }

  const handleAccessGPT = () => {
    window.open('https://chatgpt.com/g/g-6880c53fd0f88191892aa1b742d0de45-estrella-especialista-del-tarot-rider-waite', '_blank')
  }

  if (loading) {
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

        <div className="container">
          <div className="loading-content">
            <h2 className="loading-title">Verificando tu compra...</h2>
            <div className="cosmic-loader"></div>
          </div>
        </div>
      </main>
    )
  }

  if (!paymentVerified) {
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

        <div className="container">
          <div className="error-content">
            <h1 className="error-title">Acceso no autorizado</h1>
            <p className="error-text">
              Esta página está disponible solo después de completar tu compra.
            </p>
            <Link href="/" className="cta-button">
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    )
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
            <h1 className="success-title">
              ¡Bienvenida a tu nueva compañera!
            </h1>
            <p className="success-subtitle">
              Estrella ya está lista para acompañarte. Tu compra ha sido exitosa.
            </p>
          </div>
        </div>
      </section>

      <section className="delivery-content">
        <div className="container">
          <div className="delivery-grid">
            <div className="estrella-showcase">
              <div className="estrella-delivery-circle">
                <img
                  src="/estrella.png"
                  alt="Estrella, tu asistente tarotista"
                  className="estrella-delivery-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="estrella-delivery-placeholder" style={{ display: 'none' }}>
                  ✨
                </div>
              </div>
            </div>

            <div className="access-info">
              <h2 className="access-title">Tu acceso a Estrella</h2>
              
              <div className="access-buttons">
                <button 
                  onClick={handleDownloadPDF}
                  className="access-button primary"
                >
                  📥 Descargar Guía De Uso (PDF)
                </button>
                
                <button 
                  onClick={handleAccessGPT}
                  className="access-button secondary"
                >
                  💬 Acceder a Estrella Ahora
                </button>
              </div>

              <div className="warning-box">
                <h3 className="warning-title">⚠️ AVISO DE USO PERSONAL</h3>
                <p className="warning-text">
                  Este asistente digital es totalmente personal e intransferible. No está permitido 
                  copiar, revender ni compartir el enlace de acceso. Si se detecta un uso indebido 
                  o prácticas no autorizadas, nos reservamos el derecho de eliminar el acceso al 
                  asistente sin previo aviso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gpt-instructions-section" style={{ background: 'rgba(61, 31, 93, 0.6)' }}>
        <div className="container">
          <div className="gpt-instructions-card">
            <h4 className="gpt-instructions-title">📌 IMPORTANTE: Para conservar a Estrella contigo para siempre:</h4>
            <div className="gpt-instructions-content">
              <p className="gpt-instructions-text">
                Una vez que hayas abierto el GPT de Estrella en ChatGPT, asegúrate de que quede anclada en tu barra lateral izquierda (el menú de la izquierda, donde ves tus chats habituales).
              </p>
              <div className="gpt-instructions-steps">
                <p className="gpt-instructions-text"><strong>Para hacerlo:</strong></p>
                <p className="gpt-instructions-text">
                  Haz clic en el nombre "Estrella, tarotista experta en tarot Rider Waite" en la parte superior de la ventana del chat.
                </p>
                <p className="gpt-instructions-text">
                  Verás un botón que dice "Mantener en tu barra lateral" o algo similar. Haz clic ahí.
                </p>
                <p className="gpt-instructions-text">
                  ¡Y listo! Estrella quedará guardada como tu tarotista personal, lista para ayudarte siempre que lo necesites.
                </p>
              </div>
              
              <div className="gpt-instructions-backup">
                <h5 className="gpt-instructions-subtitle">📌 Además:</h5>
                <p className="gpt-instructions-text">
                  Por si acaso te desaparece el GPT del menú, también debes guardar el enlace que aparece en tu navegador cuando tienes abierto el GPT de Estrella.
                </p>
                <p className="gpt-instructions-text">
                  Cópialo y pégalo en un bloc de notas (o donde prefieras) y guárdalo en algún lugar seguro.
                </p>
              </div>

              <div className="gpt-instructions-warning">
                <p className="gpt-instructions-text">
                  <strong>👉 Si por cualquier motivo Estrella desaparece de tu barra lateral, solo podrás volver a abrirla desde ese enlace directo.</strong>
                </p>
                <p className="gpt-instructions-text">
                  Una vez has accedido, no podrás volver a la página original de descarga, la cual solo está disponible en el momento del pago.
                </p>
                <p className="gpt-instructions-text">
                  Por lo tanto, no nos hacemos responsables de su pérdida.
                </p>
                <p className="gpt-instructions-text">
                  <strong>Una vez descargado, la conservación del enlace es responsabilidad exclusivamente tuya.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" style={{ background: 'rgba(61, 31, 93, 0.6)' }}>
        <div className="container">
          <div className="contact-card">
            <h4 className="contact-title">¿Necesitas tu propio espacio web holístico?</h4>
            <p className="contact-text">
              Si buscas crear tu sitio de Reiki, terapias energéticas o sanación, estás en el lugar indicado. Soy Anna, directora de una escuela online de Reiki y terapias energéticas, y apasionada de la inteligencia artificial. He creado GPT Incubator para fusionar el mundo holístico con la IA y crear auténtica magia digital.
            </p>
            <p className="contact-text">
              Comprendo perfectamente lo que necesitas porque he estado donde tú estás ahora. Necesitas un sitio web que refleje tu esencia, pero la mayoría de desarrolladores no captan el alma de nuestro trabajo, porque no se dedican a lo holístico/espiritual como nosotras. <br /> Conmigo ese problema desaparece, porque entiendo las verdaderas necesidades del desarrollo web holístico.
            </p>
            <p className="contact-text">
              Si necesitas un espacio web con alma o tienes una idea para un asistente digital pero no sabes implementarla, aquí me tienes. Puedo convertirme en tu mejor aliada y, esta vez, sin IA de por medio. Contáctame de tú a tú a través de mi email personal y hablemos.
            </p>
            <p className="contact-info">
              <strong>Contáctanos:</strong>{' '}
              <a 
                href="mailto:annaysergi@gmail.com"
                className="contact-link"
              >
                annaysergi@gmail.com
              </a>
            </p>
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

export default function EntregaPage() {
  return (
    <Suspense fallback={
      <main className="delivery-main">
        <div className="container">
          <div className="loading-content">
            <h2 className="loading-title">Cargando...</h2>
            <div className="cosmic-loader"></div>
          </div>
        </div>
      </main>
    }>
      <EntregaContent />
    </Suspense>
  )
}