export const FormIdRed = (state=null,action) =>{
    switch(action.type){
        case 'FormIdAct' : return action.payload
        default : return state
    }
}

export const FormDatRed = (state=[],action) =>{
    switch(action.type){
        case 'FormDataAct' : return action.payload
        default : return state
    }
}