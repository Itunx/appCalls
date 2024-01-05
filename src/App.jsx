import { useState } from 'react'
 import './App.css'
// import {Routes, Route} from "react-router-dom";

import Callheader from './callHeader';
import ArchiveCalls from './ArchiveCalls';
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
   <Callheader/>
   {/* <ArchiveCalls/> */}
   
   </>
 
    
  )
}

export default App
