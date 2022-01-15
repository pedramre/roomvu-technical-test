import '../styles/libraries/bootstrap.min.css';
import '../styles/libraries/bootstrap-utilities.min.css';
import '../styles/globals.css';

import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return(
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
