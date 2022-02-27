import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}


// This css affects all pages. 
// Ex. reset css etc. is very good for your web site design.