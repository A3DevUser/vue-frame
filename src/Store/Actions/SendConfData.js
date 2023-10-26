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

export const FormConfData = (FormConfInfo)=>{
    return function(dispatch){
        dispatch(ConfReq())
        axios.post(`http://localhost:8080/VF/setFormData`,FormConfInfo)
        .then((res)=>{
            const FormDtls = res.data.map((Dtls=>Dtls))
            dispatch(ConfSuccess(FormDtls))
            // console.log(JSON.stringify(res.data))
        })
        .catch((err)=>{
            dispatch(ConfError(err))
        })
    }
}