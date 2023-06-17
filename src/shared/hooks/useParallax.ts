import { RefObject, useEffect, useState } from 'react';
import { debounce } from 'lodash';

interface Params {
	anchor?: RefObject<HTMLDivElement>;
}

export const useParallax = function useParallax({ anchor }: Params) {
	const [position, setPosition] = useState(0);

	const scrollHandler = debounce((event: Event) => {
		const currentTarget = event.target as HTMLElement;

		const offsetHeight = currentTarget.offsetHeight;
		const scrollTop = currentTarget.scrollTop;
		const scrollHeight = currentTarget.scrollHeight;

		setPosition((scrollTop / (scrollHeight - offsetHeight)) * 100);
	}, 100);

	useEffect(() => {
		if (anchor?.current) {
			anchor.current.addEventListener('scroll', scrollHandler);

			return () => {
				anchor.current?.removeEventListener('scroll', scrollHandler);
			};
		}
	}, []);

	return {
		position,
	};
};
