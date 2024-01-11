import Skirb from "./components/skirb";
import React from "react";
import Form from "./components/form";
import "./App.css";

function App() {
  const [i, setImage] = React.useState({
    n: 1,
    image:
      "https://3.bp.blogspot.com/-GoQovaKUiBA/VZ0F1OhWAUI/AAAAAAAAIIU/nqM79OP3r-A/s1600/IMG_20150708_110224.jpg",
  });

  const [formData, setFormData] = React.useState({
    checked: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function clearState() {
    setFormData((prevData) => {
      return {
        ...prevData,
        checked: false,
      };
    });
  }

  function setSmth() {
    clearState();
    setImage((prev) => {
      if (prev.n % 2 === 0) {
        return {
          n: prev.n + 1,
          image:
            "https://media.cntraveler.com/photos/63483e15ef943eff59de603a/3:2/w_3000,h_2000,c_limit/New%20York%20City_GettyImages-1347979016.jpg",
        };
      } else if (prev.n % 3 === 0) {
        return {
          n: prev.n + 1,
          image:
            "https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg",
        };
      } else {
        return {
          n: prev.n + 1,
          image:
            "https://media.cntraveler.com/photos/60341fbad7bd3b27823c9db2/4:3/w_4624,h_3468,c_limit/Tokyo-2021-GettyImages-1208124099.jpg",
        };
      }
    });
  }

  return (
    <>
      <Skirb img={i.image} onHandle={setSmth} />
      <Form data={formData} handle={handleChange} />
    </>
  );
}

export default App;
