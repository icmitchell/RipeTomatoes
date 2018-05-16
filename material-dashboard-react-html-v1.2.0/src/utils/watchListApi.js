import axios from "axios";

export default {
  getWatchList: function() {
    return axios.get("/api/watchlist/view");
  },
  addMovie: function(movieData) {
    return axios.post("/api/watchlist/add", movieData);
  },
  editMovie: function(movieData) {
    return axios.post("/api/watchlist", movieData);
  },
  deleteMovie: function(id) {
    return axios.delete("/api/watchlist/" + id);
  }
};
