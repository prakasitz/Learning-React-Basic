import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';

//redux thunk เป็น middleware หรือ ส่วนเสริม ที่จะช่วยให้ redux มีความสามารถมากขึ้น
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));



ReactDOM.render( // ref Usage React 
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
