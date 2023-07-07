import { Button, Link, List } from 'shared/ui';
import { links } from './model';
import styles from './styles.module.scss';
import { MouseEvent, useState } from 'react';
import cn from 'classnames';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggleNav = () => setIsOpen((prev) => !prev);
	const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		setIsOpen(false);
	};
	return (
		<div className={styles.wrapper}>
			<Button onClick={handleToggleNav} className={styles.toggleButton}>
				toggle nav
			</Button>
			<div
				className={cn(styles.overlay, {
					[styles.isOpen]: isOpen,
				})}
				role="button"
				onClick={handleOverlayClick}
			>
				<nav
					className={cn(styles.nav, {
						[styles.isOpen]: isOpen,
					})}
					style={{ width: '100%' }}
				>
					<List className={styles.list}>
						<span style={{ fontSize: '18px' }} className={styles.link}>
							telegram: bananroman
						</span>
						<span style={{ fontSize: '18px' }} className={styles.link}>
							mail: wpidish@gmail.com
						</span>
						<span style={{ fontSize: '18px' }} className={styles.link}>
							linkedin: maliuzhinets
						</span>
						<span style={{ fontSize: '18px' }} className={styles.link}>
							phone: +79037094016
						</span>
						{/* {links.map((link) => (
							<Button key={link.href} onClick={handleToggleNav}>
								<Link
									to={link.href}
									label={link.label}
									className={styles.link}
								/>
							</Button>
						))} */}
					</List>
				</nav>
			</div>
		</div>
	);
};
