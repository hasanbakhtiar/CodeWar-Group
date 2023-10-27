import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './manager/store/configureStore';
import { addBlog } from './manager/action/blogAction';
import App from './App';

import { Provider } from 'react-redux';
const mystore = configureStore();


mystore.subscribe(() => {
  console.log(mystore.getState());
});


mystore.dispatch(addBlog({ title: "title1", desc: "desc1" }));
mystore.dispatch(addBlog({ title: "title2", desc: "desc2" }));
mystore.dispatch(addBlog({ title: "title3", desc: "desc3" }));




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
