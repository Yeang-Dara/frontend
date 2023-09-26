import Api from "./APi";
export default {
    list(){
        return Api().get("/v1/using/all");
    },
    show(id){
        return Api().get(`/v1/using/getid/${id}`);
    },
    create(data){
        return Api().post("/v1/using/create", data);
    },
    update(id, data){
        return Api().put(`/v1/using/update/${id}`, data);
    },
    delete(id){
        return Api().delete(`/v1/using/delete/${id}`);
    },
    Showdata(data){
        return Api().post("/v1/using/datatable", data);
    },
    getActive(){
        return Api().get("/v1/using/active");
    },
    getNonactive(){
        return Api().get("/v1/using/nonactive");
    },
    getTotal(){
        return Api().get("/v1/using/total");
    },
    getType(){
        return Api().get("/v1/using/type");
    },
    getdata(data){
        return Api().post("/v1/using/fiterdata", data);
    },
    getData(data){
        return Api().post("/v1/using/datatable", data);
    },
    getWarranty(id){
        return Api().get(`/v1/using/warranty/${id}`);
    },
    getReport(){

        return Api().get("/v1/using/report");
    },
    getExport(){
        return Api().get("/v1/using/export");
    },
    getImport(data){
        return Api().post("/v1/using/import", data);
    }


}
