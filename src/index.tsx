import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App';

const rootElement = document.querySelector('#app');

if (!!rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
