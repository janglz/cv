import { createRoot } from 'react-dom/client';
// import App from './app/App';
import React from 'react';
import { AppRoutesProvider } from 'app/providers/RoutesProvider';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<AppRoutesProvider />
	</React.StrictMode>
);
