import { initAuth0 } from "@auth0/nextjs-auth0";

export const auth0 = initAuth0({
  secret: "process.env.REACT_APP_AUTH0_SECRET",
  issuerBaseURL: process.env.REACT_APP_AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.REACT_APP_AUTH0_BASE_URL,
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  clientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
});
