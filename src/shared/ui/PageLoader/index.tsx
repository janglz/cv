import { createPortal } from 'react-dom';
import styles from './styles.module.scss';
import cn from 'classnames';

interface Props {
	isPageReady?: boolean;
}

export const PageLoader = function PageLoader({ isPageReady = true }: Props) {
	const divs = new Array(8).fill('');
	return createPortal(
		<div
			className={cn(styles.wrapper, {
				[styles.start]: isPageReady,
			})}
		>
			{divs.map((_, i) => (
				<div key={`key-loader-${i}`}>
					<div />
				</div>
			))}
		</div>,
		document.body
	);
};
