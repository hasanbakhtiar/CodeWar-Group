import React from 'react'
import ReactDOM from 'react-dom/client'
import configureStore from './manager/store/configureStore';
const store = configureStore();


store.subscribe(()=>{
  console.log(store.getState());
});


store.dispatch({
  type:"SHOW_BLOG"
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <h1>Redux App</h1>
  </React.StrictMode>,
)
