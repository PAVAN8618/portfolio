import React from 'react'

import languagesData from './data'
import './app3.css'
export const App3 = () => {
  return (
    <div className='container'>
        <h1>Programming Multiverse</h1>
       <div className='languageList'>

            {languagesData.map((data) =>
                <li id='data.year'>
                    <Card data = {data}/>
                </li>
            )
}   
            </div>

    </div>
  )
}

function Card({data}){
    const {name,year, usecase, creator} = data;
        console.log(data);
    return(
        <div className='languageCard '>
        <p>{name}</p>
        <p>{year}</p>
        <p>{creator}</p>
        <p>{usecase}</p>
        </div>
    )

}
