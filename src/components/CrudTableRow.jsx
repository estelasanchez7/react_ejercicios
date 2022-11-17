import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let {name, patronus, house, id} = el 
  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{patronus}</td>
        <td>{house}</td>
        <td>
            <button onClick={()=>setDataToEdit(el)}>Edit</button>
            <button onClick={()=> deleteData(id)}>Delete</button>
        </td>
      </tr>
    </div>
  );
};

export default CrudTableRow;
