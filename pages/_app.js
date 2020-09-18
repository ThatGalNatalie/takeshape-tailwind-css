// import '../styles/globals.css';
import '../styles/index.css';

import withApollo from '../lib/withApollo';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withApollo(MyApp);
