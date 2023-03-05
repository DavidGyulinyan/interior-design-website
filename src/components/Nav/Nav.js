
import "./Nav.css"
import NavItem from "../NavItem/NavItem"
import Logo from '../../Logo/Logo'
import ShoppingBag from '../ShoppingBag/ShoppingBag'

const Nav = () => {
    const navItems = [

        {
            id: 1,
            title: "Furniture"
        },

        {
            id: 2,
            title: "Shop"
        },

        {
            id: 3,
            title: "About us"
        },

        {
            id: 4,
            title: "Contact"
        },
    ]


    return (

        <nav className="Nav">
            <Logo />
            <div className="navItemsWrapper">
                {navItems.map(el => <NavItem key={el.id} title={el.title} />)}
            </div>
            <div className="shoppingBagIcon">
        
                <ShoppingBag />
            </div>
        </nav>
    )
}

export default Nav