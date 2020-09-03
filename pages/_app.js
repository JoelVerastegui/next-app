import '../styles.scss';
import { Provider } from 'react-redux';
import generateStore from '../redux/store';

const app = ({ Component, pageProps }) => {
    return (
        <Provider store={generateStore()}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default app;