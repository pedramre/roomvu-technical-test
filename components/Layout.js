import Header  from './Header'
import { Footer } from './Footer'
import {connect} from "react-redux";

const Layout = ({ children ,data}) => {
    return(
        <div className={`container ${data.theme}`}>
            <div className="main-container">
                <Header/>

                {children}

                <Footer/>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.theme
})

export default connect(mapStateToProps)(Layout)