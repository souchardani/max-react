import React from "react";

function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="">initial investment</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Annual investment</label>
          <input type="number" />
        </div>
      </div>
      <br />
      <div className="input-group">
        <div>
          <label htmlFor="">Expected return</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Duration</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
}

export default UserInput;
