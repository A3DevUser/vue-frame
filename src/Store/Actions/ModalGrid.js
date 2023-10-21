import axios from "axios";

const ModalGridReq = (val) =>{
    return {
        type : 'ModalGridReq',
        payload : val
    }
};

const ModalGridSuccess = (val) =>{
    return {
        type : 'ModalGridSuccess',
        payload : val
    }
};

const ModalGridErr = (val) =>{
    return {
        type : 'ModalGridErr',
        payload : val
    }
};

export const FetchModalGridData = (id) =>{
    return (dispatch)=>{
        dispatch(ModalGridReq());
        axios.get(`http://localhost:8080/VF/getByGrid?formId=${id}`)
        .then((res)=>{
            dispatch(ModalGridSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ModalGridErr(err))
        })
    }

}


