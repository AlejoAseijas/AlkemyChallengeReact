import React, { useState } from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import ReactCardFlip from "react-card-flip";

function Card({ name, image, powerstats, appearance, biography, work, id }) {
  const [flip, setFlipped] = useState(true);

  return (
    <ReactCardFlip isFlipped={!flip} flipDirection="vertical">
      <CardFront
        name={name}
        image={image}
        powerstats={powerstats}
        setFlipped={setFlipped}
        id={id}
      />
      <CardBack
        appearance={appearance}
        biography={biography}
        image={image}
        work={work}
        name={name}
        setFlipped={setFlipped}
      />
    </ReactCardFlip>
  );
}
export default Card;
