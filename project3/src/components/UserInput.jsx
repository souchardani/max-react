import React from "react";
import { useState } from "react";

function UserInput({ handleSubmit }) {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [anualInvestment, setAnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  function handleSubmitForm(e) {
    const objTosubmit = {
      initialInvestment: parseInt(initialInvestment),
      annualInvestment: parseInt(anualInvestment),
      expectedReturn: parseFloat(expectedReturn),
      duration: parseInt(duration),
    };

    console.log("obj to sumbit", objTosubmit);

    if (
      !isNaN(objTosubmit.initialInvestment) &&
      !isNaN(objTosubmit.annualInvestment) &&
      !isNaN(objTosubmit.expectedReturn) &&
      !isNaN(objTosubmit.duration)
    ) {
      handleSubmit(objTosubmit);
    }
  }

  return (
    <form id="user-input" onChange={handleSubmitForm}>
      <div className="input-group">
        <div>
          <label htmlFor="">initial investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => {
              setInitialInvestment(e.target.value);
              handleSubmitForm(
                e.target.value,
                anualInvestment,
                expectedReturn,
                duration
              );
            }}
          />
        </div>
        <div>
          <label htmlFor="">Annual investment</label>
          <input
            type="number"
            value={anualInvestment}
            onChange={(e) => {
              setAnualInvestment(e.target.value);
              handleSubmitForm(
                initialInvestment,
                e.target.value,
                expectedReturn,
                duration
              );
            }}
          />
        </div>
      </div>
      <br />
      <div className="input-group">
        <div>
          <label htmlFor="">Expected return</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => {
              setExpectedReturn(e.target.value);
              handleSubmitForm(
                initialInvestment,
                anualInvestment,
                e.target.value,
                duration
              );
            }}
          />
        </div>
        <div>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
              handleSubmitForm(
                initialInvestment,
                anualInvestment,
                expectedReturn,
                e.target.value
              );
            }}
          />
        </div>
      </div>
    </form>
  );
}

export default UserInput;
