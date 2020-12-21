import React, {useState} from 'react'
import MovieCard from "./movieCard";


export default function SearchMovies(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const SearchMovies = async (e) => {
        e.preventDefault()
        if (query==''){
            alert("uzpildikite!")
        } else {
            setQuery('')
        }


        const url = `http://www.omdbapi.com/?s=${query}&apikey=87c07ec5`


        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setMovies(data.Search)
    }
        return (
            <>
                <form className="form" onSubmit={SearchMovies}>
                    <label className="label" htmlFor="query">Movie name</label>
                    <input className='input' type="text" name="query"
                           placeholder="Filmu paieska"
                           value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="button" type="submit">Search</button>
                </form>
                <div className="card-list">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            </>
        )

    }