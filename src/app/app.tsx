// import "./App.css";

import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </PersistGate>
  );
}

export default App;
