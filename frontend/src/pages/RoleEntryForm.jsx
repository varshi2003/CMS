import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Button, Label } from 'reactstrap';
import "../styles/dataentry.css";
import { BASE_URL } from './../utils/config';
import { AuthContext } from './../context/AuthContext';
const RoleEntryForm = () => {
  const navigate = useNavigate()
  const [fname, setName] = useState("");
  const [_fm_id, setId] = useState("");
  const [fm_address, Setfm_address] = useState("");
  const [username, Setusername] = useState("");
  // const [email, Setemail] = useState("");
  // const [password, Setpassword] = useState("");
  const [ph_number, Setph_number] = useState("");
  const [role, Setrole] = useState("");
  const handleNameChange = (event) => {

    // setName(prev =>({...prev,[event.target.id]:event.target.value}));
    setName(event.target.value);
  }
  const handleIdChange = (event) => {

    // setName(prev =>({...prev,[event.target.id]:event.target.value}));
    setId(event.target.value);
  }


  const handleaddressChange = (event) => {
    Setfm_address(event.target.value);
  }
  const handleusernameChange = (event) => {
    Setusername(event.target.value);
  }
  //  const handleemailChange = (event) =>{
  //   Setemail(event.target.value);
  //  }
  //  const handlepasswordChange = (event) =>{
  //   Setpassword(event.target.value);
  //  }
  const handlephonenumberChange = (event) => {
    Setph_number(event.target.value);
  }
  const handleRolenChange = (event) => {
    Setrole(event.target.value);
  }

  const handleClick = async e => {
    e.preventDefault()

    try {
      console.log(fname, _fm_id, fm_address, username, ph_number, role);
      const res = await fetch(`${BASE_URL}/role_entry`,
        {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({ fname, _fm_id, fm_address, username, ph_number, role })
        })
      const result = await res.json()
      alert(result.message)
      if (res.ok) {
        navigate("/fishermen_details")
      }



    } catch (err) {
      alert(err.message);
    }





  };
  return <section>
    <Container lg="8" className='m-auto '>

      <Form className="scroller form_table form__input" onSubmit={handleClick}>
        <div className="form_heading">FISHERMEN ENTRY FORM</div>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> NAME  :</Label>
          <input type="text" id="fname" placeholder="ENTER FISHERMEN NAME" onChange={handleNameChange} />
        </FormGroup>

        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> ID : </Label>
          <input type="text" id="fm_id" placeholder="ENTER FISHERMEN ID" onChange={handleIdChange} />
        </FormGroup>

        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> ADDRESS : </Label>
          <input type="text" id="fm_address" placeholder="ADDRESS" onChange={handleaddressChange} />
        </FormGroup>
        <FormGroup>
          <Label className="label"> USERNAME : </Label>
          <input type="text" placeholder="Username" required id="username" onChange={handleusernameChange} />
        </FormGroup>
        {/* <FormGroup>
                        <Label className="label"> EMAIL : </Label>
                          <input type="email"  placeholder="Email" required  id="email" onChange ={handleemailChange} />
                        </FormGroup>
                        <FormGroup>
                        <Label className="label"> PASSWORD : </Label>
                          <input type="password"  placeholder="Password" required  id="password" onChange ={handlepasswordChange} />
                        </FormGroup> */}

        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> PHONE NUMBER:</Label>
          <input type="positive number" id="ph_number" placeholder="Phone Number" onChange={handlephonenumberChange} />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> SELECT THE EMPLOYEE ROLE</Label>
          <select className="option" id="location" value={role} onChange={handleRolenChange} >
            <option disabled={true} value=""> SELECT THE ROLE</option>
            <option value="fishermen">FISHERMEN</option>
          </select>
        </FormGroup>

        <Button className='btn secondary__btn auth_btn' type="submit">Submit</Button>
      </Form>



    </Container>
  </section>
}

export default RoleEntryForm