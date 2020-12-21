import React from 'react'
import './style.css'

export default function MovieCard({movie}){
    return(
        <div className="card" >
            <img className="card--image"
                 src={movie.Poster}
                 alt={movie.Poster}
            />
            <div className="card--content">
                <h3 className="card--title">{movie.Title}</h3>
                <p><small>Year:{movie.Year}</small></p>
            </div>

        </div>
    )
}