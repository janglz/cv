import { useEffect, useState } from 'react';

interface entryDef {
	isIntersecting: boolean;
	intersectionRatio: number;
}
type scrollObserver = () => IntersectionObserver;
type isIntersecting = boolean;
type setisIntersecting = React.Dispatch<React.SetStateAction<boolean>>;

interface IObserver {
	createScrollObserver: scrollObserver;
	isIntersecting: isIntersecting;
	setisIntersecting: setisIntersecting;
}

export const useIntersectionObserver = (
	anchor: React.RefObject<HTMLDivElement>
): IObserver => {
	const [isIntersecting, setisIntersecting] = useState(false);

	const observer = new IntersectionObserver(executeJob, {
		threshold: 0.1,
		root: anchor.current ?? document.body,
		rootMargin: '1800px 1800px 1800px 1800px',
	});

	useEffect(() => {
		observer.disconnect();
	}, [isIntersecting]);

	function executeJob(entries: Array<entryDef>) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setisIntersecting(true);
			}
		});
	}

	function createScrollObserver() {
		return observer;
	}

	return {
		createScrollObserver,
		isIntersecting,
		setisIntersecting,
	};
};
