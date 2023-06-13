import { Main } from 'widgets/Main';
import { Header } from 'widgets/Header';
import 'shared/styles/normalize.scss';
import { Layout } from 'shared/ui';

export default function App() {
	return <Layout header={<Header />} main={<Main />} />;
}
