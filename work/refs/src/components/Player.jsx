import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick(event) {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || "unknown untity"}</h2>
      <div>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </div>
    </section>
  );
}
