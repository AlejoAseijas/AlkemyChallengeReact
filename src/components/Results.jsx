/* eslint-disable default-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../styles/card.scss";
let heroeid = [];
let heroesSelected = 0;
let badSelected = 0;

function Results(heroe) {
  const [team, setTeam] = useState(6);
  function handlerClick(e) {
    e.preventDefault();
    if (heroeid.length <= 5) {
      switch (heroe.dataHeroe.biography.alignment) {
        case "good":
          if (heroesSelected <= 2) {
            heroeid.push(heroe.dataHeroe);
            heroesSelected = heroesSelected + 1;
            setTeam(team - 1);
          } else {
            alert("Full heroes");
          }
          break;
        case "bad":
          if (badSelected <= 2) {
            heroeid.push(heroe.dataHeroe);
            badSelected = badSelected + 1;
          } else {
            alert("Full bad");
          }
          break;
      }
    } else {
      alert("Full Team");
    }
    localStorage.setItem("team", JSON.stringify(heroeid));
  }

  return (
    <div className="card">
      <img src={heroe.dataHeroe.image.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{heroe.dataHeroe.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {heroe.dataHeroe.biography.alignment}
        </li>
      </ul>
      <div className="card-body">
        <button
          type="button"
          className="btn btn-primary"
          data-id={heroe.dataHeroe.id}
          onClick={handlerClick}
        >
          Add your team
        </button>
      </div>
    </div>
  );
}

export default Results;
