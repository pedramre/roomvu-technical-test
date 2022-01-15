import { connect } from 'react-redux'
import { toggleTheme } from '../redux/action/theme/creator'
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import {DayToggle} from "./DayToggle";
import {NightToggle} from "./NightToggle";

const Header = (props)=>{
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
                    defaultChecked={props.data.theme==='light'}
                    onChange={() => props.toggleTheme()}
                />

            </div>
        </header>
    )

}

const mapStateToProps = (state) => ({
    data: state.theme
})

const mapDispatchToProps = (dispatch) => ({
    toggleTheme: (string) => dispatch(toggleTheme('TOGGLE')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)