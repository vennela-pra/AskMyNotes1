import { useState } from "react";

function LikeCounter() {
  const [likes, setLikes] = useState(0);
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState([]);

  async function getMessage() {
    const response = await fetch("http://askmynotes1-1.onerender.com/notes");
    const data = await response.json();
    setMessage(data.notes);
  }

  async function getNotes() {
    const response = await fetch("http://127.0.0.1:8000/notes");
    const data = await response.json();
    setNotes(data.notes);
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

      <br />

      <button onClick={getNotes}>Get My Notes</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default LikeCounter;
