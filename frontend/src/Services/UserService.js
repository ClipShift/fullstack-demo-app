import axios from 'axios';

const USER_LIST_API = "http://localhost:8080/api/users";

export class UserService {

    getUsers(){
        return axios.get(USER_LIST_API);
    }

}

