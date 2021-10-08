/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useState } from 'react'
import '../styles/card.scss'

function Results(heroe) {

const [heroes, setHeroes] = useState([])

setHeroes(...heroes+heroe)

console.log(heroes);

  function handlerClick(e){
    e.preventDefault();
    console.log(e.target.dataset);
  }

  return (
    <div className="card">
    <img src={heroe.dataHeroe.image.url} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{heroe.dataHeroe.name}</h5>
    </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{heroe.dataHeroe.biography.alignment}</li>
      </ul>
      <div className="card-body">
      <button type="button" className="btn btn-primary" data-id={heroe.dataHeroe.id} onClick={handlerClick}>Add your team</button>
      </div>
    </div>
  )
}

export default Results
