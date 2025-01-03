import { onLCP, onFID, onCLS, Metric } from 'web-vitals'
import { trackWebVitals } from '../analytics/config'
import React from 'react'

export const performanceConfig = {
  // Core Web Vitals thresholds
  thresholds: {
    LCP: 2500, // Largest Contentful Paint
    FID: 100,  // First Input Delay
    CLS: 0.1,  // Cumulative Layout Shift
    TTFB: 600  // Time to First Byte
  },
  
  // Image optimization settings
  images: {
    sizes: [640, 750, 828, 1080, 1200],
    deviceSizes: [640, 750, 828, 1080, 1200],
    minimumCacheTTL: 60,
    formats: ['image/webp']
  },
  
  // Font optimization
  fonts: {
    display: 'swap',
    preload: true,
    subsets: ['latin']
  }
}

// Web Vitals reporting
export const reportWebVitals = (metric: Metric) => {
  trackWebVitals({
    id: metric.id,
    name: metric.name,
    label: metric.name,
    value: metric.value,
  })
}

// Measure Core Web Vitals
export const measureWebVitals = () => {
  onCLS(reportWebVitals)
  onFID(reportWebVitals)
  onLCP(reportWebVitals)
}

// Performance monitoring utility
export const withPerformanceMonitoring = (
  WrappedComponent: React.ComponentType
): React.FC => {
  return function WithPerformanceMonitoring(props) {
    React.useEffect(() => {
      measureWebVitals()
    }, [])

    return <WrappedComponent {...props} />
  }
}