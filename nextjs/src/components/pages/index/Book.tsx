import { Badge } from '@retail-ui/core'
import React from 'react'

const Book: React.FC = () => {
  return (
    <div
      className={`flex flex-col sm:flex-row max-w-xs mx-auto sm:max-w-lg lg:max-w-2xl`}
    >
      <img
        alt="room hinh"
        src="https://d2xf5gjipzd8cd.cloudfront.net/available/431227550/431227550_600x504.jpg"
        className={`object-cover object-bottom rounded-t-lg sm:rounded-l-lg sm:w-1/2 w-full`}
      />
      <div
        className={`rounded-b-lg sm:rounded-r-lg bg-white sm:p-6 flex flex-col justify-between p-5 flex-grow`}
      >
        <div className={`space-y-1`}>
          <h2 className={`text-xl lg:text-2xl font-semibold`}>
            The Local Hostel
          </h2>
          <Badge variant="light" color="success" className={`lg:text-sm`}>
            Great for solo travellers
          </Badge>
          <p className={`flex items-center lg:text-base text-xs text-gray-800`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-4 w-4 mr-1 text-gray-500`}
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            6km from city center
          </p>
        </div>
        <p className={`text-base lg:text-xl`}>
          from <span className={`font-semibold`}>$35</span> a night
        </p>
      </div>
    </div>
  )
}

export default Book
