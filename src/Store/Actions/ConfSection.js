import axios from "axios";

const ConfSectionReq = (val) =>{
    return {
        type : 'ConfSectionReq',
        payload : val
    }
};

const ConfSectionSuccess = (val) =>{
    return {
        type : 'ConfSectionSuccess',
        payload : val
    }
};

const ConfSectionErr = (val) =>{
    return {
        type : 'ConfSectionErr',
        payload : val
    }
};


export const FetchConfSectionData = (id) =>{
    return (dispatch)=>{
        dispatch(ConfSectionReq());
        axios.get(`http://localhost:8080/VF/getConSection?formId=${id}`)
        .then((res)=>{
            dispatch(ConfSectionSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ConfSectionErr(err))
        })
    }

}


