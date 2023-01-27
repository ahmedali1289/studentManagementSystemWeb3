import React, { useContext, useEffect } from "react";
import { StudentsContext } from "../context/StudentsApp";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBDataTable } from "mdbreact";
const Table = ({ list }) => {
  const data = {
    columns: [
      {
        label: "Id",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Address",
        field: "address",
        sort: "asc",
        width: 270,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 200,
      },
      {
        label: "Number",
        field: "number",
        sort: "asc",
        width: 100,
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  };
  const Action = (id) =>{
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              cursor: "pointer",
              color: "#fff",
              width:"100%",
              display:'flex',
              justifyContent:'center',
            }}
            onClick={() => console.log(id)}
          >
            <FontAwesomeIcon icon={faEdit} className='me-3'/>
            <FontAwesomeIcon icon={faEye} />
          </div>
        </div>
      );
  }
  useEffect(() => {
    list?.map((e, index) => {
      data.rows?.push({
        id: e?.id?.toString(),
        name: e?.name,
        address: e?.studentaddress,
        age: e?.age?.toString(),
        number: e?.number?.toString(),
        actions:Action(e?.id?.toString())
      });
    });
  }, [list]);
  return (
    <div className="table-responsive">
      <MDBDataTable responsive bordered data={data} />
    </div>
  );
};

export default Table;
