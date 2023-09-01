
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    render() {
        return (<>
            <h1>Hello React</h1>
            <p>Im learning React Js</p>
            <p>React is very powerfull!</p>
        </>)
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));
