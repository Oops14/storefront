import { FC, ReactNode } from 'react'

import s from './Popup.module.scss'

interface PopupProps {
  setIsOpen?: (isOpen: boolean) => void
  children: ReactNode
}

const Popup: FC<PopupProps> = ({ setIsOpen, children }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    const popupData = target.getAttribute('data-popup')

    if (popupData === 'background' && setIsOpen) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <div data-popup="background" className={s.popup_bg} onClick={handleClick}></div>
      <div className={s.popup}>
        <div className={s.container}>{children}</div>
      </div>
    </>
  )
}

export default Popup
