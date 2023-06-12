import styles from './styles.module.scss';
import cn from 'classnames';

interface Props {
	isPageReady?: boolean;
}

export const PageLoader = function PageLoader({ isPageReady = true }: Props) {
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.start]: isPageReady,
			})}
		>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
