import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './manager/store/configureStore';
import { addBlog, getBlogsFromDatabase } from './manager/action/blogAction';
import App from './App';

import { Provider } from 'react-redux';
const mystore = configureStore();


mystore.subscribe(() => {
  console.log(mystore.getState());
});


mystore.dispatch(addBlog({ title: "title1", desc: "desc1" }));




const result = (
  <Provider store={mystore}>
      <App />
  </Provider>
)



ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

mystore.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})