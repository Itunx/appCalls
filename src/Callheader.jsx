import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';



function Callheader() {
          const BASE= "https://cerulean-marlin-wig.cyclic.app/";
          const CORS="https://charming-bat-singlet.cyclic.app/";
          const [data, setData] = useState([]);
        useEffect(() => {
          // Function to fetch data (replace with your own logic)
          const fetchData = async () => {
            try {
              const response = await fetch(`${BASE}/activities`); 
              const result = await response.json();
              

              setData(result);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

          // Calling the fetchData function
          fetchData();

          // Cleanup function 
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
              function archiveAllCalls(){
                
                          // Construct the headers including the Content-Type and Authorization headers if needed
                          const headers = {
                            'Content-Type': 'application/json',
                            
                          };
                          console.log(data);
                          data.map(({id})=>{
                             // Create the PATCH request
                            fetch(`${BASE}/activities/${id}`, {
                              method: 'PATCH',
                              headers: headers,
                              body: JSON.stringify({
                                is_archived: true
                              }),
                            })
                              .then(response => {
                                console.log(response);
                                
                                if (!response.ok) {
                                  throw new Error(`HTTP error! Status: ${response.status}`);
                                }
                                return response.json(); // Parse the JSON response if needed
                              })
                              .then(data => {
                                // Handle the successful response data
                                console.log('PATCH request successful:', data);
                              })
                              .catch(error => {
                                // Handle errors
                                console.error('Error during PATCH request:', error);
                              });
                            })

                         

                  
                        }

            return (
              
              <>
              <Container id="tops">
                
                <Row className='px-5 one'>
                              <h1><span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg></span>Activity</h1>

              </Row>
                  
                  <Row className='px-5 one'><h2>inbox</h2></Row>
                  <Row className='px-5 one'><h2>allCalls</h2></Row>
                  
              </Container>
                <div id='archived-calls'>
                    <div id="archive" >
                    
                    
                    <Button variant="secondary" onClick={archiveAllCalls}>archive</Button><span className='arc mx-3'><h2>archive all calls</h2></span>
                  
                  
                    </div>
              
                </div>
                <br></br>
                  <div>
                
                    <ul  style={{
                        }}>
                            {/* Map through the data and render a list item for each item */}
                      {data.map((item, index) => (
                        item.is_archived==false?(
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

export default Callheader