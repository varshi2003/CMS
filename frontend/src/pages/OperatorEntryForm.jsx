import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, FormGroup, Button, Label } from 'reactstrap';
import "../styles/dataentry.css";
import { BASE_URL } from './../utils/config';

const OperatorEntryForm = () => {
  const [name, setName] = useState("");
  const [username, Setusername] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [op_id, setId] = useState("");
  const [op_address, Setop_address] = useState("");
  const [ph_number, Setph_number] = useState("");
  const [fishery_location, Setfishery_location] = useState("");
  const [role, Setrole] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleNameChange = (event) => {

    // setName(prev =>({...prev,[event.target.id]:event.target.value}));
    setName(event.target.value);
  }
  const handleusernameChange = (event) => {
    Setusername(event.target.value);
  }
  const handleemailChange = (event) => {
    Setemail(event.target.value);
  }
  const handlepasswordChange = (event) => {
    Setpassword(event.target.value);
  }
  const handleIdChange = (event) => {

    // setName(prev =>({...prev,[event.target.id]:event.target.value}));
    setId(event.target.value);
  }

  const handleaddressChange = (event) => {
    Setop_address(event.target.value);
  }

  const handlephonenumberChange = (event) => {
    Setph_number(event.target.value);
  }
  const handlefishery_locationChange = (event) => {
    Setfishery_location(event.target.value);
  }

  const handleRolenChange = (event) => {
    Setrole(event.target.value);
  }

  const handleClick = async e => {
    e.preventDefault()
    setSubmitting(true);
    try {
      console.log(name, username, email, password, op_id, ph_number, op_address, fishery_location, role);
      const res = await fetch(`${BASE_URL}/authto/op_register`,
        {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({ name, username, email, password, op_id, ph_number, op_address, fishery_location, role })
        })
      const result = await res.json()

      alert(result.message)
      if (res.ok) {
        navigate("/operator_details")
      }

    }
    catch (err) {
      // Display an alert message with the error message
      setSuccess(false);
      setError(err.message);
      window.alert(err.message);
    }
    setSubmitting(false);








  };
  return <section>
    <Container lg="8" className='m-auto '>

      <Form className="scroller form_table form__input" onSubmit={handleClick}>
        <div className="form_heading">OPERATOR ENTRY FORM</div>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> NAME  :</Label>
          <input type="text" id="fname" placeholder="ENTER OPERATOR NAME" onChange={handleNameChange} />
        </FormGroup>
        <FormGroup>
          <Label className="label"> USERNAME : </Label>
          <input type="text" placeholder="Username" required id="username" onChange={handleusernameChange} />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> ID : </Label>
          <input type="text" id="fm_id" placeholder="ENTER OPERATOR ID" onChange={handleIdChange} />
        </FormGroup>
        <FormGroup>
          <Label className="label"> EMAIL : </Label>
          <input type="email" placeholder="Email" required id="email" onChange={handleemailChange} />
        </FormGroup>
        <FormGroup>
          <Label className="label"> PASSWORD : </Label>
          <input type="password" placeholder="Password" required id="password" onChange={handlepasswordChange} />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> PHONE NUMBER:</Label>
          <input type="positive number" id="ph_number" placeholder="Phone Number" onChange={handlephonenumberChange} />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> ADDRESS : </Label>
          <input type="text" id="fm_address" placeholder="ADDRESS" onChange={handleaddressChange} />
        </FormGroup>

        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> SELECT THE EMPLOYEE ROLE</Label>
          <select className="option" id="location" value={fishery_location} onChange={handlefishery_locationChange} >
            <option disabled={true} value=""> SELECT THE FISHERY LOCATION</option>
            <option value="boatset">BOATSET</option>
            <option value="sirumugai">SIRUMUGAI</option>
            <option value="bhavanisagar">BHAVANISAGAR</option>
            <option value="poothikuppam">POOTHIKUPPAM</option>
            <option value="manalmedu">MANAL MEDU</option>
            <option value="valkaradu">VALKARADU</option>
            <option value="jj nagar">J J NAGAR</option>
            <option value="kanramokkai">KANRAMOKKAI</option>
          </select>
        </FormGroup>

        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> SELECT THE EMPLOYEE ROLE</Label>
          <select className="option" id="location" value={role} onChange={handleRolenChange} >
            <option disabled={true} value=""> SELECT THE ROLE</option>
            <option value="operator">OPERATOR</option>
          </select>
        </FormGroup>

        <Button className='btn secondary__btn auth_btn' type="submit" disabled={submitting}>Submit</Button>
        {success && (
          <div className="alert alert-success">Form submitted successfully!</div>
        )}

        {error && (
          <div className="alert alert-danger">Error submitting form: {error}</div>
        )}
      </Form>



    </Container>
  </section>
}

export default OperatorEntryForm