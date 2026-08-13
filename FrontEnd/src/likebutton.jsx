import { useState } from "react";

function LikeCounter() {
  const [likes, setLikes] = useState(0);
  const [message, setMessage] = useState("");

  async function getMessage() {
    const response = await fetch("http://127.0.0.1:8000/message");
    const data = await response.json();
    setMessage(data.message);
  }

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleUnlike() {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  }

  function handleReset() {
    setLikes(0);
  }

  return (
    <div className="like-counter">
      <h2>React State Practice</h2>

      <h3>Likes: {likes}</h3>

      <button onClick={handleLike}>Like</button>
      <button onClick={handleUnlike}>Unlike</button>
      <button onClick={handleReset}>Reset</button>

      <br />
      <br />

      <button onClick={getMessage}>Get Backend Message</button>

      <p>{message}</p>
    </div>
  );
}

export default LikeCounter;