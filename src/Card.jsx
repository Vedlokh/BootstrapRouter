import React from "react";
// import "./Cards.css"

let Card=(props)=>{
    return(
    <><div className="Cards">
   <div className="card" style={{width: "18rem",margin:"30px" }}>
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</>);
}
export default Card;