import React from 'react';
// import store from "./redux/store";
import store from "./redux/redux-store";

import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

// export let rerenderEntireTree = (state) => {

    root.render(
        // <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>

                    <App
                        // state={state}
                        //  dispatch={store.dispatch.bind(store)}
                        //  store={store}
                    />
                </Provider>

            </BrowserRouter>
        // </React.StrictMode>
    );

/*}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});*/

