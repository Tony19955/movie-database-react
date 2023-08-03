import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorPage from './pages/ErrorPage';

interface ReactErrorBoundaryProps {
    children: ReactNode;
}

export const ReactErrorBoundary = ({ children }: ReactErrorBoundaryProps): JSX.Element => {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorPage}
            onError={(error, errorInfo) => {
                // log the error
                console.log('Error caught!');
                console.error(error);
                console.error(errorInfo);
            }}
            onReset={() => {
                // reloading the page to restore the initial state
                // of the current page
                console.log('reloading the page...');
                window.location.reload();

                // other reset logic...
            }}
        >
            {children}
        </ErrorBoundary>
    );
};
