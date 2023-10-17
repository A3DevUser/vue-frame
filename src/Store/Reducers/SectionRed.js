const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const SectionRed = (state = initialState, action) =>{
    switch(action.type){
        case 'SectionReq' : return {
            ...state
        }
        case 'SectionSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'SectionErr' : return{
            loading : true, val : [] , err :action.payload
        }
        case 'ResetAct' : return {...state}

        default : return {
            ...state
        }
    }
}