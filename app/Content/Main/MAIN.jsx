import './main.css'
import React from 'react';
import MenuSide from './Menu/Menu.jsx'

export function Todays()
{
  return(
    <div className = 'Todays'style={{border:'1px solid red',flexBasis:'44%'}}></div>
  )
}

export function Tasks()
{
  return(
    <div className = 'Tasks' style={{border:'1px solid red', flexBasis:'31%'}}></div>
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

