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

export const FetchDropValData = (FormId,GridId,ColId,JSON,oldData) =>{
    return (dispatch)=>{
        dispatch(DropValReq());
        axios.get(`http://localhost:8080/VF/dropdown?formId=${FormId}&colId=${ColId}&gridId=${GridId}&jsonDrop=${JSON}`)
        .then((res)=>{
            // console.log("JSONval",[...oldData,...res.data])

            dispatch(DropValSuccess(
                
                [...oldData,...res.data.map((mres)=>{return {...mres,ColId : ColId}})]
                .filter(
                    (obj, index, self) =>
                      index ===
                      self.findIndex(
                        (o) => o.ColId === obj.ColId && o.storedValue === obj.storedValue
                      )
                  )
                ))
        })
        .catch((err)=>{
            dispatch(DropValErr(err))
        })
    }

}


