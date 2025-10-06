# saerTI Landing Page

Landing page profesional para saerTI - Software de gestión empresarial con IA.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Autenticación**: Clerk (Google OAuth + Phone SMS)
- **Estilos**: Tailwind CSS
- **Lenguaje**: TypeScript
- **Hosting**: Vercel
- **Validación**: Zod + React Hook Form

## 📦 Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/saerti-landing.git
cd saerti-landing

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus credenciales de Clerk

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔐 Configuración de Clerk

1. Crea una cuenta en [clerk.com](https://clerk.com)
2. Crea una nueva aplicación
3. Habilita proveedores de autenticación:
   - ✅ Google OAuth
   - ✅ Phone (SMS con Twilio)
4. Configura restricciones de país: Chile (+56)
5. Copia las API keys a `.env.local`

## 📁 Estructura del Proyecto

```
saerti-landing/
├── app/
│   ├── (auth)/          # Rutas de autenticación
│   ├── (protected)/     # Rutas protegidas (dashboard)
│   ├── api/             # API routes
│   └── page.tsx         # Landing page
├── components/          # Componentes React
├── lib/                 # Utilidades y configuración
└── public/              # Archivos estáticos
```

## 🌐 Deploy a Vercel

### Método 1: Vercel CLI (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Método 2: GitHub + Vercel Dashboard

1. Sube el código a GitHub
2. Ve a [vercel.com/new](https://vercel.com/new)
3. Importa el repositorio
4. Agrega las variables de entorno
5. Deploy

## 🔧 Variables de Entorno Requeridas

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## 🎯 Funcionalidades

- ✅ Landing page optimizada para conversión
- ✅ Autenticación con Google y teléfono chileno
- ✅ Formulario de registro beta
- ✅ Dashboard protegido
- ✅ Contador de consultas IA
- ✅ Responsive design
- ✅ SEO optimizado
- ✅ Velocidad de carga optimizada

## 📊 Métricas de Rendimiento

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## 🔄 Flujo de Usuario

1. Usuario llega a landing → Ve Hero + Productos
2. Se registra en formulario Beta
3. Crea cuenta con Google o teléfono
4. Accede al Dashboard
5. Ve sus consultas IA disponibles (50)
6. Accede a admin.saerti.cl o chat.saerti.cl

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📝 Notas de Producción

- Asegúrate de configurar el dominio personalizado en Vercel
- Configura DNS de saerti.cl apuntando a Vercel
- Habilita Analytics de Vercel para tracking
- Configura Clerk para producción (cambiar de test a live keys)

## 🤝 Contribuir

Este proyecto está en fase beta. Reporta bugs a soporte@saerti.cl

## 📄 Licencia

Propietario - saerTI © 2025