import { useState } from "react";

function LikeCounter() {
  //State is set
  const [likes, setLikes] = useState(0);

  function handleLike() {
    /*Write code her */
    setLikes(likes + 1);//Update State
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
    </div>
  );
}

export default LikeCounter;