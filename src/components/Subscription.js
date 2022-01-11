import React, { useState } from "react";
import LoadingMask from "./LoadingMask";

function Subscription() {

  const [inputEmail, setInputEmail] = useState("")
  const [isShowForm, setIsShowForm] = useState(true)
  const [messageSub, setMessageSub] = useState("")
  const [isShowLoading, setIsShowLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    /* document.getElementById("btnSubmit").disabled = "disabled"
     if (inputEmail.includes("@") && inputEmail.includes(".")) {
       document.getElementById("btnSubmit").disabled = "enabled"
     }*/
  }

  const postData = async () => {
    setIsShowForm(false)
    setIsShowLoading(true)
    const postData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: { inputEmail } })
    }

    const post = await fetch("https://seriescharacters.com/api/newsletter", postData)
      .then(postData => postData.json())
      .then(data => {
        console.log("Success", data);
        setMessageSub(<h1>Subscribed</h1>)
        setIsShowLoading(false)
      })
      .catch(error => {
        console.log("Error", error)
      });
  };

  return (
    
    <div>
      {isShowForm ? 
        <div>
          <h2>Subscribe to our newsletter</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="E-mail" value={inputEmail} onChange={e => setInputEmail(e.target.value)}></input>
            <button id="btnSubmit" type="submit" onClick={postData}>Subscribe</button>
          </form>
        </div> :
        <div>
        {isShowLoading ? 
        <LoadingMask/> :
        messageSub}
        </div>
        }
    </div>
    
  );
}

export default Subscription;