import { Button, Link, List } from 'shared/ui';
import { links } from './model';
import styles from './styles.module.scss';
import { useState } from 'react';
import cn from 'classnames';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggleNav = () => setIsOpen((prev) => !prev);
	return (
		<div className={styles.wrapper}>
			<Button onClick={handleToggleNav} className={styles.toggleButton}>
				toggle nav
			</Button>
			<nav
				className={cn(styles.nav, {
					[styles.isOpen]: isOpen,
				})}
			>
				<List className={styles.list}>
					{links.map((link) => (
						<Button key={link.href} onClick={handleToggleNav}>
							<Link to={link.href} label={link.label} className={styles.link} />
						</Button>
					))}
				</List>
			</nav>
		</div>
	);
};
