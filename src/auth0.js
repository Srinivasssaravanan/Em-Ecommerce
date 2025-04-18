import createAuth0Client from "@auth0/auth0-spa-js";

const auth0 = await createAuth0Client({
  domain: 'dev-xyk6mu0okhepw1zc.us.auth0.com', // Your Auth0 domain (found in the Auth0 dashboard)
  client_id: 'QU53jcjmaBSy55oFjDBg66zJGMNvEwTc', // Your Auth0 client ID (also from the Auth0 dashboard)
  redirect_uri: 'https://em-ecommerce.vercel.app/callback', // The callback URL you registered in Auth0
});

// Initialize and login function here
