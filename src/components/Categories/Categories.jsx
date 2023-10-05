import React, { useState } from "react";
import "./categories.scss";
import {
  RightOutlined,
  PlusOutlined,
  FolderFilled,
  CloseOutlined,
  CheckOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { generateRandomId } from "../../utils/generateRandomId";
import { message } from "antd";

const Categories = ({
  categories,
  setCategories,
  selectedCategory,
  setSelectedCategory,
  setSelectedNote,
  setCreateNoteClicked,
}) => {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [newItem, setNewItem] = useState("");

  const handleTickClick = () => {
    const exists = categories.find(
      (item) => item.categoryName.toLowerCase() === newItem.toLowerCase()
    );

    if (exists) {
      return message.error("Can't create same Category");
    }

    setCategories((prev) => [
      ...prev,
      { id: generateRandomId(), categoryName: newItem, notes: [] },
    ]);
    setButtonIsClicked(false);
    setNewItem("");
  };

  const handleCategoryClick = (item) => {
    setSelectedCategory((prev) => (prev?.id !== item.id ? item : ""));
    setSelectedNote(false);
    setCreateNoteClicked(false);
  };

  return (
    <div className="main-category">
      <div className="createbtn">
        {!buttonIsClicked ? (
          <button
            className="create-category"
            onClick={() => setButtonIsClicked(true)}
          >
            <span className="button-text">Create Category</span>
            <PlusOutlined className="plus-icon" />
          </button>
        ) : (
          <div className="add-category">
            <input
              type="text"
              placeholder="Add a title..."
              onChange={(e) => setNewItem(e.target.value)}
              value={newItem}
            />
            <button
              className="check-button"
              disabled={newItem.trimStart().length === 0}
              onClick={() => handleTickClick()}
            >
              <CheckOutlined />
            </button>
            <button
              className="close-button"
              onClick={() => {
                setButtonIsClicked(false);
                setNewItem("");
              }}
            >
              <CloseOutlined />
            </button>
          </div>
        )}
      </div>
      <div className="categories">
        {categories.map((item) => {
          return (
            <div
              key={item.id}
              className={`category ${
                selectedCategory?.id === item.id ? "activeCategory" : ""
              }`}
              onClick={() => handleCategoryClick(item)}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="category-folder">
                <FolderFilled
                  classID="filled-folder"
                  style={{ fontSize: "18px" }}
                />
                <h2>{`${item.categoryName} (${item.notes.length})`}</h2>
              </div>
              <RightOutlined className="right-arrow" />
              <DownOutlined className="down-arrow" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
