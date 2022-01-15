import Header  from './Header'
import { Footer } from './Footer'
import {connect} from "react-redux";
import Head from 'next/head'

const Layout = ({ children ,data}) => {
    return(
        <div className={`container ${data.theme}`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
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