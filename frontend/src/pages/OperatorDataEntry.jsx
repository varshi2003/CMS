import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Button, Label } from 'reactstrap';
import "../styles/dataentry.css";
import { BASE_URL } from './../utils/config';
import { AuthContext } from './../context/AuthContext';
const OperatorDataEntry = () => {
  const [location, Setlocation] = useState("");





  const [fishtp, setFishtp] = useState("");




  const [JELABI, setJELABI] = useState(45);
  const [KATLA, setKATLA] = useState(50);
  const [ROGU, setROGU] = useState(55);
  const [MATHI, setMATHI] = useState(60);
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");
  const [val5, setVal5] = useState("");

  const [JELABI_KILOGM, SetJELABI_KILOGM] = useState("");
  const [KATLA_KILOGM, SetKATLA_KILOGM] = useState("");
  const [ROGU_KILOGM, SetROGU_KILOGM] = useState("");
  const [MATHI_KILOGM, SetMATHI_KILOGM] = useState("");
  const [val, setVal] = useState(0);
  const [fnames, setFnames] = useState([]);
  // current selected user in select
  const [fname, setFname] = useState("");

  const [_fm_id, setId] = useState("");
  //  const [fnames, setFnames] = useState([]);
  // const [fmId, setFmId] = useState("");
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch the fname data from the MongoDB API
    const fetchFnames = async () => {
      const response = await fetch("http://localhost:5000/api/v1/role_entry/fnames");
      const data = await response.json();
      setFnames(data);
    };
    fetchFnames();
  }, []);

  const handleFnameChange = (event) => {
    // Get the selected fname
    const setFnames = event.target.value;

    // Fetch the related _fm_id from the MongoDB API
    const fetchFmId = async () => {
      const response = await fetch(`http://localhost:5000/api/v1/role_entry/fnames/${setFnames}`);
      const data = await response.json();

      setId(data._fm_id._fm_id);
      setFname(setFnames)
    };


    fetchFmId();


    console.log(`Selected fname: ${setFnames}`);
    console.log(`Related _fm_id: ${JSON.stringify(_fm_id)}`);
  };

  const handleLocationChange = (event) => {
    Setlocation(event.target.value);
  }

  const JELABIS = (e) => {
    const tem = e.target.value;
    SetJELABI_KILOGM(tem)
    setVal1(parseFloat(tem) * JELABI);


  }
  const KATLAS = (e) => {
    const tem = e.target.value;
    SetKATLA_KILOGM(tem)
    setVal2(parseFloat(tem) * KATLA);

  }
  const ROGUS = (e) => {
    const tem = e.target.value;
    SetROGU_KILOGM(tem)
    setVal3(parseFloat(tem) * ROGU);

  }
  const MATHIS = (e) => {
    const tem = e.target.value;
    SetMATHI_KILOGM(tem)
    setVal4(parseFloat(tem) * MATHI);

  }

  const TOTALWAGES = () => {

    setVal5(parseFloat(val1 + val2 + val3 + val4));
  }

  const handleClick = async e => {
    e.preventDefault();
    try {
      console.log(fname, _fm_id, location);
      const res = await fetch(`${BASE_URL}/dataentrys`,
        {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            fname, _fm_id, location, "jelabi": { JELABI_KILOGM, val1 }, "katla": { KATLA_KILOGM, val2 },
            "rogu": { ROGU_KILOGM, val3 }, "mathi": { MATHI_KILOGM, val4 }, "total_wages": val5
          })
        })
      const result = await res.json()
      alert(result.message)
      if (res.ok) {
        navigate("/fishermen_transaction")
      }



    } catch (err) {
      alert(err.message);
    }

  };





  return <section>
    <Container lg="8" className='m-auto '>

      <Form className="scroller form_table form__input" onSubmit={handleClick}>
        <div className="form_heading">FISHERMEN DATA ENTRY FORM</div>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> NAME  :</Label>
          {/* <input type="text" id="fname" placeholder="ENTER FISHERMEN NAME" onChange={handleNameChange} /> */}
          -
          <select className="option" onChange={handleFnameChange} value={fname}>
            <option disabled={true} value=""> SELECT FISHERMAN NAME</option>
            {fnames.map((user) => (
              <option key={user._fm_id} value={user.fname}>{user.fname}</option>
            ))}
          </select>

        </FormGroup>

        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> ID : </Label>
          {/* <input type="text" id="fm_id" placeholder="ENTER FISHERMEN ID" value={_fm_id} onChange={handleIdChange} /> */}
          <input type="text" value={_fm_id} />


        </FormGroup>

        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> LOCATION :</Label>

          <select className="option" id="location" value={location} onChange={handleLocationChange} >
            <option disabled={true} value=""> SELECT THE LOCATION</option>
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
          <Label className="label"> FISH TYPE 1 :</Label>
          <input type="text" id="fishtype1" value={"JELABI"} placeholder="JELABI" />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> KILOGRAM</Label>
          <input type="positive number" id="ftype1_kg" onChange={JELABIS} placeholder="ENTER KILOGRAM" />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> WAGES</Label>
          <input type="number" id="ftype1_wages" value={val1} placeholder="WAGES" />
        </FormGroup>

        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> FISH TYPE 2  :</Label>
          <input type="positive number" id="fishtype2" value={"KATLA"} placeholder="JELABI" />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> KILOGRAM</Label>
          <input type="positive number" id="ftype2_kg" onChange={KATLAS} placeholder="ENTER KILOGRAM" />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> WAGES</Label>
          <input type="positive number" id="ftype2_wages" value={val2} placeholder="WAGES" />
        </FormGroup>

        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> FISH TYPE 3  :</Label>
          <input type="positive number" id="fishtype3" value={"ROGU"} placeholder="JELABI" />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> KILOGRAM</Label>
          <input type="positive number" id="ftype3_kg" onChange={ROGUS} placeholder="ENTER KILOGRAM" />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> WAGES</Label>
          <input type="positive number" id="ftype3_wages" value={val3} placeholder="WAGES" />
        </FormGroup>

        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> FISH TYPE 4  :</Label>
          <input type="positive number" id="fishtype4" value={"MATHI"} placeholder="JELABI" />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> KILOGRAM</Label>
          <input type="positive number" id="ftype4_kg" onChange={MATHIS} placeholder="ENTER KILOGRAM" />
        </FormGroup>
        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> WAGES</Label>
          <input type="positive number" id="ftype4_wages" value={val4} placeholder="WAGES" />
        </FormGroup>


        <FormGroup className="mb-3 " controlId="formBasicEmail">
          <Label className="label"> TOTAL WAGES</Label>
          <input type="number" value={val5} placeholder="WAGES" />
          <a className="totalwages" id="total_wages" variant="primary" type="submit" onClick={TOTALWAGES} >
            CHECK TOTAL WAGES
          </a>
        </FormGroup>

        <br />
        {/* <Button variant="primary" type="submit" className="submit__Button" >
      Submit
    </Button> */}
        <Button className='btn secondary__btn auth_btn' type="submit">Submit</Button>
      </Form>



    </Container>
  </section>
}

export default OperatorDataEntry

