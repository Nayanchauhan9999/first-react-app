import { Accordion } from './Component_20';
import React from 'react';

const data = [
  { questionNum: 1, question: "How Many data types in javascript?", answer: "Total seven(7) types of datatypes in javascript" },
  {questionNum : 2, question: "what are the 7 premitive data types in javascript ?", answer:"string, Number, Boolean, null, Undefine, BigInt, Symbol"},
  {questionNum : 3, question: "What is ecmascript", answer:"ECMAScript, also known as JavaScript, is a programming language adopted by the European Computer Manufacturer's Association as a standard for performing computations in Web applications"},
  {questionNum: 4, question: "why javascript used?", answer: "Javascript is widly used for Web development for frontend and also backend. But Most of the people is used for frontend Development"},
  {questionNum: 5, question: "It is  easy to learn Javascript?", answer: "Whether or not learning JavaScript is easy depends on several factors such as your prior programming experience, your learning style, and the resources available to you. JavaScript has a relatively low barrier to entry, and there are many resources available online to help you get started. However, mastering the language and its intricacies can take time and effort. With dedication, practice, and the right resources, it is possible to become proficient in JavaScript."}
]
const AccordionGroup = () => {

  return (
    <React.Fragment>
        <hr />
        <h2>Acoordion Group : component 21 </h2>
        <br />
        {data.map((value)=>{
          return  <Accordion question={value.question} answer={value.answer} srNo={value.questionNum} key={value.questionNum}/>
        })}
        
    </React.Fragment>
  )
}

export {AccordionGroup,data}