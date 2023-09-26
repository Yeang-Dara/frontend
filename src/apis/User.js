import Api from "./APi";

export default{

      register(form) {
        return Api().post("/register", form);
      },
    
      login(form) {
        return Api().post("/login", form);
      },
      logout() {
        return Api().post("/logout");
      },
      list(){
        return Api().get("/v1/user/all");
      },
      create(data) {
        return Api().post("/v1/user/adduser", data);
      },
      update(id, data) {
          return Api().put(`/v1/user/updateuser/${id}`,data);
      },
      delete(id) {
        return Api().delete(`/v1/user/deleteuser/${id}`, id);
      },
      auth() {
        return Api().get("/user");
      },
    
}