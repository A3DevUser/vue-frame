import React, { useEffect } from 'react'
import { MainObject } from '../Elements/commonFun'
import { FetchNavbarData } from '../../Store/Actions/NavBar'
import { useDispatch,useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const dispatch = useDispatch();
    const NavBarRed = useSelector((state)=>state.NavBarRed)

    useEffect(()=>{
        dispatch(FetchNavbarData('FORM-101'))
    },[])

return (<>

{ NavBarRed.loading ? MainObject.loader() :  <nav className='bg-secondary p-2'>
    {
        NavBarRed.val.map((res,i)=>{
            return <Link to={'/Form'} >{res.navName}</Link>
        })
    }
</nav> }
</>)
}

export default Navbar