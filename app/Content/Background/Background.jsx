import React from 'react';
import './Background.css';
export default function Background(props)
{
return(
    <>
     <main className='background-color'>
        {props.children}
     </main>
    </>
)
}