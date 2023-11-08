import React, { useState, useEffect } from 'react';

const FmId = () => {
  const [fnames, setFnames] = useState([]);
  const [selectedFname, setSelectedFname] = useState('');
  const [fmId, setFmId] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/role_entry/fnames')
      .then(response => response.json())
      .then(data => setFnames(data));
  }, []);

  const handleFnameChange = (event) => {
    setSelectedFname(event.target.value);
    fetch(`http://localhost:5000/api/v1/role_entry/fnames/${selectedFname}`)
      .then(response => response.json())
      .then(data => setFmId(data._fm_id));
  };

  return (
    <div>
      <h1>Fnames</h1>
      <select value={selectedFname} onChange={handleFnameChange}>
        {fnames.map((fname) => (
          <option key={fname} value={fname}>
            {fname}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={fmId}
        placeholder="FM ID"
        readOnly
      />
    </div>
  );
};

export default FmId;
