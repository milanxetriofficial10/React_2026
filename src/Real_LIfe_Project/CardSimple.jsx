
// simple card design in react js component 

import React from 'react';
import { useState } from 'react';


function CardSimple(){

    const [showMore, setShowMore] = useState(false);

    const fullText = "Hello, this is a simple card design in react js component. It can be used to display information in a concise and visually appealing way. You can customize the content and style of the card as needed.";

    return (
        <div style={styles.card}>
            <h2>Simple card</h2>

            <p>
                {showMore ? fullText : fullText.substring(0, 90) + '....'}
            </p>

            <button style={styles.button} onClick={() => setShowMore 
                (! showMore)}>{showMore ? "Show Less" : "Read More"}
                </button>


        </div>
    );
}

export default CardSimple;

// simple styles
const styles = {
  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
};
