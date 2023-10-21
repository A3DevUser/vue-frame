import React, { useEffect, useState } from 'react'
import { MainObject } from './Elements/commonFun' 
import { useDispatch,useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FetchNavbarData } from '../Store/Actions/NavBar'
import { FormIdAct, ResetAct } from '../Store/Actions/GeneralStates'
import { Modal } from 'react-bootstrap'


const Navbar = () => {

    const [show,setshow] = useState(false)
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

    function funProfile() {
        setshow(!show)
    }
return (
<>
<nav 
style={{backgroundColor:'#131D40'}}
// className='bg-primary'
>
<img src={'./User2.png'} alt="user" className='m-1' style={{float:'right',height:'6.5vh', width:'3.2vw', borderRadius:'30px'}} onClick={funProfile}/>
{MainObject.SimpleModal('User Info','this is body',show,funProfile)}
{
    NavBarRed.val.map((res,i)=>{
        if(res.navType=='img'){
            return <img src={res.url} alt="logo" style={{width:'10vw', height:'4vw'}}/>

        }else if(res.navType=='conf'){
            return <button onClick={()=>{handleNavigate(res)}} key={i} 
            className=' btn btn-sm my-1 mx-2 p-2' 
            style={{backgroundColor:'#131D40', color:'white', float:'right'}}
            >{res.navName}</button>
        }
        else{
            return <button onClick={()=>{handleNavigate(res)}} key={i} 
            className=' btn btn-sm my-1 mx-2 p-2' 
            style={{backgroundColor:'#131D40', color:'white'}}
            >{res.navName}</button>
        }
    })
}
</nav></>
)
}

export default Navbar