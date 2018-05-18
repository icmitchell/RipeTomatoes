import axios from "axios";

export default {
  getUser: function() {
   axios.get("/api/user/view") .then(res => {
   	return res
   });
  },
  updateUser: function(user) {
    return axios.post("/api/user/edit", user);
  }
};
