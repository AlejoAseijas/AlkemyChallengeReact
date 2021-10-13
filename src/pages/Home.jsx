import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Summary from "../components/Summary";
import "../styles/home.scss";
function Home() {
  const heroes = JSON.parse(localStorage.getItem("team"));
  return (
    <div className="container">
      <div className="row">
        <div className="container-md">
          <Header></Header>
          <h1 className="fs-1 text-center">My team</h1>
        </div>
      </div>
      <div className="row">
        <div className="container-auto">
          {heroes === null ? <></> : <Summary data={heroes} />}
          <div id="gridResults">
            {heroes === null ? (
              <></>
            ) : (
              heroes.map((data) => {
                return (
                  <div className="container auto">
                    <Cards
                      name={data.name}
                      image={data.image.url}
                      powerstats={data.powerstats}
                      key={data.id}
                      appearance={data.appearance}
                      biography={data.biography}
                      work={data.work}
                      id={data.id}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
