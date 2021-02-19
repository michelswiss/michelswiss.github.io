import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
/**
 *  import App from './App';
 *  - import after UI version completed
 */
/**
 * import App from './new.archive.stucture/App';
 * UI theme updated 18.02.2021 - 11:36
 */
import App from './architecture.directory/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(React);