const name = "Milan Programmer";

function displayName(){
    return "Milan Vai";
}

function Home(){
    return(
        <div>
            <h1>Hello Milan How Are you</h1>
            <p>Welcome to my React project!</p>
            <h2>My Name is {name}</h2>
            <h3>My Brother Name is {displayName()}</h3>
        </div>
    )
}
export default Home;