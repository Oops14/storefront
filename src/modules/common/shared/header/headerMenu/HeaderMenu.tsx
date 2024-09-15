import s from '../Header.module.scss'

const headerMenu = [{ title: 'Home' }, { title: 'Blog' }, { title: 'Shop' }]

const HeaderMenu = () => {
  return (
    <ul className={s.header_menu}>
      {headerMenu.map((i, index) => {
        return (
          <li key={index} className={s.header_list_item}>
            <a className={s.list_item_link} href="#">
              {i.title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderMenu
