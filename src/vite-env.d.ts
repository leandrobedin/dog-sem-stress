
/// <reference types="vite/client" />

// Add Facebook Pixel type definitions
interface Window {
  fbq?: any;
  _fbq?: any;
}

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}
