
import React from 'react';
import Navbar from './NavBar';
import Footer from './footer';

class App extends React.Component
{
  render()
  {
  return(
    
    <div>
      <Navbar></Navbar>
    <p className="a">
      <span style={{color:'blue',fontSize:'80px'}}>G</span>
      <span style={{color:'red'}}>o</span>
      <span style={{color:'yellow'}}>o</span>
      <span style={{color:'blue'}}>g</span>
      <span style={{color:'green'}}>l</span>
      <span style={{color:'red'}}>e</span>
    </p>
    
    <input className="b"></input> <br />

    <button className="a1">Google Search</button>
    <button className="a2">I'm feeling Lucky</button>
    <Footer></Footer>
    </div>

    

  
  )
  }
}
 export default App;
