'use client'

import Link from 'next/link'

export default function TerminosPage() {
  return (
    <main className="delivery-main">
      {/* Animated Background */}
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

      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">Estrella</div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="success-hero">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3rem' }}>
              Términos de uso y privacidad
            </h1>
            <Link href="/" style={{ color: '#ff9800', textDecoration: 'underline', fontSize: '1.1rem' }}>
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="access-info">
              <div style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: 'var(--moon-silver)'
              }}>
                {/* Uso Personal */}
                <section style={{ marginBottom: '3rem' }}>
                  <h2 style={{ 
                    color: '#ff9800', 
                    fontSize: '1.5rem', 
                    marginBottom: '1.5rem'
                  }}>
                    Uso Personal e Intransferible
                  </h2>
                  <p>
                    Este asistente digital ha sido desarrollado por Anna María Rubio Cintas para 
                    GPTIncubator y es un producto personal e intransferible. Al adquirirlo, el usuario 
                    acepta no copiar, revender ni compartir el acceso, total ni parcialmente. Nos 
                    reservamos el derecho de eliminar el acceso al asistente sin previo aviso si se 
                    detecta un uso indebido o prácticas no autorizadas.
                  </p>
                </section>

                {/* Limitaciones de Uso */}
                <section style={{ marginBottom: '3rem' }}>
                  <h2 style={{ 
                    color: '#ff9800', 
                    fontSize: '1.5rem', 
                    marginBottom: '1.5rem'
                  }}>
                    Limitaciones de Uso
                  </h2>
                  <p>
                    Este producto está diseñado con fines de guía simbólica y entretenimiento. No debe 
                    utilizarse como sustituto de orientación profesional en temas de salud, legales, 
                    financieros o emocionales profundos.
                  </p>
                </section>

                {/* Privacidad */}
                <section style={{ marginBottom: '3rem' }}>
                  <h2 style={{ 
                    color: '#ff9800', 
                    fontSize: '1.5rem', 
                    marginBottom: '1.5rem'
                  }}>
                    Privacidad y Datos
                  </h2>
                  <p>
                    Este sitio no almacena información personal de los usuarios. El proceso de pago es 
                    gestionado íntegramente por Stripe, empresa externa que actúa como procesador de 
                    pagos seguro.
                  </p>
                </section>

                {/* Responsable */}
                <section style={{ marginBottom: '2rem' }}>
                  <h2 style={{ 
                    color: '#ff9800', 
                    fontSize: '1.5rem', 
                    marginBottom: '1.5rem'
                  }}>
                    Responsable del Sitio y del Producto
                  </h2>
                  <div style={{ 
                    backgroundColor: 'rgba(233, 30, 99, 0.1)', 
                    padding: '1.5rem', 
                    borderRadius: '10px',
                    border: '1px solid rgba(233, 30, 99, 0.3)'
                  }}>
                    <p style={{ marginBottom: '0.5rem' }}>
                      <strong>Anna María Rubio Cintas</strong>
                    </p>
                    <p style={{ marginBottom: '0.5rem' }}>
                      Email: <a 
                        href="mailto:annaysergi@gmail.com"
                        className="contact-link"
                      >
                        annaysergi@gmail.com
                      </a>
                    </p>
                    <p style={{ marginBottom: '0.5rem' }}>
                      GPTIncubator - incubadora de asistentes digitales
                    </p>
                    <p>
                      Web: <a 
                        href="https://gpt-incubator.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        https://gpt-incubator.vercel.app/
                      </a>
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Back to Home */}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/" className="cta-button">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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