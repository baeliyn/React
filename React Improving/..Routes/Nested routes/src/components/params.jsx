import React from "react";
import { useParams } from "react-router-dom";

function Params() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    setInterval(function () {
      fetch(`/api/vans/${params.id}`)
        .then((res) => res.json())
        .then((data) => setVan(data.vans));
    }, 250);
  }, [params.id]);
  return <>{van ? <div>{van.id}</div> : <h2>loading...</h2>}</>;
}

export default Params;
