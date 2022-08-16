import "./styles.css";
import { useState } from "react";
export default function App({position}) {
  const [tip, setTip] = useState(false);
  
  //direction top,left,right,bottom 
  let direction={};
  if(position==="top"){
      direction={
          top:"-70px",
          left:"0px",
          position:"absolute"
      }
  }else if(position=="bottom"){
      direction={
          bottom:"-70px",
          left:"0px",
          position:"absolute"
      }
  }else if(position=="left"){
       direction={
          top:"0px",
          left:"-120px",
          position:"absolute"
      }
  }else{
      direction={
          top:"0px",
          right:"-120px",
          position:"absolute"
      }
  }
  return (
    <div className="App" 
    style={{width:"100px",position:"relative",margin:"auto",marginTop:"200px"}}>
      <button
        //Enter function to set tip to true and display
        onMouseEnter={() => setTip(true)}
        //Leave function to set tip to false and not display
        onMouseLeave={() => setTip(false)}
        style={{
          margin: "auto",
        //   marginTop: "200px",
          padding: "15px",
          borderRadius: "1.5rem",
          cursor: "pointer"
        }}
      >
        HOVER
      </button>
      <h4 style={direction} 
      className={`${tip ? "" : "display"}`}
      >Hi,I am tooltip!
      </h4>
    </div>
  );
}
