const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ColumnRed = (state = initialState, action) =>{
    return(
        action.type == 'ColumnReq' ? {...initialState} : 
        action.type == 'ColumnSuccess' ? {loading : false, val : action.payload, err :''} :
        action.type == 'ColumnErr' ? {loading : true, val : [], err :action.payload} :
        {...initialState}
    )
}