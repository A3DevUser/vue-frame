import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSectionData } from '../Store/Actions/Section';
import { MainObject } from './Elements/commonFun';
// import FormTable from './FormTableDir/FormTable';
import { FetchColumnData } from '../Store/Actions/Column';
import { FetchSubSectionData } from '../Store/Actions/SubSection';
import { ResetAct } from '../Store/Actions/GeneralStates';

const Form = () => {

    const dispatch = useDispatch();
    const SectionRed = useSelector((state)=>state.SectionRed)
    const ColumnRed = useSelector((state)=>state.ColumnRed)
    const SubSectionRed = useSelector((state)=>state.SubSectionRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const FormDatRed = useSelector((state) => state.FormDatRed)

    const [defaultVal,setdefaultVal] =useState([])
    const [obj, setObj] = useState({});


    useEffect(()=>{
        dispatch(FetchSectionData(FormIdRed))
        dispatch(FetchSubSectionData(FormIdRed))
        dispatch(FetchColumnData(FormIdRed))
    },[FormIdRed])

    // let obj = {};
    // SubSectionRed.val.forEach((res)=>{return obj[res.subSecId]=''})  
    console.log('newObj',obj)
    useEffect(()=>{
        if((FormDatRed[FormDatRed.length-1] != undefined)&&(FormDatRed != null)){
          if(FormDatRed[FormDatRed.length-1][0] != undefined){
             const colList = Object.keys(FormDatRed[FormDatRed.length-1][0])
             const secId = ColumnRed.val.filter((fil)=>{return colList.includes(fil.accessor) })[0].subSecId
             setObj((prevObj) => {
              return {
                ...prevObj,
                [secId]: FormDatRed[FormDatRed.length - 1],
              };
            });
          }
        }
      },[FormDatRed])

      console.log('finalObj',Object.values(obj))

    useEffect(()=>{
      console.log(SectionRed)
      console.log(ColumnRed)
    },[SectionRed,ColumnRed])

    const width = '75vw'

  return (
<div style={{display: 'flex', flexDirection: 'row', maxHeight:'100vh' }} className='main-div'>
  <div style={{flex: '5%'}} className='bg-light'>
{
  SectionRed.loading ? MainObject.loader() : SubSectionRed.loading ? MainObject.loader() :  MainObject.SectionNav(SectionRed.val,SubSectionRed.val,setdefaultVal)
  }
  </div>
  <div style={{flex: '95%',height:'80vh', maxHeight:'80vh', overflow:'scroll' }}>
  {
        SectionRed.loading ? MainObject.loader() : SubSectionRed.loading ? MainObject.loader() : 
         ColumnRed.loading ? MainObject.loader() :
         MainObject.accordion(SectionRed.val,SubSectionRed.val,ColumnRed.val,[],width,defaultVal,setdefaultVal) 
  }
  </div>
    </div>
  )
}

export default Form
