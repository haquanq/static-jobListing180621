const Tags = (props) => {
  return (
    <div
      style={!props.inUse ? { display: "none" } : { display: "flex" }}
      className="filter_container"
    >
      <div className="filter_tags">
        {props.tags.map((value, index) => (
          <div key={index} className="tag_container">
            <p className="tag_value">{value}</p>
            <div value={value} onClick={props.delTags} className="close_btn">
              <span></span>
              <span></span>
            </div>
          </div>
        ))}
      </div>
      <button onClick={props.clearTags}>
        Clear
        <span></span>
      </button>
    </div>
  );
};

export default Tags;
