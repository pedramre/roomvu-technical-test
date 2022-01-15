import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    return(
        <div className="container">
            <div className="main-container">
                <Header/>

                {children}

                <Footer/>

            </div>
        </div>
    )
}