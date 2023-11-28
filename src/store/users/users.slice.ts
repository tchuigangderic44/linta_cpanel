import {
    createSlice
} from "@reduxjs/toolkit";


import Admin from '../../modules/usersModule/model/admin'
import { reducers } from "./users.actions";
import { ErrorResponseApi, TokenPage } from "../../utils/constants/types";
import { driverNewRegistrations, driverRegister, newAdmi, userAll } from "./users.repository";
import { getErrorResponse } from "../../utils/helpers/functions";
import { STATUS } from "../../utils/constants/enums";
import User from "../../modules/usersModule/model/user";


export type UsersState = {
    error?: Error,
    errorMessage?: ErrorResponseApi,



    createUserstatus: STATUS,


    users?: User[],
    userListstatus: STATUS,
    nextTokenPageUserList?: string,
    refreshedUserList: boolean,

    requestsRegisters?: any[],
    requestsRegistersStatus: STATUS,
    nextTokenPageRequestsRegisters?: string,
    refreshedRequestsRegisters: boolean,

}

const initialState: UsersState = {
    users: [],
    error: undefined,
    errorMessage: undefined,
    refreshedUserList: false,

    createUserstatus: STATUS.IDLE,

    userListstatus: STATUS.IDLE,
    nextTokenPageUserList: undefined,

    requestsRegistersStatus: STATUS.IDLE,
    requestsRegisters: [],
    nextTokenPageRequestsRegisters: undefined,
    refreshedRequestsRegisters: false,
};


export const authSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: reducers,
    extraReducers(builder) {

        //driverRegister
        builder.addCase(driverRegister.pending, (state: UsersState) => {
            state.createUserstatus = STATUS.LOADING;
        },),

            builder.addCase(driverRegister.fulfilled, (state: UsersState) => {
                state.createUserstatus = STATUS.SUCCESS;
            },),
            builder.addCase(driverRegister.rejected, (state: UsersState, action: any) => {
                state.errorMessage = getErrorResponse(action.payload);
                state.createUserstatus = STATUS.FAIL;
            },),

            //newAdmi
            builder.addCase(newAdmi.pending, (state: UsersState) => {
                state.createUserstatus = STATUS.LOADING;
            },),
            builder.addCase(newAdmi.fulfilled, (state: UsersState) => {
                state.createUserstatus = STATUS.SUCCESS;
                state.errorMessage = undefined;
            },),
            builder.addCase(newAdmi.rejected, (state: UsersState, action: any) => {
                state.errorMessage = getErrorResponse(action.payload)
                state.createUserstatus = STATUS.FAIL;
            },),

            //userAll
            builder.addCase(userAll.pending, (state: UsersState) => {
                state.userListstatus = STATUS.LOADING;
            },),
            builder.addCase(userAll.fulfilled, (state: UsersState, action: any) => {
                state.userListstatus = STATUS.SUCCESS;
                state.errorMessage = undefined;
                // state.users = action.payload.results;
                // debugger;
                state.users = [...state.users!, ...action.payload.results];
                state.nextTokenPageUserList = action.payload.nextPageToken;
                state.refreshedRequestsRegisters = action.payload.refreshed;
                // state.userListToken.push({
                //     page: state.userListToken.length + 1,
                //     token: action.payload.nextPageToken
                // })
            },),
            builder.addCase(userAll.rejected, (state: UsersState, action: any) => {
                state.errorMessage = getErrorResponse(action.payload)
                state.userListstatus = STATUS.FAIL;
            },),



            //driverNewRegistrations
            builder.addCase(driverNewRegistrations.pending, (state: UsersState) => {
                state.requestsRegistersStatus = STATUS.LOADING;
            },),
            builder.addCase(driverNewRegistrations.fulfilled, (state: UsersState, action: any) => {
                state.requestsRegistersStatus = STATUS.SUCCESS;
                state.errorMessage = undefined;
                state.requestsRegisters = [...state.users!, ...action.payload.results];
                state.nextTokenPageRequestsRegisters = action.payload.nextPageToken;
                state.refreshedRequestsRegisters = action.payload.refreshed;
            },),    
            builder.addCase(driverNewRegistrations.rejected, (state: UsersState, action: any) => {
                state.errorMessage = getErrorResponse(action.payload)
                state.requestsRegistersStatus = STATUS.FAIL;
            },)
    },
});

export const {
    setUsersState,
    resetCreateUserState,
    clearUsers,
} = authSlice.actions;

export { initialState };

export default authSlice.reducer;