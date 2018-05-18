import axios from "axios";

export default {
  getUser: function() {
    return axios.get("/api/user/view");
  },
  login: function(user) {
  	return axios.post("/login", user)
  },
  updateUser: function(user) {
    return axios.post("/api/user/edit", user);
  }
};
