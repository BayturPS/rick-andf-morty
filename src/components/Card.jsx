import { useEffect, useState } from "react";

const Card = (props) => {
  const { name, status, species, image, origin, location } = props;
  const [statusColor, setStatusColor] = useState("uncnown")

  useEffect(() => {
     if (status === "Alive") {
      setStatusColor("alive");
     } else if (status === "Dead") {
      setStatusColor("dead");
     }
  },[status])

  return (
    <div className="card-container">
      <img src={image} alt="img of character" />
      <div className="info-container">
        <h1 className="name">{name}</h1>
        <div className="about-character">
          <span className={statusColor}></span>
          <p>{status}</p>
          <span>-</span>
          <p>{species}</p>
        </div>
        <h4>Last known location:</h4>
        <h3>{origin.name}</h3>
        <h4>First seen in:</h4>
        <h3>{location.name}</h3>
      </div>
    </div>
  );
};
export default Card;
