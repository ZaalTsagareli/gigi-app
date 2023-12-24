import "./pic.css";

function Picture(props) {
  return (
    <div className="pic">
      <img className="pic-child" src={props.url} />
      <p>{props.title}</p>
    </div>
  );
}

export default Picture;
