import Api from './APi';

export default{
    show(id){
        return Api.get(`/v1/stock/getstock/${id}`);
    },
    create(data){
        return Api().post('/v1/stock/addstock', data);
    },
    update(id, data){
        return Api().put(`/v1/stock/updatestock/${id}`, data);
    },
    delete(id){
        return Api().delete(`/v1/stock/deletestock/${id}`);
    }
}