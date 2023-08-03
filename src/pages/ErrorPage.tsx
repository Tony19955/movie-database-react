import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

export const ErrorPage = ({ resetErrorBoundary }: FallbackProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <div>
            <div>404</div>
            <div>{t('error-not-found')}</div>
            {resetErrorBoundary && (
                <div>
                    <button onClick={resetErrorBoundary}>🔄 {t('label-try-again')}</button>
                </div>
            )}
        </div>
    );
};

export default ErrorPage;
