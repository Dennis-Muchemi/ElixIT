// context/ServiceContext.tsx
'use client'

import { createContext, useContext, useState, type PropsWithChildren } from 'react'
import { serviceCategories } from '@/data/ServicesData'

type ServiceContextType = {
  activeService: string
  setActiveService: (id: string) => void
  currentService: typeof serviceCategories[0]
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined)

export function ServiceProvider({ children }: PropsWithChildren) {
  const [activeService, setActiveService] = useState(serviceCategories[0].id)

  const currentService = serviceCategories.find(
    service => service.id === activeService
  ) || serviceCategories[0]

  return (
    <ServiceContext.Provider value={{ activeService, setActiveService, currentService }}>
      {children}
    </ServiceContext.Provider>
  )
}

export function useService() {
  const context = useContext(ServiceContext)
  if (context === undefined) {
    throw new Error('useService must be used within a ServiceProvider')
  }
  return context
}