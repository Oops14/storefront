import { FC, HTMLAttributes, ReactNode } from 'react'

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface Typography extends HTMLAttributes<HTMLElement> {
  tag?: TagVariants
  children: ReactNode
}

const Typography: FC<Typography> = ({ tag: Tag = 'p', children, ...props }) => <Tag {...props}>{children}</Tag>

export default Typography
