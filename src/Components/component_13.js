import React,{useState} from "react";
import SnackBar from "../Components/SnackBar"

export default function TextEditor() {
    const [state, setState] = useState([]);
    let lengthCount = state.length;
    let wordCount  = (state.toString()).split(" ");

   function onchange(nayan){
    setState(nayan.target.value)
   }
   const UpperCase= ()=>{
    let newText = state.toUpperCase();
    setState(newText)
   }
   const LowerCase= ()=>{
    let newText = state.toLowerCase();
    setState(newText);
   }
   const Reset= ()=>{
    setState("");
   }
  return (
    <React.Fragment>
    <hr />
      <h1>Sasta Google Docs : component 13</h1>
      <textarea id="one" rows="12" onChange={onchange} placeholder="Enter Text Here..." value={state}></textarea>
      <button type="button" onClick={UpperCase} className="btn btn-primary m-2 btn-sm">UpperCase</button>
      <button type="button" onClick={LowerCase} className="btn btn-primary m-2 btn-sm ">LowerCase</button>
      <button type="button" onClick={Reset} className="btn btn-primary m-2 btn-sm ">Reset</button>
      <SnackBar text={state}/>
      <p> Character Count :  {lengthCount} , word Count: {wordCount.length} </p>
      <p>Preview : {state} </p>
      <hr />
    </React.Fragment>
  );
}
