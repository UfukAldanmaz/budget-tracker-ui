import axios from "axios";

const api = axios.create(
    {
        baseURL: 'https://budget-tracker-identity-api.herokuapp.com/api/v1'
    }
)

export default api;