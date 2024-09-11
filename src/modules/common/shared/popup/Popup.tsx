import { FC, ReactNode } from 'react'

import style from './Popup.module.scss'

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
      <div data-popup="background" className={style.popup_bg} onClick={handleClick}></div>
      <div className={style.popup}>
        <div className="container">{children}</div>
      </div>
    </>
  )
}

export default Popup
