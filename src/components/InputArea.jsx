import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function InputArea(props) {
  const [inputText, setInputText] = useState({ title: "", content: "" });
  const [isExpanded, setExpended] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setInputText((prevInputText) => ({ ...prevInputText, [name]: value }));
  }

  function submitNote(e) {
    e.preventDefault();
    setInputText({ title: "", content: "" });
    props.onAdd(inputText);
  }

  function handleExpand() {
    setExpended(!isExpanded);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={inputText.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={inputText.content}
          onClick={handleExpand}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputArea;
