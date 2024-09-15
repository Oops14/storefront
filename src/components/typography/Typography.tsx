import { FC, ReactNode } from 'react'

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface Typography {
  tag?: TagVariants
  className?: string
  children: ReactNode
}

const Typography: FC<Typography> = ({ tag: Tag = 'p', className, children }) => (
  <Tag className={className}>{children}</Tag>
)

export default Typography
