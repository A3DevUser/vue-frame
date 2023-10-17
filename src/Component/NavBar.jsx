import React, { useEffect } from 'react'
import { MainObject } from './Elements/commonFun' 
import { useDispatch,useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FetchNavbarData } from '../Store/Actions/NavBar'
import { FormIdAct, ResetAct } from '../Store/Actions/GeneralStates'



const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const NavBarRed = useSelector((state)=>state.NavBarRed)

    useEffect(()=>{
        dispatch(FetchNavbarData())
    },[])

    const handleNavigate = (res) =>{
        dispatch(ResetAct())
        dispatch(FormIdAct(res.formId))
        navigate(res.navigate)
    }

return (
<>
<nav className='bg-primary'>
{
    NavBarRed.val.map((res,i)=>{
        if(res.navType=='img'){
            return <img src={res.url} alt="logo" style={{width:'10vw', height:'4vw'}}/>

        }else{
            return <button onClick={()=>{handleNavigate(res)}} key={i} className=' btn btn-primary btn-sm my-1 mx-2 p-2'>{res.navName}</button>
        }
    })
}
</nav>
</>
)
}

export default Navbar