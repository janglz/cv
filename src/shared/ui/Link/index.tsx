import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
	to: string;
	label: ReactNode;
	className?: string;
}

export const Link = ({ to, label, className }: Props) => {
	const isActiveLink = true;

	return (
		<a
			className={cn(
				styles.href,
				{
					[styles.hrefActive]: isActiveLink,
				},
				className
			)}
			href={to}
		>
			{label}
		</a>
	);
};
