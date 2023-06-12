import styles from './styles.module.scss';

interface Props {
	header: JSX.Element;
	main: JSX.Element;
}

export const Layout = ({ header, main }: Props) => (
	<div className={styles.wrapper}>
		<div className={styles.header}>{header}</div>
		<div className={styles.main}>{main}</div>
	</div>
);
