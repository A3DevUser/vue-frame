import axios from "axios";

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

export const FetchDropValData = (FormId,GridId,ColId,data) =>{
    return (dispatch)=>{
        dispatch(DropValReq());
        axios.get(`http://localhost:8080/VF/dropdown?formId=${FormId}&colId=${ColId}&gridId=${GridId}&jsonDrop=${data}`)
        .then((res)=>{
            dispatch(DropValSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(DropValErr(err))
        })
    }

}


