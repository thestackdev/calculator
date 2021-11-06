import { Provider } from 'context/calculator'
import 'styles/globals.css'
import 'styles/home.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
