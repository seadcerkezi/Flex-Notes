import React from "react";
import "./noteHeader.scss";
import { CloseOutlined } from "@ant-design/icons";

const NoteHeader = ({ setSelectedNote, setSelectedCategory }) => {
  return (
    <div className="head">
      <h4>Your Notes</h4>
      <CloseOutlined
        className="close-head"
        onClick={() => {
          setSelectedNote(false);
          setSelectedCategory(false);
        }}
      />
    </div>
  );
};

export default NoteHeader;
