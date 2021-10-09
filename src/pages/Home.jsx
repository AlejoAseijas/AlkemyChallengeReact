import React from "react";
import Header from "../components/Header";
import CardFront from "../components/CardFront";
function Home() {
  const heroes = JSON.parse(localStorage.getItem("team"));

  return (
    <>
      <Header></Header>
      <h1>My team</h1>
      <h2>The team can only consist of 3 heroes and 3 villains</h2>
      <div className="gridResults">
        {heroes === null ? (
          <> </>
        ) : (
          heroes.map((data) => (
            <CardFront
              img={data.image.url}
              name={data.name}
              powerStats={data.powerstats}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Home;
