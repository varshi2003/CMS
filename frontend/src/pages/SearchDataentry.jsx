
import React, { useRef } from 'react';
import '../styles/search-bar.css';
import { Col, Container, Row, Form, FormGroup } from "reactstrap";
import { BASE_URL } from './../utils/config';
import { useNavigate } from 'react-router-dom';
const SearchDataentry = () => {

          const fname = useRef('')
          const _fm_id = useRef('')
          const location = useRef('')
          const navigate = useNavigate()

          const searchHandler = async () => {
                    const fname = fname.current.value
                    const _fm_id = _fm_id.current.value
                    const location = location.current.value

                    // if (fname === '' && _fm_id === '' && location === '') {
                    //           return alert(' feilds are required!');
                    // }

                    const res = await fetch(`${BASE_URL}/dataentrys/search?
     _fm_id=${_fm_id}|| fname=${fname}|| location=${location}`
                    );
                    if (!res.ok) alert("something went wrong");

                    const result = await res.json();
                    console.log(result);
                    //                     navigate(
                    //                               `/dataentrys/search?
                    //       _fm_id=${_fm_id}|| fname=${fname}|| location=${location}`,
                    //                               { state: result.data }
                    //                     );

          };
          return (<Container>
                    <Row>
                              <Col lg='6'>
                                        <div className="search__bar">
                                                  <Form className="d-flex align-items-center gap-4">
                                                            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                                                                      <span><i class="ri-map-pin-line"></i></span>
                                                                      <div>
                                                                                <h6>Location</h6>
                                                                                <input type="text" placeholder="where are you going ?" ref={fname} />
                                                                      </div>
                                                            </FormGroup>

                                                            <span className="search__icon" type="submit" onClick={searchHandler}>
                                                                      <i class="ri-search-line"></i></span>
                                                  </Form>
                                        </div>
                              </Col>
                    </Row>
          </Container>
          );
}

export default SearchDataentry