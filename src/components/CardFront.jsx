import React from 'react'
import '../styles/card.scss'

function CardFront({img,name,powerStats}) {
    return (
        <div className="card">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
          <div className="card-body">
              <p> Combat = {powerStats.combat} </p>
              <p> Durability = {powerStats.durability} </p>
              <p> Intelligence = {powerStats.intelligence} </p>
              <p> Power = {powerStats.power} </p>
              <p> Speed = {powerStats.speed} </p>
              <p> Strength = {powerStats.strength} </p>
          <button type="button" className="btn btn-primary">Detalle</button>
          <button type="button" className="btn btn-primary">Eliminar</button>
          </div>
        </div>
    )
}

export default CardFront
