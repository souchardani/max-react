import React from "react";

function Tabs({ children, buttons, ButtonContainer = "menu" }) {
  //to receive the value we must create a variable like this with uppercase
  //const ButtonContainer = buttonsContainer;
  return (
    <>
      {/* to receive the value */}
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}

export default Tabs;
