import "./App.css";
import "./index.css";
import { Shop } from "./Pages/shop/shop";
import { Cart } from "./Pages/cart/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { ShopContextProvider } from "./context/shopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
