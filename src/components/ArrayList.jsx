
export default function ArrayList(){

    const items = ["Banana", "Apple", "Orange", "Mango", "Pineapple"];

    return(
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item}><h2>{item}</h2></li>
                ))}
            </ul>

        </div>
    )
}