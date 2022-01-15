import {useState} from "react";

export const ReadDuration = ()=>{
    const [random,setRandom] = useState(randomIntFromInterval(1,35));
    return(
        <span>
            <small>            ☕️☕️☕️</small>
            { random } min read
        </span>
    )
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}