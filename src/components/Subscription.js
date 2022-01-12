import React, { useState } from "react";
import LoadingMask from "./LoadingMask";

function Subscription() {
  const [inputEmail, setInputEmail] = useState("");
  const [isShowForm, setIsShowForm] = useState(true);
  const [messageSub, setMessageSub] = useState("");
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [buttonStatus, setButtonStatus] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isDisabled = () => {
    if (
      inputEmail.length > 0 &&
      inputEmail.includes("@") &&
      inputEmail.includes(".")
    ) {
      setButtonStatus(false);
    } else {
      setButtonStatus(true);
    }
  };

  const postData = async () => {
    setIsShowForm(false);
    setIsShowLoading(true);
    const postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: { inputEmail } }),
    };

    const post = await fetch(
      "https://seriescharacters.com/api/newsletter",
      postData
    )
      .then((postData) => postData.json())
      .then((data) => {
        console.log("Success", data);
        setMessageSub(<h1>Subscribed</h1>);
        setIsShowLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      {isShowForm ? (
        <div>
          <h2>Subscribe to our newsletter</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              onKeyUp={isDisabled}
            ></input>
            <button
              id="btnSubmit"
              type="submit"
              onClick={postData}
              disabled={buttonStatus}
            >
              Subscribe
            </button>
          </form>
        </div>
      ) : (
        <div>{isShowLoading ? <LoadingMask /> : messageSub}</div>
      )}
    </div>
  );
}

export default Subscription;
