import { useRoutes } from "react-router-dom";
import MainPage from "./MainPage";
import Catalog from "./Catalog";
import AddItem from "./AddItem";
import Cart from "./Cart";

const NotFound = () => {
  return (
    <div className="not_found">
      <h1 className="display-4">404</h1>
      <p>страница не доступна</p>
    </div>
  );
};

export default function AppRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "catalog",
      element: <Catalog />,
    },
    {
      path: "register",
      element: <>register</>,
    },
    {
      path: "add",
      element: <AddItem />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "login",
      element: <>login</>,
    },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
}
