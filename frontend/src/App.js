import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductAdd from "./pages/ProductAdd/ProductAdd";
import ListProduct from "./pages/ListProduct/ListProduct";
import { productInputs, userInputs } from "./formSource";
import New from "./pages/new/New";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import "./style/dark.scss";

import { useContext } from "react";

import { DarkModeContext } from "./context/darkModeContext";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/productadd" element={<ProductAdd />} />
            <Route path="/listproduct" element={<ListProduct />} />
            <Route path="/dashboard">
              <Route index element={<Home />} />
              <Route path="users">
              <Route index element={<List type={1}/>} />

            </Route>
            <Route path="products">
              <Route index element={<List type={2}/>} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
