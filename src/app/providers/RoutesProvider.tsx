import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from 'pages';
import { Blog } from 'pages/Blog';
import App from 'app/App';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <MainPage />,
				children: [
					{
						path: '/contacts',
						element: <MainPage />,
					},
				],
			},
			{
				path: '/blog',
				element: <Blog />,
			},
		],
	},
	// todo 404
]);

export const AppRoutesProvider = () => <RouterProvider router={router} />;
