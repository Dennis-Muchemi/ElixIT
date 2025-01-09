import { LucideIcon } from 'lucide-react'

interface ContactInfoProps {
  icon: LucideIcon
  title: string
  content: string
}

export function ContactInfo({ icon: Icon, title, content }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-slate-50 transition-colors">
      <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-medium text-slate-900">{title}</h3>
        <p className="text-slate-600">{content}</p>
      </div>
    </div>
  )
}