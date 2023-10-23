import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AdminLayout from "./components/Admin/Layout";
import SignIn from "./pages/Views/Account/SignIn";
import SignUp from "./pages/Views/Account/SignUp";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import User from "./pages/Admin/User/User";
import Cart from "./pages/Views/Cart/Cart";
import Home from "./pages/Views/Home/Home";
import Offer from "./pages/Views/Offer/Offer";
import Payment from "./pages/Views/payment/Payment";
import ProductDetails from "./pages/Views/ProductDetails/ProductDetails";
import ViewsLayout from "./components/Layout/ViewsLayout";
import Products from "./pages/Views/Products/Products";
import Orders from "./pages/Admin/Orders/Orders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* View Route */}
      <Route path="/" element={<ViewsLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentgateway" element={<Payment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>

      {/* Admin route */}
      <Route path="/" element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
