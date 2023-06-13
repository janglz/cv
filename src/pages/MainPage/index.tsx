import { List } from 'shared/ui';
import { cvText } from './mock';
import styles from './styles.module.scss';
import { useParallax } from 'shared/hooks';
import { useRef } from 'react';

export const MainPage = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { position } = useParallax({ anchor: ref });

	return (
		<div ref={ref} className={styles.main}>
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
				<section>
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
