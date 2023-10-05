import { useState } from "react";
import "./App.scss";
import Categories from "./components/Categories/Categories";
import { data } from "./data";
import Notes from "./components/Notes/Notes";
import Note from "./components/Note/Note";
import NoteHeader from "./components/NoteHeader/NoteHeader";

function App() {
  const [categories, setCategories] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedNote, setSelectedNote] = useState();
  const [createNoteClicked, setCreateNoteClicked] = useState(false);

  return (
    <div className="App">
      <NoteHeader {...{ setSelectedNote, setSelectedCategory }} />
      <div className="App-notes">
        <Categories
          {...{
            categories,
            setCategories,
            selectedCategory,
            setSelectedCategory,
            setSelectedNote,
            setCreateNoteClicked,
          }}
        />
        {selectedCategory && (
          <Notes
            {...{
              selectedCategory,
              selectedNote,
              setSelectedNote,
              setCreateNoteClicked,
            }}
          />
        )}
        {(selectedNote || createNoteClicked) && (
          <Note
            {...{
              selectedNote,
              setSelectedNote,
              setCreateNoteClicked,
              setCategories,
              selectedCategory,
              setSelectedCategory,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
