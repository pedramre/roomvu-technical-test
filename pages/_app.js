import '../styles/libraries/bootstrap.min.css';
import '../styles/libraries/bootstrap-utilities.min.css';
import '../styles/globals.css';
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux/store'
import NextNProgress from 'nextjs-progressbar';

import  Layout  from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return(
      <Layout>
          <NextNProgress
            color="#d23669"
          />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
      </Layout>
  )
}

// initialize store and wrapper store
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)
