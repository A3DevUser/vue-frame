import axios from "axios";

const FormExcelReq = (val) =>{
    return {
        type : 'FormExcelReq',
        payload : val
    }
};

const FormExcelSuccess = (val) =>{
    return {
        type : 'FormExcelSuccess',
        payload : val 
    }
};

const FormExcelErr = (val) =>{
    return {
        type : 'FormExcelErr',
        payload : val
    }
};

export const PostFormExcelData = (data) =>{
    return (dispatch)=>{
        dispatch(FormExcelReq());
        axios.post(`http://localhost:8080/VF/callWorkflowProcedure`,data)
        .then((res)=>{
            dispatch(FormExcelSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(FormExcelErr(err))
        })
    }

}


