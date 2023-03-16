import React, { useState } from "react";

function Component17() {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone : ""
  });
  function onsubmit(event) {
    event.preventDefault();
    alert("Form Submitted")
  }
  function onchange(event) {
    let value = event.target.value;
    let name = event.target.name;
    console.log("name is " + name)
    console.log("value is " + value)
    setDetails((preValue) => {
      // Short Trick
      return {
        ...preValue,
        [name]: value
      }
      
      // Long Trick
      // console.log(preValue)
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: "",
      //     email: "",
      //     phone: ""
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value
      //   };
      // }
    });
  }
  return (
    <React.Fragment>
      <h1>first name, last name and email complex form : Component 17</h1>
      <h2>
        hello, <span className="text-danger">{details.fname} {details.lname}</span>. Please
        enter your email
      </h2>
      <h2 className="text-primary">
        Your email is <span className="text-danger">{details.email} </span>
      </h2>
      <h2 className="text-primary">
        Your Mobile Number is <span className="text-danger">{details.phone} </span>
      </h2>
      <form onSubmit={onsubmit}>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            name="fname"
            placeholder="Enter First Name..."
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lname"
            placeholder="Enter Last Name..."
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Mobile Number
          </label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="+91 (99099-99099)"
            onChange={onchange}
          />
        </div>
        <div className="container d-flex justify-content-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      <hr />
    </React.Fragment>
  );
}

export default Component17;

// // Bonus : Spred Operator - Advance Javascript

// let brother = ["hitesh","darshan","tejasj","Shivam"];
// let friends = ["Kishan","Dilip","Paresh","dhaval","kamlesh"];

// //concate both array with spread operator

// let BrotherAndFriends = [...brother,...friends]
// // console.log(BrotherAndFriends);

// //spread operator is also used in object
// let biodata1 = {
//     fname  : "nayan",
//     lname : "chauhan",
//     age : 23,
// }
// let biodata2 ={ 
//     always : "cool",
//     hobby : "coding"
// }

// const bothBioData = {
//     exerience : "tech Mahindra",
//     ...biodata1,
//     birthMonth : "january",
//     ...biodata2
// }
// // console.log(bothBioData)