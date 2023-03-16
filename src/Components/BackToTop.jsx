import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const BackToTop = () => {
    function scroll(){
        document.documentElement.scrollTop = 0
    }
    return <ArrowUpwardIcon id="scroll1" onClick={scroll} style={{position:"fixed",cursor:"pointer",right:"50px",bottom:"50px",fontSize:"40px",backgroundColor:"#0d6efd",borderRadius:"50%",boxShadow:"2px 2px 4px rgab(0,0,0,0.4)",filter:"drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",color:"white"}} />
  }

export default BackToTop