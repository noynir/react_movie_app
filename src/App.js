import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesContainer from './MoviesWithRedux/containers/MoviesContainer';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <MoviesContainer></MoviesContainer>      
//       </div>
//     );
//   }
// } 

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MoviesContainer></MoviesContainer>      
        </div>
      </Provider>
    );
  }
} 

export default App;
