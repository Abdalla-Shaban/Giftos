import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Why from "./components/Why";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Bag from "./pages/Bag";
import AuthProvider from "./components/Auth";
import Profile from "./components/Profile";
import ProductsProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <main className="px-5 md:px-20">
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/why-us" element={<Why />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/bag" element={<Bag />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </main>
  );
}

export default App;
