import React from 'react';
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import '../shared/tour-card.css';

const AdminCard = ({ admin }) => {
  const { id, title, photo, path } = admin;
  return (
    <div className="tour__card  admin__card">
      <Card style={{ height: '100%' }}>
        <Link to={path}>
          <div className="tour__img">
            <img src={photo} alt="admin__img" style={{ height: '200px' }} />

          </div>
          <CardBody>
            <div className="">

              <h5>{title}</h5>

            </div>


          </CardBody>
        </Link>
      </Card>

    </div>
  )
}

export default AdminCard