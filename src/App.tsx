import { authContext, useProvideAuth } from './hooks/auth.hook';
import Routes from './routes/routes';

function App() {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      <Routes />
    </authContext.Provider>
  );
}

export default App;
