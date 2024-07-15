import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { META_DATA } from '@/constants';

import Router from './Router';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name='description' content={META_DATA.description} />
        <meta name='keywords' content={META_DATA.keywords} />
        <meta property='og:site_name' content={META_DATA.siteName} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:type' content='website' />
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
