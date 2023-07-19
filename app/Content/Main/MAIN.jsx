import './main.css'
import React from 'react';
// import {MenuSide} from './Menu/Menu.jsx'
//this below import will correct the size of fontawesome icons, if you dont apply it, the icons will fill many spaces and properties like fontsize wont work

export function Todays()
{
  return(
    <div style={{border:'1px solid red',flexBasis:'44%'}}></div>
  )
}

export function Tasks()
{
  return(
    <div style={{border:'1px solid red', flexBasis:'31%'}}></div>
  )
}
export  function MenuSide()
{
  return(
    <div style={{border:'1px solid red', flexBasis:'25%'}}></div>
  )
}

export default function MainContent()
{
   
      
    
    return(
    <>
        <div  className = 'Main-content' >
             <MenuSide />
             <Todays />
             <Tasks />
        </div>
    </>)
};

