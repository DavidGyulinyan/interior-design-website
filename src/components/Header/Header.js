import "./Header.css"
import Nav from "../Nav/Nav"
import SearchInput from '../SearchInput/SearchInput'

const Header = () => {

    return (
        <header className="Header">
            <Nav />

            <div className="center">
                <div className="caption">
                    <h1 className="heading">
                        Make Your Interior More Minimalistic & Modern
                    </h1>
                    <p className="slogan">
                        Bringing interiors to life, understanding the person or people living in a home is far greater need in design.
                    </p>
                    <SearchInput />
                </div>

                </div>
        </header>
    )
}




export default Header