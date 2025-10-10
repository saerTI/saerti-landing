// lib/config.ts
export const config = {
  isDev: process.env.NODE_ENV === 'development',
  
  // URLs de producción
  chatUrl: process.env.NEXT_PUBLIC_CHAT_URL || 
    (process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3002/analyze' 
      : 'https://app.resuelveya.cl/analyze'),
  
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 
    (process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : 'https://resuelveya.cl'),
};

export const getProductUrls = () => {
  return {
    chat: config.chatUrl,
    landing: config.baseUrl,
  };
};