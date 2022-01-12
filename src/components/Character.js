import React, { useState } from "react";

function Character({ charname, details }) {
  const [showDetails, setShowDetails] = useState(false);
  const getDetails= ()=>{
    setShowDetails(!showDetails)
  } 

  return (
    <div>
      <div>
        <h3>{charname}</h3>
        {showDetails && <p>{details}</p>}
        <button onClick={getDetails}>
          {showDetails ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
}

export default Character;
