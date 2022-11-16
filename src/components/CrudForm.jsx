import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  patronus: "",
  house: "",
};

const CrudForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="patronus"
          placeholder="Patronus"
          onChange={handleChange}
          value={form.patronus}
        />
        <input
          type="text"
          name="house"
          placeholder="House"
          onChange={handleChange}
          value={form.house}
        />
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
