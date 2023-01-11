import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './page/home/Home';
import ItemDetails from './page/itemDetails/ItemDetails'
import Checkout from './page/checkout/Checkout';
import Confirmation from './page/checkout/Confirmation'
import Navbar from './page/global/Navbar';
import CartMenu from "./page/global/CartMenu";
import Footer from './page/global/Footer'


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="confirmation" element={ <Confirmation/> } />
        </Routes>
        <Footer/>
        <CartMenu/>
      </BrowserRouter>
    </div>
  )
}

export default App;
