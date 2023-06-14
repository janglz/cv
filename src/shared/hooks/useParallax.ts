import { RefObject, useEffect, useState } from 'react';
import { debounce } from 'lodash';

interface Params {
	anchor?: RefObject<HTMLDivElement>;
}

export const useParallax = function useParallax({ anchor }: Params) {
	// TODO intersection observer
	const [position, setPosition] = useState(0);

	const scrollHandler = debounce((event: Event) => {
		const currentTarget = event.target as HTMLElement;
		const containerHeight = currentTarget?.clientHeight;
		const scrollHeight = currentTarget.scrollHeight;

		const scrollTop = currentTarget.scrollTop;
		setPosition(((scrollTop + containerHeight) / scrollHeight) * 150);
	}, 150);

	useEffect(() => {
		// const observer = new IntersectionObserver(
		// 	([entry]) => {
		// 		entry.target.addEventListener('scroll', scrollHandler);
		// 		console.log('observed', entry);
		// 	},
		// 	{ rootMargin: '800px' }
		// );

		if (anchor?.current) {
			// observer.observe(anchor.current);
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
