import React from 'react';
import "./Home.css";

let currDate=new Date().getHours();
let time=new Date().toLocaleTimeString();
let greetings="";
let style={color:"black"};
if(currDate>=4 && currDate<=11)
{greetings="Good Morning";style={color:"green"};}
else if(currDate>=12 && currDate <=18)
{greetings="Good Afternoon";style={color:"Yellow"};}
else{
greetings="Good night";
style={color:"Black"};
}
let Home=()=>
{
    return(<><div><h1 className="home"  style={style}>Hello user ,wish you a very {greetings} , Time is {time}</h1></div></>);
}
export default Home;