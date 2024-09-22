import { ReactNode, CSSProperties, FC, HTMLAttributes } from 'react'

import s from './Grid.module.scss'

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number
  rows?: number
  columnGap?: string
  rowGap?: string
  children: ReactNode
}

const Grid: FC<GridProps> = ({ columns = 4, rows, columnGap = '20px', rowGap = '20px', children, ...props }) => {
  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: rows ? `repeat(${rows}, 1fr)` : 'auto',
    gridColumnGap: columnGap,
    gridRowGap: rowGap,
  }

  return (
    <div style={gridStyle} className={`${s.grid} ${props.className}`}>
      {children}
    </div>
  )
}

export default Grid
