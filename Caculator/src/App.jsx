import { useState } from 'react'

function App() {
const [value, setValue] = useState('');
  return (
    <div className='w-full h-screen bg-green-400 grid place-items-center'>
    <div >
     <form className='bg-white w-[300px] h-auto p-5 rounded-xl' action="">
      <input className='border-black border-[1px] px-5 py-2 w-[250px] font-semibold  rounded-lg' type="text" placeholder='Number' value={value}/>
      <div className='pt-5'>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='AC' onClick={e => setValue("")}/>
        <input  className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='DE' onClick={e => setValue(value.slice(0, -1))}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='.' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='/' onClick={e=> setValue(value + e.target.value)}/>
      </div>
      <div className='pt-3'>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='7' onClick={e=> setValue(value + e.target.value)} />
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='8' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='9' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='*' onClick={e=> setValue(value + e.target.value)}/>
      </div>
      <div className='pt-3'>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='4' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='5' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='6' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='+' onClick={e=> setValue(value + e.target.value)} />
      </div>
      <div className='pt-3'>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='1' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='2' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='3' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='-' onClick={e=> setValue(value + e.target.value)} />
      </div>
      <div className='pt-3 flex'>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='00' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-14 mx-1' type="button" value='0' onClick={e=> setValue(value + e.target.value)}/>
        <input className='bg-green-400 py-1 px-4 rounded-lg text-white hover:scale-105 font-semibold w-[122px] mx-1' type="button" value='=' onClick={e => setValue(eval(value))}/>
        
      </div>
     </form>
    </div>
    </div>
  )
}

export default App
