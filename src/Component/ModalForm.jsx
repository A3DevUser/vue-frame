import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchModalColumnData } from '../Store/Actions/ModalColumn';
import { FetchModalGridData } from '../Store/Actions/ModalGrid';
import { FetchModalSectionData } from '../Store/Actions/ModalSection';
import { MainObject } from './Elements/commonFun'
import Form from './Form'

const ModalForm = () => {


  const dispatch = useDispatch();
  const ModalSectionRed = useSelector((state)=>state.ModalSectionRed)
  const ModalColumnRed = useSelector((state)=>state.ModalColumnRed)
  const FormIdRed = useSelector((state)=>state.FormIdRed)
  const FormDatRed = useSelector((state) => state.FormDatRed)
  const ModalGridRed = useSelector((state)=>state.ModalGridRed)

  const [defaultVal,setdefaultVal] =useState([])
  const [obj, setObj] = useState({});


  useEffect(()=>{
      dispatch(FetchModalSectionData('FORM-101'))
      dispatch(FetchModalGridData('FORM-101'))
      dispatch(FetchModalColumnData('FORM-101'))
  },[])

  // useEffect(()=>{
  //   console.log('modal',ModalSectionRed)
  //   console.log('modal',ModalGridRed)
  //   console.log('modal',ModalColumnRed)
  // },[ModalSectionRed])
  useEffect(()=>{
      // if((FormDatRed[FormDatRed.length-1] != undefined)&&(FormDatRed != null)){
      //   if(FormDatRed[FormDatRed.length-1][0] != undefined){
      //      const colList = Object.keys(FormDatRed[FormDatRed.length-1][0])
      //      const secId = ModalColumnRed.val.filter((fil)=>{return colList.includes(fil.accessor) })[0].subSecId
      //      setObj((prevObj) => {
      //       return {
      //         ...prevObj,
      //         [secId]: FormDatRed[FormDatRed.length - 1],
      //       };
      //     });
      //   }
      // }
    },[])


  return (
<div style={{display: 'flex', flexDirection: 'row', maxHeight:'100vh' }} className='main-div'>
  <div style={{flex: '15%'}} className='bg-light'>
{
  ModalSectionRed.loading ? MainObject.loader() : ModalGridRed.loading ? MainObject.loader() :  MainObject.SectionNav(ModalSectionRed.val,ModalGridRed.val,setdefaultVal)
  }
  </div>
  <div style={{flex: '95%',height:'80vh', maxHeight:'80vh', overflow:'scroll'}} data-spy="scroll" data-target='sectionNavbar' className='bg-light'>
  {
        ModalSectionRed.loading ? MainObject.loader() : ModalGridRed.loading ? MainObject.loader() : 
         ModalColumnRed.loading ? MainObject.loader() :
      defaultVal&&MainObject.tabs(ModalSectionRed.val,ModalGridRed.val,ModalColumnRed.val,[],defaultVal,setdefaultVal)
        //  MainObject.accordion(ModalSectionRed.val,SubSectionRed.val,ModalColumnRed.val,[],width,defaultVal,setdefaultVal) 
  }
  </div>
    </div>
  )
}

export default ModalForm