import Jobs from "./Jobs";
import "./main.css";
import React, { useState } from "react";
import Tags from "./Tags";

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
        <Tags
          inUse={inUse}
          tags={tags}
          delTags={delTags}
          clearTags={clearTags}
        />
        <div className="joblist">
          <Jobs tag={tags} get={getTags} />
        </div>
      </main>
    </div>
  );
};

export default Main;
