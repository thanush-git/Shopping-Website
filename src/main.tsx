import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import './Styles/styles.css';
import App from './Components/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="tomato" grayColor="sand" radius="small">
      <App />
    </Theme>
  </StrictMode>
);
