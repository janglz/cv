import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { NavLink as RouterLink } from 'react-router-dom';

interface Props {
	to: string;
	label: ReactNode;
	className?: string;
}

export const Link = ({ to, label, className }: Props) => {
	return (
		<RouterLink
			className={({ isActive }) =>
				cn(
					styles.href,
					{
						[styles.hrefActive]: isActive,
					},
					className
				)
			}
			to={to}
		>
			{label}
		</RouterLink>
	);
};
