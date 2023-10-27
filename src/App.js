import React from 'react' 
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals, action,romance,fantacy} from './components/Constants/urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals}/>  
      <RowPost title='Action' isSmall  url={action}/>  
      <RowPost title='Romance' isSmall url={romance}/>  
      <RowPost title='Fantasy' isSmall url={fantacy}/>  

    </div>
  );
}

export default App;
