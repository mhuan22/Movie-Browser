import MovieCard from "../components/MovieCard";
import {useState} from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2014-10-24", url: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg"},
        {id: 2, title: "Inception", release_date: "2010-07-16", url: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"},
        {id: 3, title: "The Dark Knight", release_date: "2008-07-18", url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
        {id: 4, title: "Interstellar", release_date: "2014-11-07", url: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"},
        {id: 5, title: "The Matrix", release_date: "1999-03-31", url: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert("You searched for: " + searchQuery);
    }

    return (
        <div className="home">
            <form onSubmit={ handleSearch } className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map(
                    (movie) => 
                            <MovieCard movie={movie} key={movie.id} />
                    )}
            </div>
        </div>
    );
}

export default Home;