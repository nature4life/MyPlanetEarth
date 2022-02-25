import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { Routing } from './components/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { IntroGlobe } from './pages/First_Intro/IntroGlobe';

function App() {

    
    

    return (
<>
      {/* // <Router>
      //   <Routes> */}
          {/* < Route exact path="/" element={<IntroGlobe/>}> */}
            <IntroGlobe/>
          {/* </Route> */}
      {/* //   </Routes>
      // </Router>
        
        // <Router>

        //     <div>

        //     <Routing 
        //     />
        //     </div>
        //     </Router> */}

      </> 
    );
}

export default App;
