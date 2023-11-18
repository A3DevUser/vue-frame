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

export const EmdRed = (state=null,action) =>{
    switch(action.type){
        case 'EmdAct' : return action.payload
        default : return state
    }
}


export const DropDownValRed = (state=null,action) =>{
    switch(action.type){
        case 'DropDownVal' : return action.payload
        default : return state
    }
}

export const ExcelDataRed = (state=null,action) =>{
    switch(action.type){
        case 'ExcelDataAct' : return action.payload
        default : return state
    }
}
