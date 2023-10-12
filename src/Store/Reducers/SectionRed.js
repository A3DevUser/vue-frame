const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const SectionRed = (state = initialState, action) =>{
    return(
        action.type == 'SectionReq' ? {...initialState} : 
        action.type == 'SectionSuccess' ? {loading : false, val : action.payload, err :''} :
        action.type == 'SectionErr' ? {loading : true, val : [], err :action.payload} :
        {...initialState}
    )
}