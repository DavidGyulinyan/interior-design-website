import './Desc.css'

function Desc(props) {

 

    return(
        <a href='#' className="Desc">
            <div className='itemsWrapper'>
            <p className='title item' key={props.id}>{props.title}</p>
            <p className='text item' key={props.id}>{props.txt}</p>
            <p className='more item' key={props.id}>{props.more}</p>
            </div>
        </a>
    )
}

export default Desc