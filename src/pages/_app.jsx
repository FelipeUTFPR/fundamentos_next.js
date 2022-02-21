//aqui os css globais podem ser referenciados, eles afetam todo o nosso programa
import '../styles/globals.css'
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
