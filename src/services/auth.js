
import api from "./api";

export function register(user) {

    api.post('/accounts/register', user)

}

