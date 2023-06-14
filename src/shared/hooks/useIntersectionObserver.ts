import { RefObject, useEffect, useState } from 'react';

interface Entry {
	isIntersecting: boolean;
	intersectionRatio: number;
}

export const useIntersectionObserver = (
	anchor: RefObject<HTMLDivElement>,
	margin?: Number
) => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	const observer = new IntersectionObserver(executeJob, {
		threshold: 0.1,
		root: document.body,
		rootMargin: `${margin || 0}px`,
	});

	useEffect(() => {
		if (anchor.current) {
			observer.observe(anchor.current);
		}
		return () => observer.disconnect();
	}, [isIntersecting]);

	function executeJob(entries: Array<Entry>) {
		if (entries.some((entry) => entry.isIntersecting)) {
			setIsIntersecting(true);
			return;
		}
		setIsIntersecting(false);
	}

	return {
		isIntersecting,
	};
};
