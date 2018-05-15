import axios from "axios";

export default {
  // Gets all books
  getWatchList: function() {
    return axios.get("/api/watchlist");
  },
  // Gets the book with the given id
  getMovie: function(id) {
    return axios.get("/api/watchlist/" + id);
  },
  // Deletes the book with the given id
  deleteMovie: function(id) {
    return axios.delete("/api/watchlist/" + id);
  },
  // Saves a book to the database
  addMovie: function(movieData) {
    return axios.post("/api/watchlist", movieData);
  }
};
