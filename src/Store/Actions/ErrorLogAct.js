import axios from "axios"

export const ErrorLogReq = (getErrorLogData)=>{
    return{
        type:'ErrorLogReq',
        payload : getErrorLogData
    }
}

export const ErrorLogSuccess = (getErrorLogData)=>{
    return{
        type:'ErrorLogSuccess',
        payload : getErrorLogData
    }
}

export const ErrorLogError = (getErrorLogData)=>{
    return{
        type:'ErrorLogError',
        payload : getErrorLogData
    }
}

export const FormErrorLogData = (FormErrorLogInfo)=>{
    return function(dispatch){
        dispatch(ErrorLogReq())
        axios.post(`http://localhost:8080/VF/getErrorLog?errorLog=${FormErrorLogInfo}`)
        .then((res)=>{
            dispatch(ErrorLogSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ErrorLogError(err))
        })
    }
}