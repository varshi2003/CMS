import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";
const servicesData =[
      {imgUrl: weatherImg,
          title:  "calculate weater",
          desc: "Lorem ispum dolor sit amet",
      },  
      {imgUrl: guideImg,
          title:  "Best tour guide ",
          desc: "Lorem ispum dolor sit amet", 
      },  
      {imgUrl: customizationImg,
          title:  "customization",
          desc: "Lorem ispum dolor sit amet", 
      },   
]  
const ServiceList = () => {
  return <>
  {servicesData.map((item,index)=> (
  <Col lg='3' key={index}>
     <ServiceCard item={item} />
  </Col>))}
  </>
};
export default ServiceList