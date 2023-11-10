import axios from "axios";
import { DropDownVal } from "./GeneralStates";

const DropValReq = (val) =>{
    return {
        type : 'DropValReq',
        payload : val
    }
};

const DropValSuccess = (val) =>{
    return {
        type : 'DropValSuccess',
        payload : val
    }
};

const DropValErr = (val) =>{
    return {
        type : 'DropValErr',
        payload : val
    }
};

let dataObj = {}
export const FetchDropValData = (FormId,GridId,ColId,JSON) =>{
    return (dispatch)=>{
        dispatch(DropValReq());
        axios.get(`http://localhost:8080/VF/dropdown?formId=${FormId}&colId=${ColId}&gridId=${GridId}&jsonDrop=${JSON}`)
        .then((res)=>{
            dispatch(DropValSuccess(res.data))
            dataObj = {...dataObj,[ColId] : res.data}
            dispatch(DropDownVal(dataObj))
        })
        .catch((err)=>{
            dispatch(DropValErr(err))
        })
    }

}


