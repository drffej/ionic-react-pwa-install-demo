import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { IonicPWAInstallProvider}  from 'ionic-react-pwa-install'
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <IonicPWAInstallProvider>
      <App />
      </IonicPWAInstallProvider>
  </React.StrictMode>
);