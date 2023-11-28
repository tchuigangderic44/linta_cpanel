import { PayloadAction } from "@reduxjs/toolkit";
import User from "../../modules/usersModule/model/user";
import { AuthState, initialState } from "./authentication.slice"
import { authStorage } from "../../modules/authModule/helpers/auth";

export const authReducers = {
    setToken: (state: AuthState, action: PayloadAction<string>) => {
        state.token = action.payload;
    },
    setCurrentUser: (state: AuthState, action: PayloadAction<User>) => {
        state.currentUser = action.payload;
    },
    toogleConnect: (state: AuthState) => {
        state.connected = !state.connected;
    },
    setAuthState: (state: AuthState, action: PayloadAction<AuthState>) => {
        state = action.payload;
    },
    userLogOut: (state: AuthState) => {
        Object.assign(state, { ...initialState })
        authStorage.removeStoreAuthState();
    },
    clearFailAdminLogin(state: AuthState) {
        state.errorMessage = initialState.errorMessage;
        state.signInStatus = initialState.signInStatus;
    },
    clearFailUserInfos(state: AuthState) {
        state.errorMessage = initialState.errorMessage;
        state.userInfosStatus = initialState.userInfosStatus;
    }
}