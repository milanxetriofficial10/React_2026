import Events from './Events';

function EventsConnect(){
    function handleChange(e){
        console.log(e.target.value);
    }

    return(
        <div>
            <Events />

            <input 
              type="text" 
              onChange={handleChange}
              placeholder="enter your part"
            />
        </div>
    );
}

export default EventsConnect;
