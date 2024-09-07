import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '../assets/App.scss'
import router from '../routes/root'

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
