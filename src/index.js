import ReactDOM from 'react-dom/client';

// React-Router-DOM
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React-Router-DOM
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
