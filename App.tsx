import {QueryClient, QueryClientProvider} from 'react-query';

import {NavigationContainer} from '@react-navigation/native';

import {RootRoutes} from './src/routes/index';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootRoutes />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
