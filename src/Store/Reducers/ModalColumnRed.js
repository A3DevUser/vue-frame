const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ModalColumnRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ModalColumnReq' : return {...state}

        case 'ModalColumnSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'ModalColumnErr' : return {
            loading : true,
            val : [],
            err : action.payload
        }
        
        default : return {...state}
    }
}