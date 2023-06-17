import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
	children: ReactNode;
}

export const Chip = ({ children }: Props) => {
	return <span className={styles.chip}>{children}</span>;
};
