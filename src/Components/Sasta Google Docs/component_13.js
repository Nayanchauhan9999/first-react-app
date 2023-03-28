import React,{Fragment} from "react";
import InputDisplay from "./InputDisplay";
import Navbar from "./Navbar";
import StatusBar from "./StatusBar";
import Toolbar from "./Toolbar";

export default function TextEditor() {
  return (
    <Fragment>
      <div className="main-div-docs">
        <Navbar/>
        <Toolbar/>
        <InputDisplay/>
        <StatusBar/>
      </div>
    </Fragment>
  );
}
