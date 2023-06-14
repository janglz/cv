import { PageLoader } from 'shared/ui';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages';
import { Blog } from 'pages/Blog';

export const Main = () => {
	return (
		<main>
			<PageLoader isPageReady />

			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/contacts" element={<MainPage />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</main>
	);
};
