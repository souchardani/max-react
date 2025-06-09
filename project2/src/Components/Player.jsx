import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function HandleEditClick() {
    //when updating state absed on previous value of that state, you should always
    //pass a funciton
    setIsEditing((value) => {
      return !value;
    });
  }

  function HandleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let EditablePlayerName = <span className="player-name">{initialName}</span>;

  if (isEditing)
    EditablePlayerName = (
      <input type="text" required value={playerName} onChange={HandleChange} />
    );

  return (
    <li>
      <span className="player">
        {EditablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={HandleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
