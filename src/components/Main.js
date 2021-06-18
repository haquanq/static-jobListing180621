import Jobs from "./Jobs";
import "./main.css";
import React, { useState } from "react";

const Main = () => {
  const [inUse, setUse] = useState(false);
  const [tags, setTags] = useState([]);
  const getTags = (e) => {
    if (!tags.includes(e.target.value)) {
      setTags((tags) => [...tags, e.target.value]);
      if (!inUse) {
        setUse((inUse) => !inUse);
      }
    }
  };
  const delTags = (e) => {
    setTags(tags.filter((item) => item !== e.target.getAttribute("value")));
    if (tags.length === 1) {
      setUse((inUse) => !inUse);
    }
  };
  const clearTags = () => {
    setTags([]);
    setUse((inUse) => !inUse);
  };
  return (
    <div className="body_background">
      <header>
        <img src={"./images/bg-header-desktop.svg"} alt="" />
      </header>
      <main>
        <div
          style={!inUse ? { display: "none" } : { display: "flex" }}
          className="filter_container"
        >
          <div className="filter_tags">
            {tags.map((value, index) => (
              <div key={index} className="tag_container">
                <p className="tag_value">{value}</p>
                <div value={value} onClick={delTags} className="close_btn">
                  <span></span>
                  <span></span>
                </div>
              </div>
            ))}
          </div>
          <button onClick={clearTags}>
            Clear
            <span></span>
          </button>
        </div>
        <div>
          <Jobs tag={tags} get={getTags} />
        </div>
      </main>
    </div>
  );
};

export default Main;
