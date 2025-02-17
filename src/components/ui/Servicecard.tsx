interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <img src={icon} alt="" className="w-10 h-10 mb-3 opacity-90" aria-hidden="true" />
      <h3 className="text-lg font-semibold text-navy-900 mb-2">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

