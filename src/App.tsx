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

        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={META_DATA.siteName} />
        <meta property='og:title' content={META_DATA.title} />
        <meta property='og:description' content={META_DATA.description} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:image' content={META_DATA.ogImage} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content={META_DATA.ogImageWidth} />
        <meta property='og:image:height' content={META_DATA.ogImageHeight} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content={META_DATA.title} />
        <meta property='twitter:description' content={META_DATA.description} />
        <meta property='twitter:image' content={META_DATA.twitterImage} />
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
