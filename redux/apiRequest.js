import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "./userSlice";


const host = 'http://localhost:9000'

export const  loginUser = async (user,dispatch,navigation) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post(`${host}/v1/user/login`,user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFail());
    }
}