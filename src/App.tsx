import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import MyRouter from './MyRouter';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyRouter />
    </QueryClientProvider>
  );
}

export default App;
