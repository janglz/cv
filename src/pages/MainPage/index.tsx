import { List } from 'shared/ui';
import styles from './styles.module.scss';
import { useParallax } from 'shared/hooks';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CVLayout } from './CVLayout';

export const MainPage = () => {
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const scrollHandlerRef = useRef<HTMLDivElement>(null);
	const contactsRef = useRef<HTMLDivElement>(null);
	const oneMoreRef = useRef<HTMLDivElement>(null);
	const { position } = useParallax({ anchor: scrollHandlerRef });

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === '/contacts') {
			return contactsRef.current?.scrollIntoView();
		}
		scrollHandlerRef.current?.scrollTo(0, 0);
	}, [location]);

	useEffect(() => {
		if (isFirstLoad) {
			setIsFirstLoad(false);
			return;
		}
		if (position > 99) {
			navigate('/contacts');
			return;
		}
		if (position < 1) {
			navigate('/');
		}
	}, [position]);

	return (
		<div ref={scrollHandlerRef} className={styles.main}>
			<div ref={oneMoreRef} />
			<CVLayout />
			{/* <div className={styles.contactsWrapper}>
				<div
					className={styles.parallax}
					// haha magic numbers
					// fixme
					style={{ left: `${position ** 1.2 - 230}%` }}
				/>
				<div
					className={styles.parallax2}
					style={{ left: `${position ** 1.2 - 210}%` }}
				/>
				<div
					className={styles.parallax3}
					style={{ transform: `skewX(${position ** 1.1 - 115}deg)` }}
				/>
				<section
					id="contacts-section"
					className={styles.contacts}
					ref={contactsRef}
				>
					<h2>contact me:</h2>
					<List isVertical>
						<a href="https://t.me/bananroman" target="_blanc">
							write in telegram
						</a>
						<a href="mailto:wpidish@gmail.com">send email</a>
						<a href="https://www.linkedin.com/in/maliuzhinets/" target="_blanc">
							follow on linkedin
						</a>
					</List>
				</section>
			</div> */}
		</div>
	);
};
