import axios from "axios";

const DropValSecReq = (val) =>{
    return {
        type : 'DropValSecReq',
        payload : val
    }
};

const DropValSecSuccess = (val) =>{
    return {
        type : 'DropValSecSuccess',
        payload : val
    }
};

const DropValSecErr = (val) =>{
    return {
        type : 'DropValSecErr',
        payload : val
    }
};

export const FetchDropValSecData = (DropData) =>{
    return (dispatch)=>{
        dispatch(DropValSecReq());
        axios.get(`http://localhost:8080/VF/DropDataColData?jsonDrop=${DropData}`)
        .then((res)=>{
            dispatch(DropValSecSuccess(res.data))
            // console.log("FinalApival",res.data)
        })
        .catch((err)=>{
            dispatch(DropValSecErr(err))
        })
    }

}


