import { FC, ReactNode } from 'react'

import Typography from '@components/typography/Typography'

import Container from '../container/Container'

import s from './PageTitle.module.scss'

interface PageTitle {
  children: ReactNode
}

const PageTitle: FC<PageTitle> = ({ children }) => (
  <div className={s.page_title}>
    <Container>
      <Typography tag="h2" className={s.blog_title}>
        {children}
      </Typography>
    </Container>
  </div>
)

export default PageTitle
