import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../services/api/api.service";
import { objectToFormData } from "../../utils/helpers/functions";

const driverRegister = createAsyncThunk('driverRegister', async (data: any, thunkAPI) => {
    try {
        const response = await apiService.post("/driver/register-intern", objectToFormData(data));
        return response.data;
    } catch (error: any) {
        throw thunkAPI.rejectWithValue(error);
    }
});

const newAdmi = createAsyncThunk('newAdmi', async (data: any, thunkAPI) => {
    try {
        const response = await apiService.post("/admin/new-admin", data);
        return response.data;
    } catch (error: any) {
        throw thunkAPI.rejectWithValue(error);
    }
});

const userAll = createAsyncThunk('userAll', async (data: any, thunkAPI) => {
    try {
        const response = await apiService.get("/user/all",data);
        return response.data;
    } catch (error: any) {
        throw thunkAPI.rejectWithValue(error);
    }
});

const driverNewRegistrations = createAsyncThunk('driverNewRegistrations', async (data: any, thunkAPI) => {
    try {
        const response = await apiService.get("/driver/new-registrations",data);
        return response.data;
    } catch (error: any) {
        throw thunkAPI.rejectWithValue(error);
    }
});


export { driverRegister, newAdmi, userAll, driverNewRegistrations }