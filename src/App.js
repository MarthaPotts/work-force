import React from 'react'; 
import Main from './components/Main.js'; 
import Wrapper from './components/Wrapper.js'; 
import Header from './components/Header.js'; 

import './App.css'; 

function App() {
    return(
    <div className="App">
        <Wrapper >
        <Header />
        <Main />
        </Wrapper>
    </div>
    ); 
}

export default App; 