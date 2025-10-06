import { SignIn } from '@clerk/nextjs';
import { clerkAppearance } from '@/lib/clerk-appearance';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Bienvenido de vuelta
          </h2>
          <p className="mt-2 text-gray-600">
            Ingresa con Google o tu número chileno
          </p>
        </div>
        
        <SignIn 
          appearance={clerkAppearance}
          routing="path"
          path="/sign-in"
        />
      </div>
    </div>
  );
}