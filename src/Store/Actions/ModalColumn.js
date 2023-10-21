import axios from "axios";

const ModalColumnReq = (val) =>{
    return {
        type : 'ModalColumnReq',
        payload : val
    }
};

const ModalColumnSuccess = (val) =>{
    return {
        type : 'ModalColumnSuccess',
        payload : val
    }
};

const ModalColumnErr = (val) =>{
    return {
        type : 'ModalColumnErr',
        payload : val
    }
};

export const FetchModalColumnData = (id) =>{
    return (dispatch)=>{
        dispatch(ModalColumnReq());
        axios.get(`http://localhost:8080/VF/getcolumn?formId=${id}`)
        .then((res)=>{
            dispatch(ModalColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ModalColumnErr(err))
        })
    }

}


