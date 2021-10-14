import React from "react";
//import "../styles/progressBar.scss";
function Summary(heroes) {
  let power = 0;
  let intelligence = 0;
  let combat = 0;
  let durability = 0;
  let speed = 0;
  let strength = 0;
  let averageWeight = 0;
  let averageHeight = 0;

  for (let d of heroes.data) {
    power += parseInt(d.powerstats.power);
    intelligence += parseInt(d.powerstats.intelligence);
    combat += parseInt(d.powerstats.combat);
    durability += parseInt(d.powerstats.durability);
    speed += parseInt(d.powerstats.speed);
    strength += parseInt(d.powerstats.strength);
    averageWeight += parseInt(d.appearance.weight[1]);
    averageHeight += parseInt(d.appearance.height[1]);
  }

  let powerProgress = Math.round((power * 100) / 600);
  let intelligenceProgress = Math.round((intelligence * 100) / 600);
  let combatProgress = Math.round((combat * 100) / 600);
  let durabilityProgress = Math.round((durability * 100) / 600);
  let speedProgress = Math.round((speed * 100) / 600);
  let strengthProgress = Math.round((strength * 100) / 600);

  return (
    <>
      <div className="container border">
        <div className="row mb-2">
          <div className="col">
            <h6 className="text-center">TOTAL COMBAT</h6>
            <p className="text-center"> {combat} </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${combatProgress}%` }}
                aria-valuenow={combatProgress}
                aria-valuemin="0"
                aria-valuemax="600"
              ></div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <h6 className="text-center">TOTAL POWER</h6>
            <p className="text-center"> {power} </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${powerProgress}%` }}
                aria-valuenow={powerProgress}
                aria-valuemin="0"
                aria-valuemax="600"
              ></div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <h6 className="text-center">TOTAL DURABILITY</h6>
            <p className="text-center"> {durability} </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${durabilityProgress}%` }}
                aria-valuenow={durabilityProgress}
                aria-valuemin="0"
                aria-valuemax="600"
              ></div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <h6 className="text-center">TOTAL SPEED</h6>
            <p className="text-center"> {speed} </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${speedProgress}%` }}
                aria-valuenow={speedProgress}
                aria-valuemin="0"
                aria-valuemax="600"
              ></div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <h6 className="text-center">TOTAL STRENGTH</h6>
            <p className="text-center"> {strength} </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${strengthProgress}%` }}
                aria-valuenow={speedProgress}
                aria-valuemin="0"
                aria-valuemax="600"
              ></div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <h6 className="text-center">TOTAL INTELLIGENCE</h6>
            <p className="text-center"> {intelligence} </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${intelligenceProgress}%` }}
                aria-valuenow={intelligenceProgress}
                aria-valuemin="0"
                aria-valuemax="600"
              ></div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <h6 className="text-center fs-5">Average Height</h6>
            <h6 className="text-center fs-6 fw-bold">
              {" "}
              {averageHeight / heroes.data.length + " cm"}
            </h6>
          </div>
          <div className="col">
            <h6 className="text-center fs-5">Average Weight</h6>
            <h6 className="text-center fs-6 fw-bold">
              {averageWeight / heroes.data.length + " kg"}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
