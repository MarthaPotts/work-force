// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FilterMenu from './components/FilterMenu/index.js';
import API from '../src/utils/API.js'; 
import Header from './components/Header/index.js';  

function App() {
  return (
    <div className="App">
      <Header />
      <API />
      <FilterMenu />
    </div>
  );
}

export default App;
