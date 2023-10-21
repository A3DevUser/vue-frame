import axios from "axios";

const ModalSectionReq = (val) =>{
    return {
        type : 'ModalSectionReq',
        payload : val
    }
};

const ModalSectionSuccess = (val) =>{
    return {
        type : 'ModalSectionSuccess',
        payload : val
    }
};

const ModalSectionErr = (val) =>{
    return {
        type : 'ModalSectionErr',
        payload : val
    }
};


export const FetchModalSectionData = (id) =>{
    return (dispatch)=>{
        dispatch(ModalSectionReq());
        axios.get(`http://localhost:8080/VF/getSection?formId=${id}`)
        .then((res)=>{
            dispatch(ModalSectionSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ModalSectionErr(err))
        })
    }

}


