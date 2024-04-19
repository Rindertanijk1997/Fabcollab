import axios from 'axios';
import { create } from 'zustand';

const useStore = create((set) => ({
  movie: null,
  searchResults: [],
  setMovie: (movieData) => set({ movie: movieData }),
  setSearchResults: (results) => set({ searchResults: results }),

  fetchMovie: (movieId) => {
    axios.get(`http://www.omdbapi.com/?apikey=be1d2151&i=${movieId}`)
      .then(response => {
        set({ movie: response.data }); // Uppdaterar store med den nya filmen
      })
      .catch(error => console.log('Error:', error));
  },

  searchMovies: (searchTerm) => {
    const apiKey = 'be1d2151';
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;

    axios.get(url)
      .then(response => {
        if (response.data.Search) {
          set({ searchResults: response.data.Search });
        }
      })
      .catch(error => console.error('Error:', error));
  },
}));

export default useStore;