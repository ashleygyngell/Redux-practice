import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // STORE -> Globalised State

// // ACTION INCREMENT

// const incrament = () => {
//   return {
//     type: 'INCRAMENT',
//   };
// };

// const decrament = () => {
//   return {
//     type: 'DECRAMENT',
//   };
// };

// // REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCRAMENT':
//       return state + 1;
//     case 'DECRAMENT':
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH
// store.dispatch(incrament());
// store.dispatch(incrament());
// store.dispatch(decrament());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
