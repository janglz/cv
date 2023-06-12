import { Link, List } from 'shared/ui';
import { links } from './model';
import styles from './styles.module.scss';

export const Header = () => {
	return (
		<nav className={styles.wrapper}>
			<List>
				{links.map((link) => (
					<Link to={link.href} label={link.label} className={styles.link} />
				))}
			</List>
		</nav>
	);
};
