import './i18n.ts';
import './styles/reset.css';

import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { store } from './redux/store.ts';
import { ReactErrorBoundary } from './ErrorBoundary.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ReactErrorBoundary>
                    <App />
                </ReactErrorBoundary>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
