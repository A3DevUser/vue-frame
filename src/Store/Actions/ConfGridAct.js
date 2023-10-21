import axios from "axios";

const ConfGridReq = (val) =>{
    return {
        type : 'ConfGridReq',
        payload : val
    }
};

const ConfGridSuccess = (val) =>{
    return {
        type : 'ConfGridSuccess',
        payload : val
    }
};

const ConfGridErr = (val) =>{
    return {
        type : 'ConfGridErr',
        payload : val
    }
};

export const FetchConfGridData = (id) =>{
    return (dispatch)=>{
        dispatch(ConfGridReq());
        axios.get(`http://localhost:8080/VF/getConfSGrid?formId=${id}`)
        .then((res)=>{
            dispatch(ConfGridSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ConfGridErr(err))
        })
    }

}


