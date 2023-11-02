import axios from "axios"

export const ConfReq = (getConfData)=>{
    return{
        type:'ConfReq',
        payload : getConfData
    }
}

export const ConfSuccess = (getConfData)=>{
    return{
        type:'ConfSuccess',
        payload : getConfData
    }
}

export const ConfError = (getConfData)=>{
    return{
        type:'ConfError',
        payload : getConfData
    }
}

export const FormConfData = (api,FormConfInfo)=>{
    console.log(api,FormConfInfo)
    return function(dispatch){
        dispatch(ConfReq())
        axios.post(api,FormConfInfo)
        .then((res)=>{
            // const FormDtls = res.data.map((Dtls=>Dtls))
            dispatch(ConfSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ConfError(err))
        })
    }
}