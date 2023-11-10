export const FormIdAct = (id) =>{
    return {
        type :'FormIdAct',
        payload : id
    }
} 

export const EmdAct = (emd) =>{
    return {
        type : 'EmdAct',
        payload : emd
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

export const DropDownVal = (val) =>{
    return {
        type :'DropDownVal',
        payload : val
    }
}