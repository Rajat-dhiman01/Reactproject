import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (

    <div 
      className="w-full h-screen" 
      style={{ backgroundColor: color }}
    >
      <div className=' flex display-flex justify-center'>
      {/* Example buttons to test */}
      <button 
        className="m-2 px-4 py-2 bg-red-600 hover:bg-red-900 font-medium text-white rounded-full" 
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button 
        className="m-2 px-4 py-2 bg-blue-600 hover:bg-blue-900  font-medium rounded-full" 
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button type="button" class=" m-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      onClick={() => setColor("black")}>
        Dark
      </button>

      <button type="button" class=" m-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={() => setColor("green")}>
      Green
      </button>
      <button 
        className="m-2 px-4 py-2 bg-purple-700 hover:bg-purple-900 font-medium text-white rounded-full" 
        onClick={() => setColor("purple")}
      >
        purple
      </button>
      <button 
        className="m-2 px-4 py-2 bg-cyan-800 hover:bg-cyan-900 font-medium text-white rounded-full" 
        onClick={() => setColor("cyan")}
      >
        cyan
      </button>

</div>
    </div>
    
  )
}

export default App
