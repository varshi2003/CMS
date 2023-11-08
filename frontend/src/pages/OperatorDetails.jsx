
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table, Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import "../styles/transac.css";
const OperatorDetails = () => {
          const navigate = useNavigate();

          const handleClickbtn = () => {
                    navigate('/operator_entry_form');
          };
          const [data, setData] = useState([]);

          useEffect(() => {
                    // Fetch your data here and update the state
                    fetchDataFromAPI();
          }, []);


          const fetchDataFromAPI = async () => {
                    try {
                              const response = await fetch('http://localhost:5000/api/v1/opreg/'); // Replace with your API endpoint
                              if (!response.ok) {
                                        throw new Error('Network response was not ok');
                              }
                              const jsonData = await response.json();
                              setData(jsonData.data); // Assuming your data is inside a "data" property in the response
                    } catch (error) {
                              console.error('Error fetching data:', error);
                    }
          };

          return (

                    <div className="scroller total_table ">

                              <div className=" border_table">
                                        <Row><div>
                                                  <button className='navigate_btn' onClick={handleClickbtn}>ADD OPERATOR</button>
                                        </div></Row>
                                        <Table responsive className='noWrap table ' bordered >
                                                  <thead>
                                                            <tr p-15>
                                                                      <th>DATE </th>
                                                                      <th>OPERATOR NAME</th>
                                                                      <th>OPERATOR ID</th>
                                                                      <th>USERNAME</th>
                                                                      <th>EMAIL</th>
                                                                      <th>PHONE NUMBER</th>
                                                                      <th>FISHERY  LOCATION</th>
                                                                      <th>ROLE</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            {data.map((item, index) => (
                                                                      <tr key={index}>
                                                                                <td> {formatDate(item.createdAt)}</td>
                                                                                <td>{item.name}</td>
                                                                                <td> {item.op_id}</td>
                                                                                <td> {item.username}</td>
                                                                                <td> {item.email}</td>
                                                                                <td>{item.ph_number}</td>

                                                                                <td> {item.fishery_location}</td>

                                                                                <td>{item.role}</td>
                                                                      </tr>
                                                            ))}


                                                  </tbody>
                                        </Table>
                              </div>
                    </div>



          )

}

function formatDate(dateString) {
          const date = new Date(dateString).getDate()
          const month = new Date(dateString).getMonth()
          const year = new Date(dateString).getFullYear()
          return `${date}/${month}/${year}`;
}

export default OperatorDetails