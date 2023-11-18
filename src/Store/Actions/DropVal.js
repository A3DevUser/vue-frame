import axios from "axios";
import { DropDownVal } from "./GeneralStates";

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

let newObj = {};
export const FetchDropValData = (FormId,GridId,ColId,JSON,oldData,rowInd) =>{

    return (dispatch)=>{
        dispatch(DropValReq());
        axios.get(`http://localhost:8080/VF/dropdown?formId=${FormId}&colId=${ColId}&gridId=${GridId}&jsonDrop=${JSON}`)
        .then((res)=>{
            // console.log("JSONval",rowInd)
            newObj[ColId+rowInd] = res.data.map((mres)=>{return {...mres,ColId : ColId,rowInd:rowInd}})
            // console.log("JSONval",newObj)
            let firstSpread = Object.values(newObj)

            // console.log('newObj',firstSpread.flat())

            const dropValdd = firstSpread.flat()

            dispatch(DropValSuccess(dropValdd))
        })
        .catch((err)=>{
            dispatch(DropValErr(err))
        })
    }

}


