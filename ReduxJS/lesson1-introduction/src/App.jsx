import React from 'react'
import { createStore } from 'redux'




const intialState = {count:0};
const counterReducer = (state=intialState,action)=>{
  switch (action.type) {
    case "INCREMENT":
        return {count:state.count+1};    
    case 'DECREMENT':
      return {count:state.count-1}
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(()=>{
  console.log(store.getState());
})



store.dispatch({
  type:"INCREMENT"
})

store.dispatch({
  type:"INCREMENT"
})

store.dispatch({
  type:"DECREMENT"
})




const App = () => {
  return (
    <div>App</div>
  )
}

export default App