import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainObject } from './Elements/commonFun';
// import FormTable from './FormTableDir/FormTable';

import { FetchConfColumnData } from '../Store/Actions/ConfColumn'
import { FetchConfGridData } from '../Store/Actions/ConfGridAct'
import { FetchConfSectionData } from '../Store/Actions/ConfSection'


const FormConf = () => {

    const dispatch = useDispatch();
    const SectionRed = useSelector((state)=>state.ConfSectionRed)
    const ColumnRed = useSelector((state)=>state.ConfColumnRed)
    const GridRed = useSelector((state)=>state.ConfGridRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const FormDatRed = useSelector((state) => state.FormDatRed)


    const [defaultVal,setdefaultVal] =useState([])
    const [obj, setObj] = useState({});


    useEffect(()=>{
        dispatch(FetchConfSectionData('FORM-105'))
        dispatch(FetchConfGridData('FORM-105'))
        dispatch(FetchConfColumnData('FORM-105'))
    },[FormIdRed])

      console.log('location',window.location.pathname)
    // let obj = {};
    // SubSectionRed.val.forEach((res)=>{return obj[res.subSecId]=''})  
    console.log('newObj',obj)
    useEffect(()=>{
        // if((FormDatRed[FormDatRed.length-1] != undefined)&&(FormDatRed != null)){
        //   if(FormDatRed[FormDatRed.length-1][0] != undefined){
        //      const colList = Object.keys(FormDatRed[FormDatRed.length-1][0])
        //      const secId = ColumnRed.val.filter((fil)=>{return colList.includes(fil.accessor) })[0].subSecId
        //      setObj((prevObj) => {
        //       return {
        //         ...prevObj,
        //         [secId]: FormDatRed[FormDatRed.length - 1],
        //       };
        //     });
        //   }
        // }
      },[FormDatRed])

      console.log('finalObj',Object.values(obj))

    useEffect(()=>{
      console.log(SectionRed)
      console.log('GridRed',GridRed)
    },[GridRed])

    const width = '75vw'


  return (
    <div style={{display: 'flex', flexDirection: 'row', maxHeight:'100vh' }} className='main-div'>
  <div style={{flex: '15%'}} className='bg-light'>
{
  SectionRed.loading ? MainObject.loader() : GridRed.loading ? MainObject.loader() :  MainObject.SectionNav(SectionRed.val,GridRed.val,setdefaultVal)
  }
  </div>
  <div style={{flex: '95%',height:'80vh', maxHeight:'80vh', overflow:'scroll'}} data-spy="scroll" data-target='sectionNavbar' className='bg-light'>
  {
        SectionRed.loading ? MainObject.loader() : GridRed.loading ? MainObject.loader() : 
         ColumnRed.loading ? MainObject.loader() :
      defaultVal&&MainObject.tabs(SectionRed.val,GridRed.val,ColumnRed.val,[],defaultVal,setdefaultVal)
        //  MainObject.accordion(SectionRed.val,SubSectionRed.val,ColumnRed.val,[],width,defaultVal,setdefaultVal) 
  }
  </div>
    </div>
  )
}

export default FormConf