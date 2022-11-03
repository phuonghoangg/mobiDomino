import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{
        login:{
            currentUser: null,
            isFetching:false,
            error:false,
        },
        register:{
            isFetching:false,
            error:false,
            success:false
        }
    },
    reducers:{
        loginStart:(state)=>{
            state.login.isFetching=true;
        },
        loginSuccess:(state,action)=>{
            state.login.isFetching = false;
            state.login.currentUser = action.type;
        },
        loginFail:(state)=>{
            state.login.isFetching=false;
            state.login.currentUser  = null;
            state.login.error=true;
        }
    }
})

export const {loginStart,loginSuccess,loginFail} = userSlice.actions
export default userSlice.reducer