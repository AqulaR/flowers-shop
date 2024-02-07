import { useRoutes } from "react-router-dom";

const NotFound = () => {
	return (
		<div className='not_found'>
			<h1 className='display-4'>404</h1>
			<p>страница не доступна</p>
		</div>
	);
};

export default function AppRoutes() {
	let routes = useRoutes([
		{
			path: "/",
			element: <>главная</>,
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
