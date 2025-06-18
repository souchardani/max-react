const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descrption =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descrption} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
