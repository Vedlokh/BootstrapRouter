import React from 'react';
import Card from './Card';
let CardMultiper=()=>{
    return( <div className="cards">
    {Image.map((val)=>{return(<Card className="card"
    img={val.img}
    />)})}
    </div>);
}
export default CardMultiper;