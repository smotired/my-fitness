import React from 'react';
import { createRoot } from 'react-dom/client';
import { setupIonicReact  } from '@ionic/react';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
setupIonicReact ({
  mode: 'ios'
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);