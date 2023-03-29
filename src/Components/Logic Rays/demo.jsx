import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    id : ""
  });
  const [call, setCall] = useState(0);
  const [userData, setUserData] = useState();
  const [editMode, setEditMode] = useState(false)
  useEffect(() => {
    const demoData = async () => {
      const response = await axios.get(
        "https://641bdea41f5d999a446babdd.mockapi.io/demo"
      );
      const data = response.data;
      setUserData(data);
    };
    demoData();
    console.log("demo done");
  }, [call,editMode]);
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const endPoint = "https://641bdea41f5d999a446babdd.mockapi.io/demo";
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editMode === true){
      axios.put(`https://641bdea41f5d999a446babdd.mockapi.io/demo/${state.id}`,{
        tname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        mobile: state.mobile,
        password: state.password,
        confirmpassword: state.confirmpassword,
      })
      alert("Data Change Successfully")
    }else{
      axios.post(endPoint, {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        mobile: state.mobile,
        password: state.password,
        confirmpassword: state.confirmpassword,
      });
      alert("Data Received");

    }   
    setState({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      confirmpassword: "",
    });
    setCall(call + 1);
    setEditMode(false)
    
  };
  const deleteData = (userId) => {
    axios.delete(`https://641bdea41f5d999a446babdd.mockapi.io/demo/${userId}`);
    setUserData(
      userData &&
        userData.filter((value) => {
          return userId !== value.id;
        })
    );
  };
  const editData = (userId) => {
    axios.get(`${endPoint}/${userId}`).then((res) => {
      return setState({
        firstname: res.data.firstname,
        lastname: res.data.lastname,
        email: res.data.email,
        mobile: res.data.mobile,
        password: res.data.password,
        confirmpassword: res.data.confirmpassword,
        id: res.data.id
      });
    });
    setEditMode(true)
  };
  return (
    <>
      <hr />

      <div className="mb-3 container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname2" className="form-label mt-2">
            First Name
          </label>
          <input
            value={state.firstname}
            required
            type="text"
            className="form-control"
            id="firstname2"
            placeholder="first name"
            onChange={handleChange}
            name="firstname"
          />
          <label htmlFor="lastname2" className="form-label mt-2">
            Last Name
          </label>
          <input
            value={state.lastname}
            required
            type="text"
            className="form-control"
            id="lastname2"
            placeholder="last name"
            onChange={handleChange}
            name="lastname"
          />
          <label htmlFor="email" className="form-label mt-2">
            Email
          </label>
          <input
            value={state.email}
            required
            type="email2"
            className="form-control"
            id="email2"
            placeholder="xyz@gmail.com"
            onChange={handleChange}
            name="email"
          />
          <label htmlFor="mobile2" className="form-label mt-2">
            mobile
          </label>
          <input
            value={state.mobile}
            required
            type="tel"
            className="form-control"
            id="mobile2"
            placeholder="99099 99099"
            onChange={handleChange}
            name="mobile"
          />
          <label htmlFor="password2" className="form-label mt-2">
            Password
          </label>
          <input
            value={state.password}
            required
            type="password"
            className="form-control"
            id="password2"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
          <label htmlFor="confirmpassword2" className="form-label mt-2">
            Confirm Password
          </label>
          <input
            value={state.confirmpassword}
            required
            type="confirmpassword"
            className="form-control"
            id="confirmpassword2"
            placeholder="confirmpassword"
            onChange={handleChange}
            name="confirmpassword"
          />
          <div className="container text-center mt-2">
            <input type="submit" value={editMode? "Save Changes" : "Submit"} className="btn btn-primary" />
          </div>
        </form>
      </div>
      <div className="container-fluid border w-100 overflow-auto">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">UserID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {!userData
              ? null
              : userData.map((value, index) => {
                  return (
                    <tr key={value.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{value.id}</td>
                      <td>{value.firstname}</td>
                      <td>{value.lastname}</td>
                      <td>{value.email}</td>
                      <td>{value.mobile}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => editData(value.id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => deleteData(value.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Demo;
