export let movies = [{
    id: 0,
    name: "밀양",
    score: 5
},{
    id: 1,
    name: "복수는 나의 것",
    score: 5
},{
    id: 2,
    name: "괴물",
    score: 5
},{
    id: 3,
    name: "매그놀리아",
    score: 5
},{
    id: 4,
    name: "기생충",
    score: 4
}];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id ===id);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !==id);
    if(movies.length>cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length+1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};