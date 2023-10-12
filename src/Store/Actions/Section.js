import axios from "axios";

const SectionReq = (val) =>{
    return {
        type : 'SectionReq',
        payload : val
    }
};

const SectionSuccess = (val) =>{
    return {
        type : 'SectionSuccess',
        payload : val
    }
};

const SectionErr = (val) =>{
    return {
        type : 'SectionErr',
        payload : val
    }
};

export const FetchSectionData = (id) =>{
    return (dispatch)=>{
        dispatch(SectionReq());
        axios.get(`http://localhost:8080/VF/getSection?formId=${id}`)
        .then((res)=>{
            dispatch(SectionSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(SectionErr(err))
        })
    }

}


