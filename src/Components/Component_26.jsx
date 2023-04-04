import React, { useState } from "react";
import Button from "@mui/material/Button";
import currency from "../currencies.json";

function Component26() {
    const [select, setSelect] = useState({
        from: "USD",
        to: "INR"
    });
    const [data2, setData2] = useState("")
    const [input, setInput] = useState({
        "firstInput" : "1",
        "secondInput" : "1"
    })
    function currencyExchanger() {
        fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${select.from}&to_currency=${select.to}&apikey=2EKYQW3P18BDXZHE`)
            .then((response) => {
                let res = response.json()
                return res
            }).then((data) => {
                setData2(data["Realtime Currency Exchange Rate"])
            })
    }
    function onchangeSelect(event) {
        let name = event.target.name;
        let value = event.target.value;
        setSelect((val) => {
            return {
                ...val,
                [name]: value
            }
        });
    }
    function userInput(event) {
        let value = event.target.value;
        let name = event.target.name;
        setInput((preVal)=>{
            return {
                ...preVal,
                [name] : value
            }
        })
    }
    return (
        <>
            <hr />
            <h2>Realtime Currency Exchange Rate : Component 26</h2>
            <div>
                <input
                    id="standard-basic"
                    label="Ammount"
                    variant="outlined"
                    onChange={userInput}
                    className="m-2"
                    value={input.firstInput}
                    name= "firstInput"
                />
                <select name="from" onChange={onchangeSelect} >
                    {currency.map((value, index) => {
                        return (
                            <option key={index} value={value.code}>
                                ({value.code}) {value.name} ({value.symbol})
                            </option>
                        );
                    })}
                </select>
            </div>
            <Button variant="contained" onClick={currencyExchanger} className="m-2 text-center">
                Convert
            </Button>
            <div>
                <input
                    id="standard-basic"
                    className="m-2"
                    label="Ammount"
                    variant="outlined"
                    onChange={userInput}
                    value={input.firstInput*data2["5. Exchange Rate"]}
                    name = "secondInput"
                />
                <select name="to" onChange={onchangeSelect}>
                    {currency.map((value, index) => {
                        return (
                            <option key={index} value={value.code}>
                                ({value.code}) {value.name} ({value.symbol})
                            </option>
                        );
                    })}
                </select>
            </div>
            {/* <p> {`1 ${data2["1. From_Currency Code"]} = ${data2["5. Exchange Rate"]} ${data2["3. To_Currency Code"]}`} </p> */}
        </>
    );
}

export default Component26;
