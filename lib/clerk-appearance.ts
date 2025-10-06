import { Appearance } from '@clerk/types';

export const clerkAppearance: Appearance = {
  layout: {
    socialButtonsPlacement: 'bottom',
    socialButtonsVariant: 'iconButton',
  },
  variables: {
    colorPrimary: '#2563eb', // blue-600
    colorBackground: '#ffffff',
    colorText: '#111827',
    colorTextSecondary: '#6b7280',
    colorDanger: '#dc2626',
    colorSuccess: '#16a34a',
    fontFamily: 'Inter, system-ui, sans-serif',
    borderRadius: '0.5rem',
  },
  elements: {
    card: 'shadow-xl border border-gray-200',
    headerTitle: 'text-2xl font-bold',
    headerSubtitle: 'text-gray-600',
    socialButtonsBlockButton: 'border-2 border-gray-200 hover:border-blue-500 transition-colors',
    formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl',
    footerActionLink: 'text-blue-600 hover:text-blue-700',
    formFieldInput: 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
    identityPreviewText: 'font-medium',
    identityPreviewEditButton: 'text-blue-600 hover:text-blue-700',
  },
};