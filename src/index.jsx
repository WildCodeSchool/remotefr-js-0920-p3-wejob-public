import regeneratorRuntime from 'regenerator-runtime';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './index.css';
import App from './App';

// const isInWordPress = !process.env.REACT_APP_RUN_IN_WP || process.env.NODE_ENV === 'production';
// const basename = isInWordPress ? window.location.pathname.replace(/\/?$/, '') : '/';
// const basename = window.location.pathname.replace(/\/?$/, '');
const basename = '/';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="ErrorFallback" role="alert">
      <p>Something went wrong:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
