export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7c35951548d4e2cf04aadd04c5e7c872&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };