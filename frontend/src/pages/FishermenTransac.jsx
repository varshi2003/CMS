import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table, Row } from 'reactstrap'
import "../styles/transac.css";
import { useNavigate } from 'react-router-dom';
// import SearchDataentry from "../pages/SearchDataentry.jsx"
const FishermenTransac = () => {

  const navigate = useNavigate();

  const handleClickbtn = () => {
    navigate('/operator_data_entry');
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch your data here and update the state
    fetchDataFromAPI();
  }, []);


  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/dataentrys'); // Replace with your API endpoint
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
      {/* <SearchDataentry /> */}
      <div className=" border_table">

        <Row><div>
          <button className='navigate_btn' onClick={handleClickbtn}>ADD DATAENTRY</button>
        </div></Row>

        <Table responsive className='noWrap table ' bordered >

          <thead>
            <tr p-15>
              <th>DATE </th>
              <th>FISHERMEN Name</th>
              <th>ID</th>
              <th>Location</th>
              <th>Fish Type 1</th>

              <th>Type 1 KG: </th>
              <th>Type 1 Wages:</th>
              <th>Fish Type 2</th>
              <th>Type 2 KG: </th>
              <th>Type 2 Wages:</th>
              <th>Fish Type 3</th>
              <th>Type 3 KG: </th>
              <th>Type 3 Wages:</th>
              <th>Fish Type 4</th>
              <th>Type 4 KG: </th>
              <th>Type 4 Wages:</th>

              <th>Total Wages</th>

            </tr>
          </thead>
          <tbody>

            {data.map((item, index) => (
              <tr key={index}>
                <td> {formatDate(item.createdAt)}</td>
                <td>{item.fname}</td>
                <td> {item._fm_id}</td>
                <td> {item.location}</td>

                <td>Jelabi</td>
                <td> {item.jelabi.JELABI_KILOGM}</td>
                <td>{item.jelabi.val1}</td>

                <td>katla</td>
                <td>{item.katla.KATLA_KILOGM}</td>
                <td> {item.katla.val2}</td>


                <td> rogu</td>
                <td>{item.rogu.ROGU_KILOGM}</td>
                <td> {item.rogu.val3}</td>

                <td> mathi</td>
                <td>{item.mathi.MATHI_KILOGM}</td>
                <td> {item.mathi.val4}</td>

                <td> {item.total_wages}</td>
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

export default FishermenTransac