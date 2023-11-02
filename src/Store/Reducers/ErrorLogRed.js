const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ErrorLogRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ErrorLogReq' : return {
            ...state
        }
        case 'ErrorLogSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'ErrorLogError' : return{
            loading : true, val : [] , err :action.payload
        }
        default : return {
            ...state
        }
    }
}