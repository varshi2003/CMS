import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import "../styles/transac.css";
const LocationWiseCatched = () => {
          const [data, setData] = useState([]);

          useEffect(() => {
                    // Fetch your data here and update the state
                    fetchDataFromAPI();
          }, []);


          const fetchDataFromAPI = async () => {
                    try {
                              const response = await fetch('http://localhost:5000/api/v1/dataentrys/locWiseFise'); // Replace with your API endpoint
                              if (!response.ok) {
                                        throw new Error('Network response was not ok');
                              }
                              const jsonData = await response.json();
                              setData(jsonData.data); // Assuming your data is inside a "data" property in the response
                    } catch (error) {
                              console.error('Error fetching data:', error);
                    }
          };

          console.log({ data });
          return (
                    <div className="scroller total_table ">
                              <div className=" border_table">

                                        <Table responsive className='noWrap table ' bordered >

                                                  <thead>
                                                            <tr>
                                                                      <th>Date</th>
                                                                      <th>Location</th>
                                                                      <th>Total Jelabi</th>
                                                                      <th>Total Katla</th>
                                                                      <th>Total Rogu</th>
                                                                      <th>Total Mathi</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            {data.map((item) => (
                                                                      <tr key={item._id.location + item._id.date}>
                                                                                <td> {item._id.date}</td>
                                                                                <td>{item._id.location}</td>
                                                                                <td>{item.total_jelabi}</td>
                                                                                <td>{item.total_katla}</td>
                                                                                <td>{item.total_rogu}</td>
                                                                                <td>{item.total_mathi}</td>
                                                                      </tr>
                                                            ))}


                                                  </tbody>
                                        </Table>

                              </div>
                    </div>
          );
};


export default LocationWiseCatched;