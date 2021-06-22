import LayoutWrapper from '../layouts/layoutWrapper'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <LayoutWrapper><Component {...pageProps} /></LayoutWrapper>
}

export default MyApp
