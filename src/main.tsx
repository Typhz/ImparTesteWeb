import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';

import './styles/global.scss';
import './styles/variables.scss';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </React.StrictMode>,
)
