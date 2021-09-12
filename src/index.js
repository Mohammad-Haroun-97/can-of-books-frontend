import React from 'react';
    import ReactDOM from 'react-dom';
    import { Auth0Provider } from '@auth0/auth0-react';
    import App from './App';
    ReactDOM.render(
      <Auth0Provider
        domain="mohammad-haroun.us.auth0.com"
        clientId="ahNdSHMrJHS4KkyP1w1SnLhTykkrj1R2"
        redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
    document.getElementById('root')
 );