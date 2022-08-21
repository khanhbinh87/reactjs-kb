// import logo from './logo.svg';
// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from "react";

class App extends React.Component {
  state = {
    name:"binh",
    age:34
  }
  handleClick(event){
    this.setState({name:event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }
  render  () {
    return (
      <div>
        Hello , my name is {this.state.name}
        <p></p>
        <form onSubmit={(event) => this.handleSubmit(event)} >
            <input 
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleClick(event)} />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
