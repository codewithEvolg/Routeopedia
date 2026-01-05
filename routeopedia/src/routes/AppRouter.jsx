import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ProductList from "../pages/product/ProductList";
import ProductDetail from "../pages/product/ProductDetail";
import ProductLayout from "../layouts/ProductLayout";
import AllProduct from "../pages/product/productCategory/AllProduct";
import Electronics from "../pages/product/productCategory/Electronics";
import Clothing from "../pages/product/productCategory/Clothing";
import Books from "../pages/product/productCategory/Books";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products1" element={<ProductList />} />
      <Route path="/products" element={<ProductLayout />}>
        <Route index element={<AllProduct />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="clothing" element={<Clothing />} />
        <Route path="books" element={<Books />} />
      </Route>
      <Route path="/products/item/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
