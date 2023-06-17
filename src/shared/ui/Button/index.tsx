type Props = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export const Button = (props: Props) => (
	<button {...props}>{props.children}</button>
);
