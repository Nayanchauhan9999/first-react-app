import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCrudApp  = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });
  const [defaultData, setDefaultData] = useState();
  const [edit, setEdit] = useState(false);
  const [call, setCall] = useState()
  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => setDefaultData(res.data))
      .catch((error) => console.log(error));
    console.log("render");
  }, [call]);
  const endPoint = "https://641bdea41f5d999a446babdd.mockapi.io/userdata";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit === true) {
      axios.put(`https://641bdea41f5d999a446babdd.mockapi.io/userdata/${userData.id}`,{firstname:userData.firstname,
      lastname:userData.lastname,
      email: userData.email,
      mobile:userData.mobile,
      password:userData.password,
      confirmpassword:userData.confirmpassword,
      id: userData.id
    }).then(()=>{
      setCall(true)
    })
    alert("Data Updated")
    setUserData({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      confirmpassword: "",
      id: "",
    });
    } else {
      axios.post(endPoint, userData).then(()=>{
        setCall(true)
      })
      alert("Data Received");
      setUserData({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        password: "",
        confirmpassword: "",
        id: "",
      });
    }
    setEdit(false);
    setCall(false)
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const deletData = (userId) => {
    axios.delete(
      `https://641bdea41f5d999a446babdd.mockapi.io/userdata/${userId}`
    ).then(()=>{
      setCall(true)
    })
    setCall(false)
    // setDefaultData(
    //   defaultData &&
    //     defaultData.filter((value) => {
    //       return value.id !== userId;
    //     })
    // );
  };
  const editMode = (userId) => {
    axios
      .get(`https://641bdea41f5d999a446babdd.mockapi.io/userdata/${userId}`)
      .then((res) => {
        setCall(true)
        setUserData({
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          email: res.data.email,
          mobile: res.data.mobile,
          password: res.data.password,
          confirmpassword: res.data.confirmpassword,
          id: res.data.id,
        });
      });
    setEdit(true);
    setCall(false)
  };
  return (
    <>
    <div className="container-fluid">
      <h4 className="text-danger">NOTICE : Do not Reload your Browser, due to Client side rendering. If you will you will Get Redirect to Home Page</h4>
    </div>
    <div className="container-fluid">
    <h3 className="text-success text-center border-bottom border-top">Basic Crud Operation APP</h3>
      
    </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname" className="form-label mt-2">
            First Name
         <span className="text-danger" title="Mandatory Fields"> *</span> </label>
          <input
            value={userData.firstname}
            required
            name="firstname"
            onChange={handleChange}
            className="form-control form-control-sm"
            type="text"
            id="fname"
            placeholder="First Name"
          />
          <label htmlFor="lname" className="form-label mt-2">
            Last Name
         <span className="text-danger" title="Mandatory Fields"> *</span> </label>
          <input
            value={userData.lastname}
            required
            name="lastname"
            onChange={handleChange}
            className="form-control form-control-sm"
            type="text"
            id="lname"
            placeholder="Last Name"
          />
          <label htmlFor="email" className="form-label mt-2">
            Email
         <span className="text-danger" title="Mandatory Fields"> * </span> </label>
          <input
            value={userData.email}
            required
            name="email"
            onChange={handleChange}
            className="form-control form-control-sm"
            type="email"
            id="email"
            placeholder="Email Address"
          />
          <label htmlFor="mobile" className="form-label mt-2">
            Mobile
         <span className="text-danger" title="Mandatory Fields"> *</span> </label>
          <input
            value={userData.mobile}
            required
            name="mobile"
            onChange={handleChange}
            className="form-control form-control-sm"
            type="tel"
            id="mobile"
            placeholder="Mobile No"
          />
          <label htmlFor="password" className="form-label mt-2">
            Password
         <span className="text-danger" title="Mandatory Fields"> *</span> </label>
          <input
            value={userData.password}
            required
            name="password"
            onChange={handleChange}
            className="form-control form-control-sm"
            type="password"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="confirmpassword" className="form-label mt-2">
            Confirm Password
         <span className="text-danger" title="Mandatory Fields"> *</span> </label>
          <input
            value={userData.confirmpassword}
            required
            name="confirmpassword"
            onChange={handleChange}
            className="form-control form-control-sm"
            type="password"
            id="confirmpassword"
            placeholder="Confirm Password"
          />
          <div className="container mt-2 mb-2 text-center">
            <input
              className="btn btn-sm btn-primary"
              type="submit"
              value={edit ? "Save Changes" : "Submit"}
            ></input>
          </div>
        </form>
      </div>
      <div className="container-fluid w-100 overflow-auto">
        <table className="table table-striped border border-3 rounded table-hover table-sm text-center w-100">
          <thead>
            <tr>
              <th scope="col">SrNo.</th>
              <th scope="col">UserID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Edit</th>
              <th scope="col">&#128686;</th>
            </tr>
          </thead>
          <tbody>
            {defaultData
              ? defaultData.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row" className="text-break">
                        {index + 1}
                      </th>
                      <td>{value.id}</td>
                      <td>{value.firstname}</td>
                      <td>{value.lastname}</td>
                      <td>{value.email}</td>
                      <td>{value.mobile}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          onClick={() => editMode(value.id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => deletData(value.id)}
                          className="btn btn-danger btn-sm"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApiCrudApp ;
