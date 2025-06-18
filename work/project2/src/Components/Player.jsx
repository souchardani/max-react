import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function HandleEditClick() {
    //when updating state absed on previous value of that state, you should always
    //pass a funciton
    setIsEditing((value) => {
      return !value;
    });

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function HandleChange(event) {
    setPlayerName(event.target.value);
  }

  let EditablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing)
    EditablePlayerName = (
      <input type="text" required value={playerName} onChange={HandleChange} />
    );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {EditablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={HandleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
