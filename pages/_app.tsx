import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ApolloProvider } from '@apollo/client';
import { AppPropsWithLayout } from '../types/types';
import { apolloClient } from '../apollo/apolloClient.config';
import { Provider } from 'react-redux';
import { store } from '../src/store';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
