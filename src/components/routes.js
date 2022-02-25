import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IntroGlobe } from '../pages/First_Intro/IntroGlobe';
// import { SecondPage } from '../../../pages/Second_DataCleaning/SecondPage';
// import { ThirdPage } from '../../../pages/Three_VisFundamentals/ThirdPage';
// import { FourthPage } from '../../../pages/Fourth_DimsReduction/FourthPage';
// import { FifthPage } from '../../../pages/Fifth_Clustering/FifthPage';
// import { SixthPage } from '../../../pages/Sixth_Multivariate/SixthPage';
// import { SeventhPage } from '../../../pages/Seventh_GeoMapping/SeventhPage';


export function Routing() {

  return (
    <Routes>


      {/* <Route path="/seven">
        <SeventhPage />
      </Route> */}

      <Route path="/one">
        <IntroGlobe />
      </Route>

      {/* <Route path="/two">
        <SecondPage
        />
      </Route>

      <Route path="/three">
        <ThirdPage
        />
      </Route>

      <Route path="/four">
        <FourthPage
        />
      </Route>

      <Route path="/five">
        <FifthPage
        />
      </Route>

      <Route path="/six">
        <SixthPage
        />
      </Route> */}



      <Route path="/">
        <IntroGlobe
        />
      </Route>


    </Routes>
  );
};