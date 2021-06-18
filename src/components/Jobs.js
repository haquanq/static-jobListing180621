import "./jobs.css";
import jobData from "../data.json";

const Jobs = (props) => {
  return jobData.map((value, index) => {
    const haveTags = [
      value.role,
      value.level,
      ...value.languages,
      ...value.tools,
    ];

    if (props.tag.every((e) => haveTags.indexOf(e) !== -1)) {
      return (
        <Section
          myFunc={props.get}
          key={index}
          logo={value.logo}
          company={value.company}
          new={value.new}
          featured={value.featured}
          position={value.position}
          posted={value.postedAt}
          contract={value.contract}
          location={value.location}
          role={value.role}
          level={value.level}
          languages={value.languages}
          tools={value.tools}
        />
      );
    }
    return null;
  });
};

const Section = (props, key) => {
  return (
    <section key={key.key} className="sec">
      <div
        style={props.featured ? { display: "block" } : { display: "none" }}
        id="feature"
      ></div>
      <div className="sec__left">
        <img src={props.logo} alt="" />
        <div className="sec__left__content">
          <div>
            <h4>{props.company}</h4>
            {props.new === true ? <p className="new">new!</p> : null}
            {props.featured === true ? (
              <p className="feature">featured</p>
            ) : null}
          </div>
          <h2>{props.position}</h2>
          <div>
            <p>{props.posted}</p>
            <span></span>
            <p>{props.contract}</p>
            <span></span>
            <p>{props.location}</p>
          </div>
        </div>
      </div>
      <div className="sec__right">
        <button onClick={props.myFunc} value={props.role}>
          {props.role}
        </button>
        <button onClick={props.myFunc} value={props.level}>
          {props.level}
        </button>
        {props.languages.map((name, index) => (
          <button onClick={props.myFunc} value={name} key={index}>
            {name}
          </button>
        ))}
        {props.tools.map((name, index) => (
          <button onClick={props.myFunc} value={name} key={index}>
            {name}
          </button>
        ))}
      </div>
    </section>
  );
};
export default Jobs;
