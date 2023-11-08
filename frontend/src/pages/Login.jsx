import React, { useState, useContext } from 'react';
import "../styles/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from './../utils/config';


const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };


  const handleClick = async e => {
    e.preventDefault()
    console.log(credentials.email)


    dispatch({ type: 'LOGIN_START' })

    try {
      const res = await fetch(`${BASE_URL}/auth/login`,
        {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(credentials)
        })

      const result = await res.json();
      if (!res.ok) alert(result.message);

      console.log(result.data);

      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
      navigate('/')


    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message })
    }

  };

  return <section>
    <Container>
      <Row>
        <Col lg="8" className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="" />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt='' />
              </div>
              <h2>Login</h2>
              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <div className='d-flex justify-content-between justify-content-center login__input show_password'><input placeholder="Password" required
                    id="password" type={passwordVisible ? 'text' : 'password'}
                    name="password" value={credentials.password} onChange={handleChange} /><p type="button"
                      onClick={togglePasswordVisibility} style={{ margin: '0 10px 0 0' }} >
                      {passwordVisible ? <i className='show_password' class="ri-drop-fill"></i> : <i className='show_password' class="ri-blur-off-fill"></i>}
                    </p></div>


                </FormGroup>
                <Button className='btn secondary__btn auth_btn' type="submit">Login</Button>
              </Form>
              <p>Don't hava an account?<Link to="/register">Create </Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login