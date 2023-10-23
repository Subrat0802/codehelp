import './Item.css';

function Item(props){
    return(
        <div className="items">
            <h1>
                {props.name}
                {props.children}
            </h1>
        </div>
    )
}

export default Item;