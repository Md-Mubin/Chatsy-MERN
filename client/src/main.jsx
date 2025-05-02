import { Provider } from "react-redux"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import myStore from "./Store/index.js";

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <App />
  </Provider>,
);