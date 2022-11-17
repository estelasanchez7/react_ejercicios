import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    name: "Harry Potter",
    id: 1,
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: {
      wood: "holly",
      core: "phoenix feather",
      length: 11,
    },
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alternate_actors: [],
    alive: true,
    image: "https://hp-api.herokuapp.com/images/harry.jpg",
  },
  {
    name: "Hermione Granger",
    id: 2,
    alternate_names: [],
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    wizard: true,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: {
      wood: "vine",
      core: "dragon heartstring",
      length: null,
    },
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alternate_actors: [],
    alive: true,
    image: "https://hp-api.herokuapp.com/images/hermione.jpeg",
  },
  {
    name: "Ron Weasley",
    id: 3,
    alternate_names: ["Dragomir Despard"],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: {
      wood: "willow",
      core: "unicorn tail-hair",
      length: 14,
    },
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alternate_actors: [],
    alive: true,
    image: "https://hp-api.herokuapp.com/images/ron.jpg",
  },
  {
    name: "Draco Malfoy",
    id: 4,
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: {
      wood: "hawthorn",
      core: "unicorn tail-hair",
      length: 10,
    },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Tom Felton",
    alternate_actors: [],
    alive: true,
    image: "https://hp-api.herokuapp.com/images/draco.jpg",
  },
  {
    name: "Minerva McGonagall",
    id: 5,
    alternate_names: [],
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "04-10-1925",
    yearOfBirth: 1925,
    wizard: true,
    ancestry: "",
    eyeColour: "",
    hairColour: "black",
    wand: {
      wood: "",
      core: "",
      length: null,
    },
    patronus: "tabby cat",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Dame Maggie Smith",
    alternate_actors: [],
    alive: true,
    image: "https://hp-api.herokuapp.com/images/mcgonagall.jpg",
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

    if(isDelete){
      let newData = db.filter(el=>el.id !== id)
      setDb(newData)
    }else{
      return
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
