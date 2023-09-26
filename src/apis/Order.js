import Api from "./APi";
export default {
    list(){
        return Api().get("/v1/order/all");
    },
    create(data){
        return Api().post("/v1/order/create", data);
    },
    update(id, data){
        return Api().put(`/v1/order/update/${id}`, data);
    },
    delete(id){
        return Api().delete(`/v1/order/delete/${id}`);
    },
    show(id){
        return Api().get(`/v1/order/ownorder/${id}`);
    },
    getTotal(){
        return Api().get('/v1/order/total');
    },
    deleteOrder(id){
        return Api().delete(`/v1/order/deleteorder/${id}`);	
    }


}