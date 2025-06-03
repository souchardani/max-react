import { EXAMPLES } from "../data.js";
import { useState, Fragment } from "react";
import Section from "./Section.jsx";
import TabButton from "./TabButton";

function Examples() {
  //call it on the top level component funcion or custom hooks
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = "please click a button";

  function handleSelect(selectedButton) {
    // => Selected button is a string like 'compoents', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  let tableContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tableContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples 2" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic == "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tableContent}
    </Section>
  );
}

export default Examples;
