import axios from "axios";

const DropValReq = (val) =>{
    return {
        type : 'DropValReq',
        payload : val
    }
};

const DropValSuccess = (val) =>{
    return {
        type : 'DropValSuccess',
        payload : val
    }
};

const DropValErr = (val) =>{
    return {
        type : 'DropValErr',
        payload : val
    }
};

export const FetchDropValData = (ColId) =>{
    alert(ColId)
    // return (dispatch)=>{
    //     dispatch(DropValReq());
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //     .then((res)=>{
    //         dispatch(DropValSuccess(res.data))
    //     })
    //     .catch((err)=>{
    //         dispatch(DropValErr(err))
    //     })
    // }

}


