// props function component here
function Home2(props){
    console.log(props);
    return(
        <div>
            <h1>{props.massage} {props.name}</h1> {/* Accessing props */}

        </div>
    )
}

export default Home2;