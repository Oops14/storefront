import { FC, InputHTMLAttributes } from 'react'

import BaseInput from '@ui/input/BaseInput'

import search_icon from '@assets/img/icons8-search.svg'

import s from './SearchInput.module.scss'

export interface SearchInput extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: FC<SearchInput> = ({ ...props }) => (
  <div className={s.search_input_element}>
    <BaseInput className={`${s.search_input} ${props.className}`} />
    <div className={s.input_icon}>
      <img className={s.icon_item} src={search_icon} alt="#" />
    </div>
  </div>
)

export default SearchInput
