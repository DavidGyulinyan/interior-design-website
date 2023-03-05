import './SearchInput.css'
import icon from './icon/searchIcon.svg'

function SearchInput() {
    return (
        <div className="searchInput">
            <div className="inputWrapper">
                <input type="text" placeholder='Search Furniture' />
                <div className="circle">
                    <form action="">
                        <a href="#" className='linkWrapper'>
                            <img className='searchIcon' src={icon} alt="searchIcon.svg" />
                        </a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchInput