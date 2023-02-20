import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthContextProvider from '../context/authContext'
import SearchContextProvider from '../context/searchContext';
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuthContextProvider>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </AuthContextProvider>);
}

export default MyApp
