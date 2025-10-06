import { NextRequest, NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId } = await auth();

    // Validar datos básicos
    if (!body.email || !body.fullName || !body.phone) {
      return NextResponse.json(
        { error: 'Datos incompletos' },
        { status: 400 }
      );
    }

    // Si el usuario está autenticado, guardar en sus metadata de Clerk
    if (userId) {
      const client = await clerkClient();
      await client.users.updateUserMetadata(userId, {
        publicMetadata: {
          betaAccess: true,
          betaSignupDate: new Date().toISOString(),
          companyName: body.companyName,
          industryType: body.industryType,
          companySize: body.companySize,
          mainChallenge: body.mainChallenge,
          phone: body.phone,
        },
        privateMetadata: {
          aiQueriesRemaining: 50, // 50 consultas iniciales
          aiQueriesTotal: 50,
          betaUser: true,
        },
      });
    }

    // Aquí podrías agregar:
    // - Envío de email de bienvenida
    // - Guardar en base de datos
    // - Integración con CRM
    // - Notificación a Slack/Discord

    // Por ahora, solo registramos en consola (en producción usa un logger)
    console.log('Beta signup:', {
      email: body.email,
      companyName: body.companyName,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Registro exitoso',
      userId: userId || null,
    });
  } catch (error) {
    console.error('Error en beta signup:', error);
    return NextResponse.json(
      { error: 'Error al procesar solicitud' },
      { status: 500 }
    );
  }
}