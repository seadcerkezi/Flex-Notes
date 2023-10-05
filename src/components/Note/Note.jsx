import React, { useEffect, useState } from "react";
import "./note.scss";
import { generateRandomId } from "../../utils/generateRandomId";
import { CheckOutlined, CloseOutlined, DeleteFilled } from "@ant-design/icons";

const Note = ({
  selectedNote,
  setSelectedNote,
  setCreateNoteClicked,
  setCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [title, setTitle] = useState(selectedNote?.title || "");
  const [description, setDescription] = useState(
    selectedNote ? selectedNote.description : ""
  );

  const saveNote = () => {
    if (!selectedNote) {
      setCategories((prev) =>
        prev.map((item) =>
          item.id !== selectedCategory.id
            ? item
            : {
                ...item,
                notes: [
                  ...item.notes,
                  {
                    id: generateRandomId(),
                    description: description,
                    title: title,
                  },
                ],
              }
        )
      );
    } else {
      setCategories((prev) =>
        prev.map((item) =>
          item.id !== selectedCategory.id
            ? item
            : {
                ...item,
                notes: item.notes.map((note) =>
                  note.id !== selectedNote.id
                    ? note
                    : { ...note, title: title, description: description }
                ),
              }
        )
      );
    }

    setSelectedCategory();
    setSelectedNote();
    setCreateNoteClicked(false);
  };

  const deleteNote = () => {
    setCategories((prev) =>
      prev.map((item) =>
        item.id !== selectedCategory.id
          ? item
          : {
              ...item,
              notes: item.notes.filter((note) => note.id !== selectedNote.id),
            }
      )
    );
    setSelectedCategory();
    setSelectedNote();
    setCreateNoteClicked(false);
  };

  useEffect(() => {
    setTitle(selectedNote?.title || "");
    setDescription(selectedNote ? selectedNote.description : "");
  }, [selectedNote]);

  return (
    <div className="main-note">
      <div className="exit-div">
        <button
          className="exit-button"
          onClick={() => {
            setCreateNoteClicked(false);
            setSelectedNote(false);
          }}
        >
          <CloseOutlined />
        </button>
      </div>
      <div className="note-div">
        <div className="note">
          <input
            className="note-input"
            placeholder="Add a title..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="note-textarea"
            placeholder="Add notes..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="save-div">
          <button
            className="delete-button"
            disabled={
              title.trimStart().length === 0 ||
              description.trimStart().length === 0
            }
            onClick={() => deleteNote()}
          >
            <span className="button-text">Delete Note</span>
            <DeleteFilled className="delete-icon" />
          </button>
          <button
            className="save-button"
            disabled={
              title.trimStart().length === 0 ||
              description.trimStart().length === 0
            }
            onClick={() => saveNote()}
          >
            <span className="button-text">Save Note</span>
            <CheckOutlined className="check-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
