import {useEffect, useState} from "react";
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import {DayToggle} from "./DayToggle";
import {NightToggle} from "./NightToggle";

export const Header = ()=>{
    const[theme,setTheme] = useState(false);

    return (
        <header className="">
            <div className="header w-100">
                <h1>
                    <a href="">Overreacted</a>
                </h1>
                <Toggle
                    id='status'
                    icons={{
                        unchecked: <DayToggle/>,
                        checked: <NightToggle/>,
                    }}
                    defaultChecked={theme}/>

            </div>
        </header>
    )

}