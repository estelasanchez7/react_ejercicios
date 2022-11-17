import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  house: "",
  patronus: "",
  id: null,
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if(dataToEdit){
      setForm(dataToEdit) //funcion actualizadora
    }else{
      setForm(initialForm)
    }
  }, [dataToEdit])
  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!form.name ||!form.patronus || !form.patronus){
      alert('Datos incompletos')
      return
    }

    if(form.id===null){
      createData(form)
    }else{
      updateData(form)
    }
    handleReset()
  };
  const handleReset = (e) => {
    setForm(initialForm)
    setDataToEdit(null)
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
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
