// array as props function component here
function PropsArrays({persion}){
    return (
        <div>
            <h1>Name: {persion.name}</h1>
            <h1>Age: {persion.age}</h1>
            <h1>Profession: {persion.profession}</h1>
            <h1>Seat Numbers: {persion.seatNumbers.join(', ')}</h1>
            <h1>Address: {persion.address}</h1>
            <h1>Email: {persion.email}</h1>
            <h1>Phone: {persion.phone}</h1>

        </div>
    )
}

export default PropsArrays; 