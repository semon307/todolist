import {Dispatch} from "redux";
import {authAPI} from "../DAL/todolists-api";
import {setIsLoggedInAC} from "./AuthReducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}
const slice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setAppErrorAC(state, action: PayloadAction<{error: string | null}>){
            state.error = action.payload.error
        },
        setAppStatusAC(state, action: PayloadAction<{status: RequestStatusType}>){
            state.status = action.payload.status
        },
        setInitializedAC(state, action: PayloadAction<{status: boolean}>){
            state.isInitialized = action.payload.status
        },

    }
})
export const appReducer = slice.reducer;
export const {setAppErrorAC, setAppStatusAC, setInitializedAC} = slice.actions


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export const authMeTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC({value: true}))
            }
        })
            .finally(() => dispatch(setInitializedAC({status: true})))
    }
}
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetInitializeType = ReturnType<typeof setInitializedAC>


