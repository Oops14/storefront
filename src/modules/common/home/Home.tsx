import Grid from '@mui/material/Grid2'
import { useState } from 'react'
import AddInfoButton from '../../../components/AddInfoButton'
import ImageInput from '../../../components/ImageInput'
import Button from '../../../ui/Button'
import { generateUniqueId } from '../../../utils/generateUniqueId'
import DashboardTopPanel from '../../adminPanel/AdminTopPanel'
import ProductGridItem from '../../products/ProductGridItem'
import CategoryGridItem from '../shared/categories/CategoryGridItem'
import useCategoriesStore from '../shared/categories/store/useCategoriesStore'
import Header from '../shared/header/Header'
import Popup from '../shared/popup/Popup'
import Post from '../shared/posts/Post'
import style from './Home.module.scss'

const products = [
  {
    id: generateUniqueId(),
    title: 'Woo Album #4',
    img: '../../../public/products/cd_5_flat.webp',
    price: '125',
  },
  {
    id: generateUniqueId(),
    title: 'Woo Album #4',
    img: '../../../public/products/hoodie_3_front.webp',
    price: '125',
  },
  {
    id: generateUniqueId(),
    title: 'Woo Album #4',
    img: '../../../public/products/T_5_front.webp',
    price: '125',
  },
  {
    id: generateUniqueId(),
    title: 'Woo Album #4',
    img: '../../../public/products/T_7_front.webp',
    price: '125',
  },
]

const posts = [
  {
    title: 'Flying Ninja',
    description: 'This is a fantastic quality print and is happily hanging framed on my wall now.',
    img: '../../../public/poster_2_up.webp',
  },
  {
    title: 'Flying Ninja',
    description: 'This is a fantastic quality print and is happily hanging framed on my wall now.',
    img: '../../../public/poster_2_up.webp',
  },
  {
    title: 'Flying Ninja',
    description: 'This is a fantastic quality print and is happily hanging framed on my wall now.',
    img: '../../../public/poster_2_up.webp',
  },
  {
    title: 'Flying Ninja',
    description: 'This is a fantastic quality print and is happily hanging framed on my wall now.',
    img: '../../../public/poster_2_up.webp',
  },
]

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [categoryTitle, setCategoryTitle] = useState('')
  const [productTitle, setProductTitle] = useState('')
  const [productPrice, setProductPrice] = useState('')

  const categories = useCategoriesStore((state) => state.categories)
  const addNewCategory = useCategoriesStore((state) => state.addCategory)

  const handlePopup = () => {
    setIsOpen(true)
  }

  const handleImageChange = (imageFile: File | null) => {
    if (imageFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(imageFile)
    } else {
      setSelectedImage(null)
    }
  }

  const handleData = () => {
    const categoryItem = {
      id: generateUniqueId(),
      title: categoryTitle,
      img: selectedImage || '',
      quantity: 0,
    }

    if (categoryTitle.length && selectedImage) {
      addNewCategory(categoryItem)
      setIsOpen(false)
    }
  }

  const handleProductData = () => {
    // const categoryItem = {
    //   id: generateUniqueId(),
    //   title: categoryTitle,
    //   img: selectedImage || '',
    //   quantity: 0,
    // }
    // if (categoryTitle.length && selectedImage) {
    //   addNewCategory(categoryItem)
    //   setIsOpen(false)
    // }
  }

  console.log(categories)

  return (
    <>
      <DashboardTopPanel>Dashboard</DashboardTopPanel>
      <Header />

      {isOpen && (
        <Popup setIsOpen={setIsOpen}>
          {/* Custom content for adding a product */}
          <h5>Define a product</h5>
          <input type="text" onChange={(e) => setProductTitle(e.currentTarget.value)} placeholder="Product Title" />

          <h5>Upload an Image</h5>
          <ImageInput classNameDivInput="some-class" onImageChange={handleImageChange} />

          <input type="number" onChange={(e) => setProductPrice(e.currentTarget.value)} placeholder="Price" />

          {selectedImage && <p>Image file selected</p>}

          <Button className="btn" onClick={handleProductData}>
            Add product
          </Button>
        </Popup>
      )}

      <section className={style.categories}>
        <div className="container">
          <div className={style.section_title}>
            <h3>Product Categories</h3>
          </div>

          <Grid container spacing={5}>
            {categories.map((item, index) => {
              return (
                <Grid key={index} size={{ lg: 4, xs: 6, md: 6 }}>
                  <CategoryGridItem title={item.title} img={item.img} quantity={item.quantity} />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </section>

      <section className={style.products_section}>
        <div className="container">
          <div className={style.section_title}>
            <h3>Products</h3>
            <span>
              <AddInfoButton title="Add product" onClick={handlePopup} />
            </span>
          </div>

          <Grid container spacing={5}>
            {products.map((item, index) => {
              return (
                <Grid key={index} size={{ lg: 3, xs: 6, md: 6 }}>
                  <ProductGridItem title={item.title} img={item.img} price={item.price} />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </section>

      <section className={style.posts_section}>
        <div className="container">
          <div className={style.section_title}>
            <h3>Posts</h3>
          </div>

          <Grid container spacing={5}>
            {posts.map((item, index) => {
              return (
                <Grid key={index} size={{ lg: 3, xs: 6, md: 6 }}>
                  <Post title={item.title} description={item.description} img={item.img} />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </section>
    </>
  )
}

export default Home
