import axios from "axios";

export default {
  getUser: function() {
    return axios.get("/api/user/view");
  },
  updateUser: function(user) {
    return axios.post("/api/user/edit", user);
  }
};
