import React from 'react'
import ClickToDropdown from './ClickToDropdown'

const Toolbar = () => {
  return (
    <div className='main-toolbar-div'>
        <div className="alltoolbar">
          <ClickToDropdown caseList={["UpperCase","LowerCase","Capitalise"]} toolName="Aa"/>
        </div>
    </div>
  )
}

export default Toolbar