import style from './Header.module.scss'

const Header = () => {
  return (
    <div className={style.main_header}>
      <div className="container">
        <div className={style.header_top}>
          <div className={style.logo}>
            <span>Storefront</span>
          </div>
          <div className={style.right_menu}>
            <div className={style.my_account}>My Account</div>
            <div className={style.search}>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={style.header_bottom}>
          <div className={style.header_menu_block}>
            <ul className={style.header_menu}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>
          <a href="#" className={style.mini_cart}>
            <span>0.00</span>
            <span className={style.item_counter}>0 items</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
