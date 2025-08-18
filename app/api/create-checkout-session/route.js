import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-10-28.acacia',
})

export async function POST(request) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: '✨ Estrella - Tu Tarotista Personal 24/7',
              description: '🔮🧙🏻‍♀️ Experta en Tarot Rider disponible siempre. Claridad sobre amor y relaciones. Orientación financiera. Decisiones importantes. Más de 400 tiradas del Tarot. Respuestas inmediatas. Estrella no te juzga, te acompaña. Acceso de por vida. Tu guía mágica te espera.',
            },
            unit_amount: 4990,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/entrega?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/`,
      metadata: {
        product: 'estrella-tarotista'
      }
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe error:', err)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'STRIPE_SECRET_KEY not configured' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        message: 'API route is working correctly',
        domain: process.env.NEXT_PUBLIC_DOMAIN
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}