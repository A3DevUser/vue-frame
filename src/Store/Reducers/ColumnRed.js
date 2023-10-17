const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ColumnRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ColumnReq' : return {...state}

        case 'ColumnSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'ColumnErr' : return {
            loading : true,
            val : [],
            err : action.payload
        }
        
        case 'ResetAct' : return {...state}

        default : return {...state}
    }
}