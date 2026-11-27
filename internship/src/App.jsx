import Register from './hooks/Register'
import Users from './hooks/Users'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
const App = () => {

    return (
        <>
            <nav className="mx-2 flex items-center justify-around rounded-2xl bg-blue-600 py-4 text-lg">
                <Link className="flex-1 text-center text-white hover:text-blue-100" to="/">Home</Link>
                <Link className="flex-1 text-center text-white hover:text-blue-100" to="/about">About</Link>
                <Link className="flex-1 text-center text-white hover:text-blue-100" to="/service">Service</Link>
                <Link className="flex-1 text-center text-white hover:text-blue-100" to="/contact">Contact</Link>
                <Link className="flex-1 text-center text-white hover:text-blue-100" to="/products">Products</Link>
            </nav>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/service" element={<Register />} />
               <Route path="/contact" element={<Users />} />
               <Route path="/products" element={<Products />} />
               <Route path="/productDetails/:id" element={<ProductDetails />} />
            </Routes>
        </>
    )
}

export default App