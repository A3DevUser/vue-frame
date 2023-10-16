import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSectionData } from '../Store/Actions/Section';
import { MainObject } from './Elements/commonFun';
// import FormTable from './FormTableDir/FormTable';
import { FetchColumnData } from '../Store/Actions/Column';
import { FetchSubSectionData } from '../Store/Actions/SubSection';

const Form = () => {

    const dispatch = useDispatch();
    const SectionRed = useSelector((state)=>state.SectionRed)
    const ColumnRed = useSelector((state)=>state.ColumnRed)
    const SubSectionRed = useSelector((state)=>state.SubSectionRed)

    const [defaultVal,setdefaultVal] =useState([])

    useEffect(()=>{
        dispatch(FetchSectionData('FORM-101'))
        dispatch(FetchSubSectionData('FORM-101'))
        dispatch(FetchColumnData('FORM-101'))
        
    },[])

    useEffect(()=>{
      console.log('defaultVal',defaultVal)
    },[defaultVal])

    // useEffect(()=>{
    //   console.log(SectionRed)
    //   console.log(ColumnRed)
    // },[SectionRed,ColumnRed])

    const width = '75vw'

  return (
<div style={{display: 'flex', flexDirection: 'row', maxHeight:'100vh' }} className='main-div'>
  <div style={{flex: '5%'}} className='bg-light'>
{
  SectionRed.loading ? MainObject.loader() : SubSectionRed.loading ? MainObject.loader() : MainObject.SectionNav(SectionRed.val,SubSectionRed.val,setdefaultVal)
  }
  </div>
  <div style={{flex: '95%',height:'70vh', maxHeight:'70vh', overflow:'scroll' }}>
  {
         defaultVal&&SectionRed.loading ? MainObject.loader() : SubSectionRed.loading ? MainObject.loader() : 
         ColumnRed.loading ? MainObject.loader() :
         MainObject.accordion(SectionRed.val,SubSectionRed.val,ColumnRed.val,[{col1 : '',col2:'', col3 :''},{col1 : '',col2:'', col3 :''},{col1 : '',col2:'', col3 :''},{col1 : '',col2:'', col3 :''}],width,defaultVal,setdefaultVal) 
  }
  </div>
    </div>
  )
}

export default Form
