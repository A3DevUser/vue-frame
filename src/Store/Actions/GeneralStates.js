export const FormIdAct = (id) =>{
    return {
        type :'FormIdAct',
        payload : id
    }
} 

export const ResetAct = ()=>{
    return {
        type : 'ResetAct'
    }
}

export const FormDataAct = (val) =>{
    return {
        type :'FormDataAct',
        payload : val
    }
}