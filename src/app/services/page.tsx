import { redirect } from 'next/navigation'
import { serviceCategories } from '@/data/ServicesData'

export default function ServicesPage() {
  redirect(`/services/${serviceCategories[0].id}`)
}