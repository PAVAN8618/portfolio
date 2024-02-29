import React, { useState } from 'react'
import './app2.css'

const App2 = () => {

  const [selected, setSelected] = useState([{
    one:false,
    two:false,
    three:false,
    four:false
  }]);

console.log(selected)
  return (
    <>
    <div className='main'>
      <input type='checkbox' id='all'  checked={selected.four && selected.three && selected.two && selected.one} onChange={()=>setSelected({...selected,
    one:!selected.one,
    two:!selected.two,
    three:!selected.three,
    four:!selected.four})}/>
      <label for="all"> seclect all</label>
    </div>
      <div className='sec'>
      <input type='checkbox' id='four' checked={selected.four} onChange={()=>setSelected({...selected,four:!selected.four})} />
      <label for="four"> selected 1 </label>  
      <input type='checkbox' id='one' checked={selected.one} onChange={()=>setSelected({...selected,one:!selected.one})}  />
      <label for="one"> selected 2 </label>
      <input type='checkbox' id='two' checked={selected.two} onChange={()=>setSelected({...selected,two:!selected.two})}  />
      <label for="two"> selected 3 </label>
      <input type='checkbox' id='three' checked={selected.three} onChange={()=>setSelected({...selected,three:!selected.three})} />
      <label for="three"> selected 4</label>
      </div>
    </>
  )
}

export default App2