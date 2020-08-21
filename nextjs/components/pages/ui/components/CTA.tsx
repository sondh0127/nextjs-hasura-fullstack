import React, { useCallback, useEffect, useMemo, useState } from 'react'

import StarIcon from '../../../icons/StarIcon'

const CTA: React.FC = ({ children }) => {
  return (
    <a
      className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
      href="https://github.com/estevanmaito/windmill-dashboard"
    >
      <div className="flex items-center">
        <StarIcon />
        <span>Star this project on GitHub</span>
      </div>
      <span>View more &RightArrow;</span>
    </a>
  )
}

export default CTA
