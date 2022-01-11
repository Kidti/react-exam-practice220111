import React, {useState} from "react";

function Character({ characters }) {

  const [showDetails, setShowDetails] = useState(false)

   
  return (
    <div>
      {characters.map(char =>
        <div key={char.name}>
          <h3>{char.name}</h3>
          {showDetails && <p>{char.details}</p>}
          <button disabled={!"disabled"} onClick={()=>setShowDetails(!showDetails)}>{showDetails ? "Show Less" : "Show More"}</button>
        </div>)
      }
    </div>

  )

};


export default Character;