import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const CategoryWiseData = () => {
  const [state, setState] = useState();
  const [filterData, setFilterData] = useState();
  useEffect(() => {
    const productData = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setState(data);
    };
    productData();
  }, []);
  let a =
    state &&
    state.map((value) => {
      return value.category.name;
    });
  let b = new Set(a);
  let allCategory = Array.from(b).sort();

  const showData = (event) => {
    const filteredData =
      state &&
      state.filter((value) => {
        return value.category.name === event.target.innerText;
      });
    setFilterData(filteredData);
  };
  console.log(filterData);
  return (
    <React.Fragment>
      {!state ? (
        <p> {<CircularProgress />} </p>
      ) : (
        <>
          <div className="d-flex justify-content-around flex-wrap">
            {allCategory.map((value, index) => {
              return (
                <button
                  className="btn btn-primary m-2"
                  key={index}
                  onClick={showData}
                >
                  {value}
                </button>
              );
            })}
          </div>
          <div className="d-flex flex-wrap justify-content-around">
            {filterData &&
              filterData.map((value,index) => {
                return (
                    <div key={index} className="card m-3" style={{ width: "18rem" }}>
                      <img src={value.images} className="card-img-top" alt="ImageNotfound" />
                      <div className="card-body">
                        <h5 className="card-title"> {value.title} <span className="text-danger"> #{value.category.name} </span></h5>
                        <p className="card-text">
                          {value.description}
                        </p>
                        <div className="container text-center">
                        <button className="btn btn-success"> ₹ {value.price} /- </button>
                        </div>
                      </div>
                    </div>
                );
              })}
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default CategoryWiseData;
