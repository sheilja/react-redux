import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'; 

import store from './redux/store';
import UserContainer from './components/userContainer'
import Login  from "./components/Login";

import {BrowserRouter,Route} from 'react-router-dom';
import Event from './components/event'
function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
         
         <Login/>
         <Route path="/event" exact component={Event}/>
         
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
