import { PageLoader } from 'shared/ui';
import { cvText } from './mock';

export const Main = () => {
	return (
		<main>
			<PageLoader isPageReady />
			{cvText}
		</main>
	);
};
