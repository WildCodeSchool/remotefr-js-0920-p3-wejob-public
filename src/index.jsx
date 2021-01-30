import regeneratorRuntime from 'regenerator-runtime';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './index.css';
import App from './App';
import AuthContext from './components/AuthContext';

const isProd = process.env.NODE_ENV === 'production';
const basename = isProd ? window.location.pathname.replace(/\/?$/, '') : '/';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="ErrorFallback" role="alert">
      <p>Something went wrong:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

const [user, setUser] = useState({
  id: 1,
  name: 'john Doe',
  email: 'martin@ht.com',
  phone: '0666666666',
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <AuthContext.Provider value={{ user: user }}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </AuthContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
