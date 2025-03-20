import { AppState, Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode,
} 
const Auth0ProviderWithNav = ({ children }: Props) => {

  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error('Unable to initialize auth');
  }
  const onRedirectCallBack = (appState?: AppState) => {
    // If we have a returnTo value store in appState,
    // then that is where the user is taken to thru navigate func if not take them to auth-callback
    navigate(appState?.returnTo || "/auth-callback")
  }

  return (
    <Auth0Provider 
        domain={domain} 
        clientId={clientId} 
        authorizationParams={{
            redirect_uri: redirectUri,
            audience
    }} 
    onRedirectCallback={onRedirectCallBack}
    >
        {children}
    </Auth0Provider>
)
};

export default Auth0ProviderWithNav;
