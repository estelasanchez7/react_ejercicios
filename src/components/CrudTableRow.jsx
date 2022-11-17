import React from "react";

const CrudTableRow = ({ el }) => {
  return (
    <div>
      <tr>
        <td>{el.name}</td>
        <td>{el.patronus}</td>
        <td>{el.house}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
      </tr>
    </div>
  );
};

export default CrudTableRow;
