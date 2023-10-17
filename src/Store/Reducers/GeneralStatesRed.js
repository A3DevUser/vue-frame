export const FormIdRed = (state=null,action) =>{
    switch(action.type){
        case 'FormIdAct' : return action.payload

        default : return state
    }

}