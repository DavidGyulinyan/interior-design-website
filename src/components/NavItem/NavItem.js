import "../NavItem/NavItem.css"

const NavItem = (props) => {

    return (
        <div className="NavItems">
            <form action="">
                <a href="#" key={props.id}>
                    {props.title}
                </a>
            </form>
        </div>
    )
}

export default NavItem