import React from 'react';
import './newsletter.css';
import {Container , Row , Col } from  'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';



const Newsletter = () => {
  return <section className="newsletter">
          <Container>
                    <Row>
                     <Col lg="6">
                              <div className="newspaper__content">
                                        <h2>
                                                  Subscribe now to get useful fishes information.
                                        </h2>
                                        <div className="newsletter__input"> 
                                        <input  type="email" placeholder="Enter Your email" />
                                        <button className="btn newsletter__btn">Subscribe</button>
                                        </div>
                                        <p>Fish is filled with omega-3 fatty acids and vitamins such as D and B2 (riboflavin). 
                                          Fish is rich in calcium and phosphorus and a great source of minerals, such as iron, zinc, iodine,
                                           magnesium, and potassium.</p>
                              </div>
                     </Col>
                     <Col lg="6">
                              <div className="newsletter__img">
                                        <img src={maleTourist} alt="" />
                              </div>
                     </Col>
                    </Row>
          </Container>
  </section>
}
export default Newsletter