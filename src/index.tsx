import ReactDOM from 'react-dom/client';
import './index.css';
import MillerTime from './MillerTime';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MillerTime />
);
