import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/header';
import Names from './components/Names/names';
import Footer from './components/Footer/footer';



const App = ()=>{
  return (
    <div>
      <Header/>
      <Names/>
      <Footer/>
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById("root"));
