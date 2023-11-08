import React from 'react'
import OperatorImg01 from "../assets/images/operator-img01.png";
import OperatorImg02 from "../assets/images/operator-img02.png";
import OperatorImg03 from "../assets/images/operator-img03.png";
import { Card, CardBody, CardGroup } from "reactstrap";
import "../styles/data-operator.css";

import { Link } from 'react-router-dom';
const DataOperatorCard = () => {

  return <>
    <div className=" d-flex align-items-center justify-content-center mt-5 card__column" >
      <CardGroup  >


        <Card className="mx-3 operator_card" >
          <Link to={`/operator_profile`}>
            <div className="operator_img"><img src={OperatorImg01} style={{ width: '150px', height: '145px' }} alt="operator profile" /></div>
            <CardBody>
              <div className=" d-flex align-items-center justify-content-center operator_text" ><span>MY PROFILE</span></div>
            </CardBody>
          </Link>

        </Card>

        <br />



        <Card className="mx-3 operator_card" >
          <Link to={`/operator_data_entry`}>
            <div className="operator_img"><img src={OperatorImg02} style={{ width: '150px' }} alt="operator profile" /></div>
            <CardBody>
              <div className=" d-flex align-items-center justify-content-center operator_text" ><span>DATA ENTRY</span></div>
            </CardBody>
          </Link>

        </Card>

        <Card className="mx-3 operator_card" >
          <Link to={`/fishermen_transaction`}>
            <div className="operator_img"><img src={OperatorImg03} style={{ width: '150px', height: '145px' }} alt="operator profile" /></div>
            <CardBody>
              <div className=" d-flex align-items-center justify-content-center operator_text" ><span>TRANSACTION</span></div>
            </CardBody>
          </Link>

        </Card>
        <Card className="mx-3 operator_card">
          <Link to={`/fishermen_details`}>
            <div className="operator_img"><img src={OperatorImg02} style={{ width: '150px' }} alt="operator profile" /></div>
            <CardBody>
              <div className=" d-flex align-items-center justify-content-center operator_text" ><span>DETAILS</span></div>
            </CardBody>
          </Link>

        </Card>
      </CardGroup>

    </div>
  </>
}

export default DataOperatorCard