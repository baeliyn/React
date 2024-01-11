export default function form(props) {
  return (
    <div>
      <label>Do you Know Here</label>
      <br />
      <input
        type="checkbox"
        id="isGood"
        checked={props.data.checked}
        onChange={props.handle}
        name="checked"
      />
      <label htmlFor="isGood"> yes</label>
      {props.data.checked ? <div>You know!</div> : <div>You don't know...</div>}
    </div>
  );
}
