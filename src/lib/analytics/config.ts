declare global {
    interface Window {
      dataLayer: unknown[];
      gtag: (...args: unknown[]) => void;
    }
  }
  
  export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
  
  // Analytics event types
  export interface AnalyticsEvent {
    action: string
    category: string
    label?: string
    value?: number
  }
  
  // Initialize GA script
  export const initGA = () => {
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    script.async = true
    document.head.appendChild(script)
  
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(...args)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_TRACKING_ID, {
      anonymize_ip: true,
      page_path: window.location.pathname,
    })
  }
  
  // Page view tracking
  export const pageView = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
  
  // Event tracking
  export const event = ({ action, category, label, value }: AnalyticsEvent) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
  
  // Performance tracking
  export const trackWebVitals = (metric: { 
    id: string; 
    name: string; 
    value: number 
  }) => {
    window.dataLayer?.push(metric)
  }