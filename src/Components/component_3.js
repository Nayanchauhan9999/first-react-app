import React from 'react';

function Component3(){
    const myName = "nayan";
    const lastName = "Chauhan";
return (
    <React.Fragment>
        {/* How to use template Litrals in jsx - ReactJS */}
      <h1>How to use template Litrals in ReactJS : Component 3</h1>
      <p>
        {`Hi my name is ${myName} and last name is ${lastName}.hence my full name is ${myName} ${lastName}`}
      </p>
      <hr/>
    </React.Fragment>
)
}
export {Component3}