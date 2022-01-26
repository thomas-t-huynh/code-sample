import { useState } from "react";
import { sampleArray } from "../../Utils/utils";

const noteColors = ["lightgreen", "lightpink", "lightyellow"];

function useNotes() {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState("");

  const createNote = () => {
    const newNote = { background: sampleArray(noteColors), note: value };
    setNotes([...notes, newNote]);
    setValue("");
  };

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return {
    notes,
    value,
    handleOnChange,
    createNote,
  };
}

export default useNotes;
