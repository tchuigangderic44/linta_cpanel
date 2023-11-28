import {
    createSlice
} from "@reduxjs/toolkit";


import Admin from '../../modules/usersModule/model/admin'
import { authReducers } from "./authentication.actions";
import { adminLogin, userInfos, userLogOutApi } from "./authentication.repository";
import { ErrorResponseApi } from "../../utils/constants/types";
import { getErrorResponse } from "../../utils/helpers/functions";
import { authStorage } from "../../modules/authModule/helpers/auth";
import { STATUS } from "../../utils/constants/enums";
import { setAuthorizationToInterceptor } from "../../services/api/api.service";


export type AuthState = {
    currentUser?: Admin,
    connected: boolean,
    token: string,
    error?: Error,
    errorMessage?: ErrorResponseApi,

    signInStatus: STATUS,
    userInfosStatus: STATUS,
    userLogoutStatus: STATUS,
}

const storedAuthState = authStorage.getStoreAuthState();


const initialState: AuthState = {
    currentUser: undefined,
    connected: false,
    token: "",
    error: undefined,
    errorMessage: undefined,

    signInStatus: STATUS.IDLE,
    userInfosStatus: STATUS.IDLE,
    userLogoutStatus: STATUS.IDLE,
};



export const authSlice = createSlice({
    name: "auth",
    initialState: storedAuthState ? storedAuthState : initialState,
    reducers: authReducers,
    extraReducers(builder) {

        //adminLogin
        builder.addCase(adminLogin.pending, (state: AuthState) => {
            state.signInStatus = STATUS.LOADING;
        },),
            builder.addCase(adminLogin.fulfilled, (state: AuthState, action: any) => {
                state.signInStatus = STATUS.SUCCESS;
                state.token = action.payload.token;
                state.connected = true;
                authStorage.localStoreAuthState(state);
                setAuthorizationToInterceptor();
                clearFailAdminLogin();
            },),
            builder.addCase(adminLogin.rejected, (state: AuthState, action: any) => {
                state.errorMessage = getErrorResponse(action.payload)
                state.signInStatus = STATUS.FAIL;
            },),


            //userInfos
            builder.addCase(userInfos.pending, (state: AuthState) => {
                state.userInfosStatus = STATUS.LOADING;
            },),
            builder.addCase(userInfos.fulfilled, (state: AuthState, action: any) => {
                state.userInfosStatus = STATUS.SUCCESS;
                state.currentUser = action.payload;
                authStorage.localStoreAuthState(state);
            },),
            builder.addCase(userInfos.rejected, (state: AuthState, action: any) => {
                state.errorMessage = getErrorResponse(action.payload)
                state.userInfosStatus = STATUS.FAIL;
            },),


            //userInfos
            builder.addCase(userLogOutApi.pending, (state: AuthState) => {
                state.userLogoutStatus = STATUS.LOADING;
            },),
            builder.addCase(userLogOutApi.fulfilled, (state: AuthState) => {
                state.userLogoutStatus = STATUS.SUCCESS;
                Object.assign(state, { ...initialState })
                authStorage.removeStoreAuthState();
            },),
            builder.addCase(userLogOutApi.rejected, (state: AuthState, action: any) => {
                state.errorMessage = getErrorResponse(action.payload)
                state.userLogoutStatus = STATUS.FAIL;
            },)
    },
});

export const {
    setToken,
    setCurrentUser,
    toogleConnect,
    setAuthState,
    userLogOut,
    clearFailAdminLogin
} = authSlice.actions;

export { initialState };

export default authSlice.reducer;