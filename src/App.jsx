import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive ");

  return (
  <div
  className="w-screen h-screen duration-200"
  style={{ backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4 rounded-3xl">
        <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>red</button>
          <button  onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
            <button  onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
              <button   onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full  shadow-lg text-black" style={{backgroundColor:"yellow"}}>yellow</button>
                <button  onClick={()=>setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"pink"}}>pink</button>
                 <button  onClick={()=>setColor("brown")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"brown"}}>brown</button>
                  <button  onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
                   <button  onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>black</button>
      </div>
    </div>
  

 </div>
  
  );
}

export default App;
