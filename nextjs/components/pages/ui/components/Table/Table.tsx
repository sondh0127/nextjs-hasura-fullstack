import React, { PropsWithChildren, useCallback } from 'react'

type TableProps = PropsWithChildren<unknown>
export type Ref = HTMLTableElement

const Table = React.forwardRef<Ref, TableProps>(({ children }, ref) => {
  return (
    <div className="w-full overflow-x-auto">
      <table ref={ref} className="w-full whitespace-no-wrap">
        {children}
      </table>
    </div>
  )
})

Table.displayName = 'Table'

export default Table
