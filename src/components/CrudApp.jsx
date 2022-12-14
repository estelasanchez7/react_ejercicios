import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    name: "Harry Potter",
    id: 1,
    house: "Gryffindor",
    patronus: "stag",
  },
  {
    name: "Hermione Granger",
    id: 2,
    house: "Gryffindor",
    patronus: "otter",
  },
  {
    name: "Ron Weasley",
    id: 3,
    house: "Gryffindor",
    patronus: "Jack Russell terrier",
  },
  {
    name: "Draco Malfoy",
    id: 4,
    house: "Slytherin",
    patronus: "",
  },
  {
    name: "Minerva McGonagall",
    id: 5,
    house: "Gryffindor",
    patronus: "tabby cat",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data)
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));

    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estás seguro de eliminar el registro con el '${id}'`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
