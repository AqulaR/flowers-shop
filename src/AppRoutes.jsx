import { useRoutes } from "react-router-dom";
import Home from "./home";
import Catalog from "./catalog";
import Login from "./login";
import Registration from "./registration";
import Bucket from "./bucket";
import Lk from "./lk";
import Card from "./card";

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
      element: <Home />,
    },
    {
      path: "catalog",
      element: <Catalog />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/bucket",
      element: <Bucket />,
    },
    {
      path: "/lk",
      element: <Lk />,
    },
    {
      path: "/card",
      element: <Card />,
    },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
}
