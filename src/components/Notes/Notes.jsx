import React, { useState } from "react";
import "./notes.scss";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

const Notes = ({
  selectedCategory,
  selectedNote,
  setSelectedNote,
  setCreateNoteClicked,
}) => {
  const [search, setSearch] = useState("");

  return (
    <div className="main-notes">
      <div className="create-notes">
        <button
          className="create-button"
          onClick={() => {
            setCreateNoteClicked(true);
            setSelectedNote(false);
          }}
        >
          <span className="button-text">Create Category</span>
          <PlusOutlined className="plus-icon" />
        </button>
        <div className="notes-input">
          <SearchOutlined />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="notes">
        {selectedCategory?.notes
          .filter((note) => {
            if (search == "") {
              return note;
            } else if (
              note.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return note;
            }
          })
          .map((item) => {
            return (
              <div
                key={item.id}
                className={`single-note ${
                  selectedNote?.id === item.id ? "activeNote" : ""
                }`}
                onClick={() => setSelectedNote(item)}
              >
                <h5 className="title">{item.title}</h5>
                <p className="paragraph">{item.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Notes;
