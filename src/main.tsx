import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import './index.css';
import App from './App.tsx';
import store, { persistor } from "./store/index.tsx";
import {PersistGate} from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </StrictMode>
  </Provider>
)
