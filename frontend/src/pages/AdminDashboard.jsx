import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import { Container, Row, Col } from 'reactstrap';
import AdminCard from "./AdminCard.jsx";
import adminData from "../assets/data/admin";

const AdminDashboard = () => {
  return <>


    <section className='pt-0'>
      <Container style={{ display: 'flex', alignItems: 'stretch', marginTop: "100px" }}>
        <Row style={{ justifyContent: 'stretch', gap: '20px' }}>

          {
            adminData?.map(admin =>

              <AdminCard admin={admin} key={admin.id} />
            )
          }


        </Row>
      </Container>
    </section>

  </>
}

export default AdminDashboard 
