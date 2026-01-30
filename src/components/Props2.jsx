
// Destructure props in the function parameter
function Props2(props){

    const {name, massage, emaji} = props; // Destructuring props

    return (
        <div>
            <h1>{massage} {emaji} {name}</h1>
        </div>
    )
}

export default Props2;

