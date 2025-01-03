'use client'

import { useEffect } from 'react'
import { measureWebVitals } from '@/lib/performance/config'

export function SpeedInsights() {
  useEffect(() => {
    measureWebVitals()
  }, [])

  return null
}