import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
	children: ReactNode;
	isVertical?: boolean;
	isDecorated?: boolean;
	className?: string;
}

export const List = ({
	children,
	isVertical = false,
	className,
	isDecorated,
}: Props) => {
	return (
		<ul
			className={cn(
				styles.ul,
				{
					[styles.vertical]: isVertical,
				},
				className
			)}
		>
			{Array.isArray(children) ? (
				React.Children.map(children, (child, i) => (
					<li key={i}>
						<span className={cn({ [styles.decorated]: isDecorated })}>
							<span />
						</span>
						{child}
					</li>
				))
			) : (
				<li>
					<span className={cn({ [styles.decorated]: isDecorated })}>
						<span />
					</span>
					{children}
				</li>
			)}
		</ul>
	);
};
