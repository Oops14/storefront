import { FC, ReactNode } from 'react'

import s from './Container.module.scss'

interface Container {
  children: ReactNode
}

const Container: FC<Container> = ({ children }) => {
  return <div className={s.container}>{children}</div>
}

export default Container
