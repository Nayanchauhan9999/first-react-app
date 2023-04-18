import React, { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function VoiceToText() {


  const [copy, setCopy] = useState(false)
  const textDiv = useRef("")
  
  const { transcript,browserSupportsSpeechRecognition,listening} = useSpeechRecognition();
  const startListening =()=>{
    SpeechRecognition.startListening({continuous:true, language:"en-IN"})
  }
  const stopListenning=()=>{
    SpeechRecognition.stopListening()
  }
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const copyText=()=>{
      navigator.clipboard.writeText(textDiv.current.innerText)
      setCopy(true)
      setTimeout(() => {
        setCopy(false)
      }, 3000);
  }
  return (
    <div className="container text-center">
      <h1 className="bg-dark text-light display-5 rounded">
        Voice to text converter
      </h1>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div>
        <div className="text-area-voicetotext-converter border bg-light p-3 fs-4" contentEditable="true" suppressContentEditableWarning="true" ref={textDiv}> 
          {transcript}
        </div>
        <div className="d-flex justify-content-around bg-light align-items-center border">
          <button className="m-3 btn btn-sm btn-dark" onClick={copyText}>{copy? "Copied": "Copy text"}</button>
          <button className="m-3 btn btn-sm btn-dark" onClick={startListening}>Start Writing</button>
          <button className="m-3 btn btn-sm btn-dark" onClick={stopListenning}>Stop Writing</button>
        </div>
      </div>
    </div>
  );
}
export { VoiceToText };
