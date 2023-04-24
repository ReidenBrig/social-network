import React from 'react';
// import store from "./redux/store";

import ReactDOM from 'react-dom/client';
import MainApp from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

// export let rerenderEntireTree = (state) => {

root.render(
    <MainApp/>
    // <React.StrictMode>
    /*<BrowserRouter>
        <Provider store={store}>

            <App/>
        </Provider>

    </BrowserRouter>*/
    // </React.StrictMode>
);

/*}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});*/

