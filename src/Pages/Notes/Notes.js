import { Container, Footer, Note } from "./Notes.styles";
import { Inputbar } from "../../Components/Molecules";
import useNotes from "./useNotes";

export function Notes() {
  const { createNote, notes, handleOnChange, value } = useNotes();
  return (
    <>
      <Container>
        {notes.map((note, index) => (
          <Note key={index} background={note.background}>
            {note.note}
          </Note>
        ))}
      </Container>
      <Footer>
        <Inputbar
          buttonText="Create note"
          onClick={createNote}
          onChange={handleOnChange}
          value={value}
        />
      </Footer>
    </>
  );
}
