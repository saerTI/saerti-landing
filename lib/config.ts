// lib/config.ts
export const config = {
  isDev: process.env.NODE_ENV === 'development',
  
  adminUrl: process.env.NEXT_PUBLIC_ADMIN_URL || 'https://admin.saerti.cl',
  chatUrl: process.env.NEXT_PUBLIC_CHAT_URL || 'https://chat.saerti.cl',
  
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 
    (process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : 'https://saerti.cl'),
};

export const getProductUrls = () => {
  return {
    admin: config.adminUrl,
    chat: config.chatUrl,
    landing: config.baseUrl,
  };
};