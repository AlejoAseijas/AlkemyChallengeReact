import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Summary from "../components/Summary";
import "../styles/home.scss";
function Home() {
  const heroes = JSON.parse(localStorage.getItem("team"));
  return (
    <>
      <Header></Header>
      <div className="container-md">
        <h1 className="fs-1 text-center">My team</h1>

        {heroes === null ? <></> : <Summary data={heroes} />}

        <div className="container-md" id="gridResults">
          {heroes === null ? (
            <></>
          ) : (
            heroes.map((data) => {
              return (
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
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
