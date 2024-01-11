export default function Card(props) {
  function click() {
    /*const imgAtt = document.getElementById("imageproperty")
    imgAtt.remove()*/
    const divAtt = document.getElementById("imgdiv");
    const node = document.createElement("p");
    const textnode = document.createTextNode("Lovely huh :)");
    node.appendChild(textnode);
    divAtt.appendChild(node);
  }

  return (
    <>
      <div className="card">
        <div id="imgdiv">
          <img
            onClick={click}
            onMouseOver={() => props.change(props.id)}
            src={props.image}
            id="imageproperty"
            className="card--img"
          />
        </div>
        <div>
          <h3 className="card--location">
            <img src="../images/path.png" />
            {props.location}
            <a href={props.googleMapsUrl} className="card--map">
              View on Google Maps
            </a>
          </h3>
          <h1 className="card--title">{props.title}</h1>
          <h2 className="card--date">
            {props.startDate} - {props.endDate}
          </h2>
          <p className="card--description">{props.description}</p>
        </div>
      </div>
    </>
  );
}
