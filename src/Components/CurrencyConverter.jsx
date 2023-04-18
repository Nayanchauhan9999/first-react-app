import React, { useEffect, useState } from "react";
import currency from "../currency code.json";
import axios from "axios";

function CurrencyConverter() {
  const [select, setSelect] = useState({
    from: "USD",
    to: "INR",
  });
  const [currData, setCurrData] = useState({})
  const [input, setInput] = useState(1);
  useEffect(()=>{
    async function currencyExchanger() {
        const response=  await axios.get(`https://api.api-ninjas.com/v1/convertcurrency?have=${select.from}&want=${select.to}&amount=${input}`,{headers:{'X-Api-Key': 'gq9UD/5mz6gNOkIjanqURw==MSq3aMHbzXG9nxJI'}})
        const data= response.data
        setCurrData(data)
      }
      currencyExchanger()
      //eslint-disable-next-line
  },[select])
 
  function onchangeSelect(event) {
    let name = event.target.name;
    let value = event.target.value;
    setSelect((val) => {
      return {
        ...val,
        [name]: value,
      };
    });
  }
  function userInput(event) {
    setInput(event.target.value)
  }
  return (
    <div className=" text-center container border bg-light rounded">      
      <h2 className="bg-dark text-light p-2 display-6 mt-3 rounded">Realtime Currency Exchange Rate </h2>
      <div>
       
        <select className="form-select" name="from" onChange={onchangeSelect} defaultValue="USD">
          {currency.map((value, index) => {
            return (
              <option key={index} value={value.code}>
                {value.code} - {value.name}
              </option>
            );
          })}
        </select>
        <input
          id="standard-basic"
          label="Ammount"
          variant="outlined"
          onChange={userInput}
          className="text-center form-control  mb-2 mt-2 fs-4"
          value={input}
        />
      </div>
      <div>
        <select name="to" className="form-select" onChange={onchangeSelect} defaultValue="INR">
          {currency.map((value, index) => {
            return (
              <option key={index} value={value.code}>
                {value.code} - {value.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="container text-success text-center mt-2 rounded">
        <h4 className="p-3 display-6 fs-2 fw-bold">{Number((currData.new_amount*input).toFixed(2)).toLocaleString()} </h4>
      </div>
    </div>
  );
}

export default CurrencyConverter;
