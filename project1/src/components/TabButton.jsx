const TabButton = ({ children, isSelected, ...props }) => {
  // OLD WAY TO ADD EVENTS
  //document.querySelector("button").addEventListener("click", () => {});

  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
