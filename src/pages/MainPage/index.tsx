import { List } from 'shared/ui';
import { cvText } from './mock';
import styles from './styles.module.scss';
import { useParallax } from 'shared/hooks';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
	const scrollHandlerRef = useRef<HTMLDivElement>(null);
	const contactsRef = useRef<HTMLDivElement>(null);
	const { position } = useParallax({ anchor: scrollHandlerRef });

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (position > 149) {
			navigate('/contacts');
			return;
		}
		if (position < 76) {
			navigate('/');
		}
	}, [position]);

	console.log(position);

	useEffect(() => {
		if (location.pathname === '/contacts') {
			return contactsRef.current?.scrollIntoView();
		}
		scrollHandlerRef.current?.scrollTo(0, 0);
	}, [location]);

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
					className={styles.contacts}
					ref={contactsRef}
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
