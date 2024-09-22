import SearchInput from '@components/inputs/searchInput/SearchInput'

import MiniCart from '@modules/cart/components/MiniCart'

import HeaderMenu from './headerMenu/HeaderMenu'

import s from './Header.module.scss'

const Header = () => {
  return (
    <div className={s.main_header}>
      <div className={s.container}>
        <div className={s.header_top}>
          <div className={s.logo}>
            <span>Storefront</span>
          </div>
          <div className={s.right_menu}>
            <div className={s.my_account}>
              <a className={s.my_account_link} href="#">
                My Account
              </a>
            </div>
            <div className={s.search}>
              <SearchInput className={s.header_search} />
            </div>
          </div>
        </div>
        <div className={s.header_bottom}>
          <div className={s.header_menu_block}>
            <HeaderMenu />
          </div>
          <MiniCart />
        </div>
      </div>
    </div>
  )
}

export default Header
