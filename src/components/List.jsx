
function Item({name, price, emoji, color}){
    return(
        
            <li>
                {emoji} {name} {price} {color}
            </li>

        
    )
}
export default Item;