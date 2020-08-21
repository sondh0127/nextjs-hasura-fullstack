import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

import {
  barLegends,
  barOptions,
  doughnutLegends,
  doughnutOptions,
  lineLegends,
  lineOptions,
} from '../../../utils/chartsData'
import ChartCard from './components/ChartCard'
import CTA from './components/CTA'

const Charts: React.FC = ({ children }) => {
  return (
    <div className="container grid mx-auto">
      <h1 className="page-title">Charts</h1>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard legends={doughnutLegends} title="Doughnut">
          <Doughnut {...doughnutOptions} />
        </ChartCard>
        <ChartCard legends={lineLegends} title="Lines">
          <Line {...lineOptions} />
        </ChartCard>
        <ChartCard legends={barLegends} title="Lines">
          <Bar {...barOptions} />
        </ChartCard>
      </div>
    </div>
  )
}

export default Charts
