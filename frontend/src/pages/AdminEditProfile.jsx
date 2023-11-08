import React, { useState } from 'react';
import {Container , Row , Col , Form , FormGroup , Button, Label} from 'reactstrap';
import "../styles/dataentry.css";

const AdminEditProfile = () => { const [credentials , setCredentials] = useState({

  admin_name:undefined,
  email:undefined,
  admin_address:undefined,
  username:undefined,
  ph_number:undefined,
 
});

const handleChange = e => {
setCredentials(prev =>({...prev,[e.target.id]:e.target.value}));
}; 
const [selectedFile, setSelectedFile] = useState(null);

const handleFileChange = (event) => {
  setSelectedFile(event.target.files[0]);
};

const handleUpload = () => {
  if (!selectedFile) {
    alert('Please select a file to upload.');
    return;
  }
}
  const handleClick = e=>{
    e.preventDefault()
    };
  
  return <section>
  <Container lg="8"  className='m-auto '>
    
  <Form  className="scroller form_table form__input" onSubmit={handleClick}>
  <div className="form_heading">ADMIN EDIT PROFILE</div>

                      <FormGroup className="mb-3 " controlId="formBasicEmail">
                     
                      <Label className="label"> PROFILE PICTURE UPLOAD  :</Label>
                         <div className=" d-flex "><input  className="photo__input" type="file" id="photo" accept="image/*" onChange={handleFileChange} />
                               <button className="upload__btn"  onClick={handleUpload}>Upload</button>  </div>    
                      </FormGroup> 
                      <FormGroup className="mb-3 " controlId="formBasicEmail">
                        <Label className="label"> NAME  :</Label>
                        <input type="text" id="admin_name" placeholder="ADMIN NAME"  onChange ={handleChange}   />
                      </FormGroup>
                      <FormGroup className="mb-3 " controlId="formBasicEmail">
                        <Label className="label"> EMAIL  :</Label>
                        <input type="text" id="email" placeholder="EMAIL"  onChange ={handleChange}   />
                      </FormGroup>
                      <FormGroup className="mb-3 " controlId="formBasicEmail">
                      <Label className="label"> ADDRESS : </Label>
                      <input type="text" id="admin_address" placeholder="ADDRESS"  onChange ={handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label className="label"> USERNAME : </Label>
                          <input type="text"  placeholder="Username"  id="username" onChange ={handleChange} />
                        </FormGroup>
                   
                       
                      <FormGroup className="mb-3 " controlId="formBasicEmail">
                        <Label className="label"> PHONE NUMBER:</Label>
                        <input type="positive number" id="ph_number" placeholder="Phone Number" onChange ={handleChange} />
                      </FormGroup>
                     
                    
                    <Button className='btn secondary__btn auth_btn' type="submit">Submit</Button>
                    </Form>

              

  </Container>
</section>
}

export default AdminEditProfile