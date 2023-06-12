import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
	to: string;
	label: ReactNode;
	className?: string;
}

export const Link = ({ to, label, className }: Props) => (
	<a className={cn(styles.href, className)} href={to}>
		{label}
	</a>
);
