import Api from "./APi";
export default{
    list(id){
        return Api().get(`v1/mainpart/getbyid/${id}`);
    },
    create(data){
        return Api().post("v1/mainpart/add", data);
    },
    update(id,data){
        return Api().put(`v1/mainpart/update/${id}`, data);
    },
    delete(id){
        return Api().delete(`v1/mainpart/delete/${id}`);
    }
}