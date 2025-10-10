import { Appearance } from '@clerk/types';

export const clerkAppearance: Appearance = {
  layout: {
    socialButtonsPlacement: 'bottom',
    socialButtonsVariant: 'iconButton',
  },
  variables: {
    colorPrimary: '#2563eb',
    colorBackground: '#ffffff',
    colorText: '#111827',
    colorTextSecondary: '#6b7280',
    colorDanger: '#dc2626',
    colorSuccess: '#16a34a',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    borderRadius: '0.5rem',
    fontSize: '1rem',
  },
  elements: {
    rootBox: 'mx-auto',
    card: 'shadow-2xl border border-gray-200 rounded-xl',
    headerTitle: 'text-2xl font-bold text-gray-900',
    headerSubtitle: 'text-gray-600 mt-2',
    socialButtonsBlockButton: 
      'border-2 border-gray-200 hover:border-blue-500 transition-all duration-200 hover:shadow-md',
    formButtonPrimary: 
      'bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl normal-case font-semibold',
    footerActionLink: 'text-blue-600 hover:text-blue-700 font-medium',
    formFieldInput: 
      'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg',
    formFieldLabel: 'text-gray-700 font-medium',
    identityPreviewText: 'font-medium text-gray-900',
    identityPreviewEditButton: 'text-blue-600 hover:text-blue-700',
    dividerLine: 'bg-gray-200',
    dividerText: 'text-gray-500',
    formFieldInputShowPasswordButton: 'text-gray-600 hover:text-gray-900',
    alertText: 'text-sm',
    formHeaderTitle: 'text-xl font-semibold',
    formHeaderSubtitle: 'text-gray-600',
    socialButtonsBlockButtonText: 'font-medium',
    formFieldAction: 'text-blue-600 hover:text-blue-700',
  },
};