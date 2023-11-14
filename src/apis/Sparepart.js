import Api from "./APi";
export default{
    list(){
        return Api().get("v1/spareparts/getdata");
    },
    list1(){
        return Api().get("v1/spareparts/getsparepart");
    },
    create(data){
        return Api().post("v1/spareparts/create", data);
    },
    update(id,data){
        return Api().put(`v1/spareparts/update/${id}`, data);
    },
    delete(id){
        return Api().delete(`v1/spareparts/delete/${id}`);
    }
}