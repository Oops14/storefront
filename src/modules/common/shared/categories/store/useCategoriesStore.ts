import { create } from 'zustand'

export interface Category {
  title: string
  img: string | undefined
  quantity: number
}

interface CategoriesState {
  categories: Category[]
  addCategory: (newCategory: Category) => void
}

const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [
    {
      title: 'Closing',
      img: '../../../public/clothing.webp',
      quantity: 47,
    },
    {
      title: 'Kitchen',
      img: '../../../public/kitchen-category.webp',
      quantity: 47,
    },
    {
      title: 'Electronics',
      img: '../../../public/electronics-category.webp',
      quantity: 47,
    },
  ],
  addCategory: (newCategory) =>
    set((state) => ({
      categories: [...state.categories, newCategory],
    })),
}))

export default useCategoriesStore
