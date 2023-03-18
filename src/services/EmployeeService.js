import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://reqres.in/api/users?page=2";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}


export default new EmployeeService();