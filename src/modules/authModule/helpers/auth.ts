import { LocalStorage } from "../../../services/localStorage/localStorage.service";
import { AuthState } from "../../../store/authentication/authentication.slice";


const authStorage = {
    getBearerAccessToken() {
        console.log(LocalStorage.getItem('token'));
        return LocalStorage.getItem('token');
    },

    localStoreAuthState(authState: AuthState) {
        LocalStorage.setItem('authState', authState);
    },

    getStoreAuthState() {
        return LocalStorage.getItem('authState') as AuthState;
    }
    ,
    removeStoreAuthState() {
        return LocalStorage.removeItem('authState');
    },
    setBearerAccessToken(token: string) {
        console.log(token);
        LocalStorage.setItem('token', token);
    }
}



export {authStorage};