import axios from 'axios';
import { create } from 'zustand';

const useStore = create((set) => ({
  movie: null,
  searchResults: [],
  setMovie: (movieData) => set({ movie: movieData }),
  setSearchResults: (results) => set({ searchResults: results }),

  // Flyttat från Header.jsx
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