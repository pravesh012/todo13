import React from 'react';

import './fontawesome-free-6.4.0-web/css/all.min.css';

import Background from "./Content/Background/Background.jsx";
import MainContent  from './Content/Main/MAIN.jsx';


export default function HomePage()
{
return(
  <>
   <Background>
      <MainContent />
   </Background>
  </>
)
}