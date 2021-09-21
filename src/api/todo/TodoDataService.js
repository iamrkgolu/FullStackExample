import axios from "axios";
class TodoDataService{
    executeTodoDataService(name){
        return axios.get(`http://localhost:8080/user/${name}/todo`)
    }
    deleteTodos(name,id){
        return axios.delete(`http://localhost:8080/user/${name}/todo/${id}`)
    }
}export default new TodoDataService();