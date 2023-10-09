import Api from "./APi";

export default {
    show(id){
        return Api().get(`v1/maintenace/getbyid/${id}`);
    },
    create(data){
        return Api().post("v1/maintenace/create", data);
    },
    update(id, data){
        return Api().put(`v1/maintenace/update/${id}`, data);
    },
    delete(id){
        return Api().delete(`v1/maintenace/delete/${id}`);
    }
}
