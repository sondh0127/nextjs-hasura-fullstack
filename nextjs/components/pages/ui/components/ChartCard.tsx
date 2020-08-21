import React from 'react'

interface ChartCardProps {
  title: string
  legends: Array<{
    title: string
    color: string
  }>
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children, legends }) => {
  return (
    <div className="card">
      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
        {title}
      </p>
      {children}
      <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
        {legends.map((legend) => (
          <div className="flex items-center" key={legend.title}>
            <span
              className={`inline-block w-3 h-3 mr-1 ${legend.color} rounded-full`}
            ></span>
            <span>{legend.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChartCard
