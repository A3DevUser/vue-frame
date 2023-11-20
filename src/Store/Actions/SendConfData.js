import { MainObject } from "../../Component/Elements/commonFun"
import axios from "axios"
import { ModalAlert } from "../../Component/ModalCompo"
import { useState } from "react"
import { Alert } from "react-bootstrap"
import { AlertData } from "../../Component/FormConf"



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
            // return MainObject.alert('Data Save Successfully')
            return AlertData.AlertData('alert alert-primary','Data Save Successfully','true')
        //    return  <Alert variant="success">This is sucess</Alert>
        // return <Alert severity="success">This is a success alert — check it out!</Alert>
        })
        .catch((err)=>{
            dispatch(ConfError(err))
            // return MainObject.alert(`Error Occurred: ${err}`)
            let ErrorLog = JSON.stringify(`Error Occurred: ${err}`)
            return AlertData.AlertData('alert alert-danger',err.message,'ture')
        //   return <Alert variant="danger">This is error</Alert>
        })
    }

}