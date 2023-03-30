import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [api, setapi] = useState([]);
  const [id, setid] = useState();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [address, setaddress] = useState();
  const [deleteId, setDeleteId] = useState(2);
  const [isEditMode, setIsEditMode] = useState(false);

  const show = async () => {
    await axios
      .get(`https://63be8dd3e348cb076211daa0.mockapi.io/test2`)
      .then((response) => {
        setapi(response.data);
      });
  };
  const additem = async () => {
    alert("hi");
    const data1 = {
      name: name,
      email: email,
      address: address,
    };
    await axios
      .post(`https://63be8dd3e348cb076211daa0.mockapi.io/test2`, data1)
      .then((response) => {
        setid("");
        setname("");
        setemail("");
        setaddress("");
        show();
      });
  };

  const delet = async (id) => {
    setDeleteId(id);
    await axios
      .delete(`https://63be8dd3e348cb076211daa0.mockapi.io/test2/${id}`)
      .then((res) => {
        show();
        setDeleteId(null);
      });
  };

  const edit = async () => {
    const data2 = {
      name: name,
      email: email,
      address: address,
    };
    await axios
      .put(`https://63be8dd3e348cb076211daa0.mockapi.io/test2/${id}`, data2)
      .then((response) => {
        setid("");
        setname("");
        setemail("");
        setaddress("");
        show();
      });
  };
  const enableEditMode = () => {
    setIsEditMode(true);
  };
  // api - id - server - req - server
  useEffect(() => {
    show();
  }, []);
  return (
    <div className="container">
      <div className="databox">
        <from>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <br />

          <input
            type="text"
            className="input"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />

          <input
            type="text"
            className="input"
            placeholder="Enter Address"
            name="address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
          <br />
        </from>
        <button
          onClick={() => {
            if (isEditMode) {
              edit();
            } else {
              additem();
            }
            setIsEditMode(false);
          }}
        >
          {isEditMode ? "Edit" : "Add"}
        </button>
      </div>
      <div className="tablediv">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th>Action</th>
            </tr>
          </thead>

          {api.map((val, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.address}</td>

                  <td>
                    <button
                      onClick={() => {
                        enableEditMode();
                        setname(val?.name);
                        setemail(val?.email);
                        setaddress(val?.address);
                        setid(val?.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        delet(val.id, val);
                      }}
                    >
                      {deleteId === val?.id}Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default App;
