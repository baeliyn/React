export default function Skirb(props) {
  return (
    <img
      onClick={props.onHandle}
      className="img"
      src={props.img}
      alt="meaningful text"
    />
  );
}
