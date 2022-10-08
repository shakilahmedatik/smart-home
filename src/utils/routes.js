import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "./../components/Home";
import Shop from "./../components/Shop";
import Cart from "./../components/Cart";
import ErrorPage from "../components/ErrorPage";
import About from "./../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/shakilahmedatik/smart-home/main/public/products.json"
          ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
