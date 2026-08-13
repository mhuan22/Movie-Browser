import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavourites = localStorage.getItem("favourites");

        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    const addToFavourites = (movie) => {
        setFavourites((prev) => [...prev, movie]);
    };

    const removeFromFavourites = (movieID) => {
        setFavourites((prev) => prev.filter(movie => movie.id !== movieID));
    };

    const isFavourite = (movieID) => {
        return favourites.some(movie => movie.id === movieID);
    };

    const value ={
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    };

    return (
        <MovieContext.Provider value={value}>
            { children }
        </MovieContext.Provider>
    );
}