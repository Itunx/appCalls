import React from 'react'
import './App.css'
import { useEffect,useState } from 'react';

function ArchiveCalls() {

  const BASE= "https://cerulean-marlin-wig.cyclic.app/";
 const CORS="https://charming-bat-singlet.cyclic.app/";
 const [data, setData] = useState([]);
 useEffect(() => {
  // Function to fetch data (replace with your own logic)
  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE}/activities`); 
      const result = await response.json();
      console.log(result);

      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Calling the fetchData function
  fetchData();

  // Cleanup function (optional, used for component unmounting)
  return () => {
    // Perform cleanup if needed
    console.log('Cleanup function called');
  };
}, []); // Empty dependency array means this effect runs once after the initial render
 
useEffect(() => {
  // Function to fetch data (replace with your own logic)
  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE}/activities/id`); 
      const result = await response.json();
      console.log(result);

      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Calling the fetchData function
  fetchData();

  // Cleanup function (optional, used for component unmounting)
  return () => {
    // Perform cleanup if needed
    console.log('Cleanup function called');
  };
}, []); // Empty dependency array means this effect runs once after the initial render
function ArchiveCalls(){
  useEffect(()=>{
    
  })
  console.log('good');
}
  return (
    <>
    <div>
    <ul  style={{
              }}>
                  {/* Map through the data and render a list item for each item */}
            {data.map((item, index) => (
             item.is_archived==true?(
              <div key={index} id="device">

              <li className='hiddenList'>{item.created_at}</li>

              <li className='hiddenList'>{item.call_type}</li>

              <li className='hiddenList'>{item.direction}</li>
              <li className='hiddenList'>{item.duration}</li>
              <li className='hiddenList'>{item.from}</li>
              <li className='hiddenList'>{item.id}</li>
              <li className='hiddenList'>{item.is_archived}</li>
              <li className='hiddenList'>{item.true}</li>
              <li className='hiddenList'>{item.to}</li>
              <li className='hiddenList'>{item.via}</li>
              </div>
             ):undefined
                
                ))}
          </ul>
       </div>
    
    </>
    
  )
}

export default ArchiveCalls