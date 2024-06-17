import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import MillerTimeView from './views/MillerTimeView';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    }
  }
})

function MillerTime() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MillerTimeView />
      </QueryClientProvider>
    </>
  );
}

export default MillerTime;
