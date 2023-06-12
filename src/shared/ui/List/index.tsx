import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
	children: ReactNode;
	isVertical?: boolean;
	className?: string;
}

export const List = ({ children, isVertical = false, className }: Props) => {
	return (
		<ul className={cn(styles.ul, { [styles.vertical]: isVertical }, className)}>
			{Array.isArray(children) ? (
				React.Children.map(children, (child) => <li>{child}</li>)
			) : (
				<li>{children}</li>
			)}
		</ul>
	);
};
