import { List } from 'shared/ui';
import { cvText } from './mock';
import styles from './styles.module.scss';
import { useParallax } from 'shared/hooks';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const MainPage = () => {
	const scrollHandlerRef = useRef<HTMLDivElement>(null);
	const contactsRef = useRef<HTMLElement>(null);
	const { position } = useParallax({ anchor: scrollHandlerRef });

	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === '/contacts' && contactsRef.current) {
			// contactsRef.current?.scrollIntoView();
			contactsRef.current?.scrollIntoView();
			return;
		}
		scrollHandlerRef.current?.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div ref={scrollHandlerRef} className={styles.main}>
			<section className={styles.cv}>{cvText}</section>

			<div className={styles.contactsWrapper}>
				<div
					className={styles.parallax}
					style={{ left: `${position - 150}%` }}
				/>
				<div
					className={styles.parallax2}
					style={{ left: `${position * 3 - 350}%` }}
				/>
				<div
					className={styles.parallax3}
					style={{ transform: `skewX(${120 - position / 2}deg)` }}
				/>
				<section
					id="contacts-section"
					ref={contactsRef}
					className={styles.contacts}
				>
					<h2>contacts</h2>
					<List isVertical>
						<span key="1">telegram: @bananroman</span>
						<span key="2">mail: wpidish@gmail.com</span>
					</List>
				</section>
			</div>
		</div>
	);
};
