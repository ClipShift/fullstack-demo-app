import axios from "axios";

const USER_LIST_API = "http://localhost:8080/api/users";

export class UserService {
    getUsers() {
        return axios.get(USER_LIST_API);
    }
    createUser(user){
        return axios.post(USER_LIST_API, user)
    }
    viewUser(id){
        return axios.get(USER_LIST_API + "/" + id)
    }
    editUser(id){
        return axios.put(USER_LIST_API, + "/" + id)
    }
}
