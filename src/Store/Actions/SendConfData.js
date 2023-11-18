import { MainObject } from "../../Component/Elements/commonFun"
import axios from "axios"
import { ModalAlert } from "../../Component/ModalCompo"
import { useState } from "react"
import { Alert } from "react-bootstrap"

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
    return function(dispatch){
        dispatch(ConfReq())
        axios.post(api,FormConfInfo)
        .then((res)=>{
            // const FormDtls = res.data.map((Dtls=>Dtls))
            dispatch(ConfSuccess(res.data))
        //    return  <Alert variant="success">This is sucess</Alert>
        })
        .catch((err)=>{
            dispatch(ConfError(err))
        //   return <Alert variant="danger">This is error</Alert>
        })
    }

}