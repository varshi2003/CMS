import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table, Row } from 'reactstrap'
import "../styles/transac.css";
import { useNavigate } from 'react-router-dom';
const FishermenDetails = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClickbtn = () => {
    navigate('/role_entry_form');
  };
  useEffect(() => {
    // Fetch your data here and update the state
    fetchDataFromAPI();
  }, []);


  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/role_entry/'); // Replace with your API endpoint
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
          <button className='navigate_btn' onClick={handleClickbtn}>ADD FISHERMEN</button>
        </div></Row>
        <Table responsive className='noWrap table ' bordered >
          <thead>
            <tr p-15>
              <th>DATE </th>
              <th>FISHERMEN Name</th>
              <th>FM ID</th>
              <th>USERNAME</th>
              <th>FM ADDRESS</th>
              <th>PHONE NUMBER</th>
              <th>ROLE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td> {formatDate(item.createdAt)}</td>
                <td>{item.fname}</td>
                <td> {item._fm_id}</td>
                <td> {item.username}</td>
                <td> {item.fm_address}</td>
                <td>{item.ph_number}</td>
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

export default FishermenDetails