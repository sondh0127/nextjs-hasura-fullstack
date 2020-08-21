import React, { useCallback, useEffect, useMemo, useState } from 'react'

interface CardProps {}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      {children}
    </div>
  )
}

export default Card
