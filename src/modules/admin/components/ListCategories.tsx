import useCategoriesStore from '../../common/shared/categories/store/useCategoriesStore'

const ListCategories = () => {
  const categories = useCategoriesStore((state) => state.categories)

  return (
    <ul>
      {categories.map((i) => {
        return <li key={i.id}>{i.title}</li>
      })}
    </ul>
  )
}

export default ListCategories
