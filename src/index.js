import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StripeProvider } from "react-stripe-elements";
import { STRIPE_KEY } from "./components/STRIPE_KEY"

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <StripeProvider apiKey={STRIPE_KEY}>
    
      <App />
    </StripeProvider>,
    document.getElementById("root")
  );
//   registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
