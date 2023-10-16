import axios from "axios";

const NavbarReq = (val) =>{
    return {
        type : 'NavbarReq',
        payload : val
    }
};

const NavbarSuccess = (val) =>{
    return {
        type : 'NavbarSuccess',
        payload : val
    }
};

const NavbarErr = (val) =>{
    return {
        type : 'NavbarErr',
        payload : val
    }
};

export const FetchNavbarData = (id) =>{
    return (dispatch)=>{
        dispatch(NavbarReq());
        axios.get(`http://localhost:8080/VF/getNavEle`)
        .then((res)=>{
            dispatch(NavbarSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(NavbarErr(err))
        })
    }

}


