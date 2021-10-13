import React from "react";

function CardFront({ name, image, powerstats, setFlipped, id }) {
  function deleteHeroe(e) {
    e.preventDefault();
    const team = JSON.parse(localStorage.getItem("team"));
    const newTeam = team.filter((obj) => obj.id !== e.target.dataset.id);
    localStorage.setItem("team", JSON.stringify(newTeam));
  }

  return (
    <div className="m-2 card">
      <img src={image} className="w-auto" alt="..." />
      <div className="card-body">
        <div className="card-title">
          <h3 className="text-center"> {name} </h3>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"> PowerStats </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col"> Combat </th>
              <th scope="col"> {powerstats.combat} </th>
            </tr>
            <tr>
              <th scope="col">Durability</th>
              <th scope="col">{powerstats.durability}</th>
            </tr>
            <tr>
              <th scope="col">Intelligence</th>
              <th scope="col"> {powerstats.intelligence} </th>
            </tr>
            <tr>
              <th scope="col">Power</th>
              <th scope="col"> {powerstats.power} </th>
            </tr>
            <tr>
              <th scope="col">Speed</th>
              <th scope="col"> {powerstats.speed} </th>
            </tr>
            <tr>
              <th scope="col">Strength</th>
              <th scope="col"> {powerstats.strength} </th>
            </tr>
          </tbody>
        </table>
        <footer className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setFlipped(false)}
          >
            Detail
          </button>
          <button
            type="button"
            className="btn btn-danger"
            data-id={id}
            onClick={deleteHeroe}
          >
            Delete
          </button>
        </footer>
      </div>
    </div>
  );
}

export default CardFront;
