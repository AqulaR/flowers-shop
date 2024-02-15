import { useRoutes } from "react-router-dom";
import MainPage from "./MainPage";

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
      path: "register",
      element: <>register</>,
    },
    {
      path: "login",
      element: <>login</>,
    },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
}
