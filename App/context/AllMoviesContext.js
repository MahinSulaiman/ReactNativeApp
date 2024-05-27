import React,{Children, createContext, useContext,useState} from "react";

export const AllMoviesContext=createContext();

export const AllMoviesProvider = ({ children }) => {
    const [allMovies, setAllMovies] = useState([]);

    return (
        <AllMoviesContext.Provider value={{ allMovies, setAllMovies }}>
            {children}
        </AllMoviesContext.Provider>
    );
};
